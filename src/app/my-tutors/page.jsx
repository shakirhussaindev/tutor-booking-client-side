import MyTutorsTable from "@/components/my-tutors/MyTutorsTable";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "My Tutors | Smart Tutor",
};

export default async function MyTutorsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const {token} = await auth.api.getToken({
    headers: await headers()
  })

  // if (!session) return null;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors?email=${session.user.email}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const tutors = await res.json();

  return (
    <section className="py-10 lg:py-14">
      <div className="mx-auto w-11/12 max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-center max-w-3xl mx-auto">

            <h1 className="mt-4 text-3xl font-bold lg:text-4xl">My Tutors</h1>

            <p className="mt-2 text-muted-foreground">
              Manage, update and organize all tutors you've created.
            </p>
          </div>
        </div>

        <MyTutorsTable tutors={tutors} />
      </div>
    </section>
  );
}
