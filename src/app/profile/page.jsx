import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Image from "next/image";

export const metadata = {
  title: "Profile",
};

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <div>Unauthorized</div>;
  }

  const {token} = await auth.api.getToken({
    headers: await headers()
  })
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/users?email=${session.user.email}`,
    {
      cache: "no-store",
      headers:{
        authorization: `Bearer ${token}`
      }
    },
  );

  const user = await res.json();

  return (
    <section className="min-h-screen bg-background py-12">
      <div className="mx-auto w-11/12 max-w-3xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          {/* Header */}

          <div className="flex flex-col items-center border-b border-border px-8 py-10">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/10">
              <Image
                src={user.image}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>

            <h1 className="mt-5 text-3xl font-bold text-foreground">
              {user.name}
            </h1>

            <p className="mt-2 text-muted-foreground">{user.email}</p>
          </div>

          {/* Info */}

          <div className="space-y-5 p-8">
            <div className="flex items-center justify-between rounded-2xl border border-border p-4">
              <span className="text-muted-foreground">Name</span>

              <span className="font-semibold">{user.name}</span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-border p-4">
              <span className="text-muted-foreground">Email</span>

              <span className="font-semibold">{user.email}</span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-border p-4">
              <span className="text-muted-foreground">Joined</span>

              <span className="font-semibold">
                {new Date(user.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
