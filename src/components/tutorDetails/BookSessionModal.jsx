"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const BookSessionModal = ({ open, setOpen, tutor }) => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const handleBooking = async (e) => {
    e.preventDefault();

    if (!phone.trim()) {
      toast.error("Phone number is required.");
      return;
    }

    setLoading(true);

    const tutorBookingInfo = {
      studentName: user.name,
      studentEmail: user.email,
      phone,

      tutorId: tutor._id,
      tutorName: tutor.name,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(tutorBookingInfo),
        },
      );


      const result = await res.json();
      
      router.refresh();

      if (!res.ok) {
        toast.error(result.message);

        return;
      }
      setOpen(false);

      setPhone("");
      toast.success("Booking request is ready.");
      
    } catch (error) {
      console.log(error);

      toast.error("Booking failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-xl rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Session</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleBooking} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <Label>Student Name</Label>

              <Input value={user?.name || ""} readOnly />
            </div>

            <div>
              <Label>Student Email</Label>

              <Input value={user?.email || ""} readOnly />
            </div>

            <div>
              <Label>Phone</Label>

              <Input
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <Label>Tutor Name</Label>

              <Input value={tutor.name} readOnly />
            </div>

            <div className="md:col-span-2">
              <Label>Tutor ID</Label>

              <Input value={tutor._id} readOnly />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={loading}>
              {loading ? "Confirming..." : "Confirm Booking"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookSessionModal;
