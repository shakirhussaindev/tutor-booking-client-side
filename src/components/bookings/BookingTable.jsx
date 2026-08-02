"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const BookingTable = ({ bookings }) => {
  const [tableData, setTableData] = useState(bookings);
  const [loadingId, setLoadingId] = useState(null);

  const handleCancel = async (id) => {
    setLoadingId(id);

    const { data: tokenData } = await authClient.token();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${id}`,
        {
          method: "PATCH",
          headers: {
            authorization: `Bearer ${tokenData?.token}`,
          },
        },
      );

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Failed to cancel booking.");
        return;
      }

      if (result.modifiedCount) {
        toast.success("Booking cancelled.");

        setTableData((prev) =>
          prev.map((booking) =>
            booking._id === id ? { ...booking, status: "cancelled" } : booking,
          ),
        );
      }
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong.");
    } finally {
      setLoadingId(null);
    }
  };

  if (!tableData.length) {
    return (
      <div className="rounded-2xl border bg-card py-20 text-center">
        <h2 className="text-2xl font-bold">No Bookings Yet</h2>

        <p className="mt-3 text-muted-foreground">
          You haven't booked any tutoring sessions yet.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border bg-card shadow-sm">
      <table className="w-full">
        <thead className="border-b bg-muted/40">
          <tr>
            <th className="px-6 py-4 text-left">Tutor</th>
            <th className="px-6 py-4 text-left">Student</th>
            <th className="px-6 py-4 text-left">Email</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((booking) => (
            <tr key={booking._id} className="border-b last:border-none">
              <td className="px-6 py-4 font-medium">{booking.tutorName}</td>

              <td className="px-6 py-4">{booking.studentName}</td>

              <td className="px-6 py-4">{booking.studentEmail}</td>

              <td className="px-6 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    booking.status === "cancelled"
                      ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                      : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                  }`}
                >
                  {booking.status}
                </span>
              </td>

              <td className="px-6 py-4 text-center">
                <Button
                  variant="destructive"
                  disabled={
                    booking.status === "cancelled" || loadingId === booking._id
                  }
                  onClick={() => handleCancel(booking._id)}
                >
                  {loadingId === booking._id
                    ? "Cancelling..."
                    : booking.status === "cancelled"
                      ? "Cancelled"
                      : "Cancel"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
