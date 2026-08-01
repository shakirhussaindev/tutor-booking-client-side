import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import BookingTable from "@/components/bookings/BookingTable";

export const metadata = {
  title: "My Booked Sessions | Smart Tutor",
};

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return <div>Unauthorized</div>;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings?email=${session.user.email}`,
    {
      cache: "no-store",
    },
  );

  const bookings = await res.json();

  return (
    <section className="min-h-screen py-12">
      <div className="mx-auto w-11/12 max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold">My Booked Sessions</h1>

        <BookingTable bookings={bookings} />
      </div>
    </section>
  );
};

export default MyBookingsPage;
