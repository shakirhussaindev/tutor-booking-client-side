"use client";

import { useState } from "react";
import { FiCalendar, FiClock, FiPlayCircle, FiUsers } from "react-icons/fi";

import BookSessionModal from "./BookSessionModal";

const ScheduleCard = ({ tutor }) => {
  const [open, setOpen] = useState(false);

  const { AvailableDays, StartDate, TotalSlots, HourlyFee } = tutor;

  const sessionStarted = new Date() >= new Date(StartDate);

  const bookingDisabled = TotalSlots <= 0 || sessionStarted;

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
        {/* Header */}

        <div className="bg-gradient-to-r from-sky-600 to-cyan-500 p-6 text-white">
          <h2 className="text-2xl font-bold">Session Information</h2>

          <p className="mt-1 text-sm text-sky-100">
            Check schedule and availability.
          </p>
        </div>

        {/* Body */}

        <div className="space-y-5 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100">
              <FiCalendar className="text-lg text-sky-600" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Available Days</p>

              <h3 className="font-semibold text-foreground">{AvailableDays}</h3>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
              <FiPlayCircle className="text-lg text-green-600" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Session Starts</p>

              <h3 className="font-semibold text-foreground">{StartDate}</h3>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100">
              <FiUsers className="text-lg text-orange-600" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Available Slots</p>

              <h3 className="font-semibold text-foreground">{TotalSlots}</h3>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100">
              <FiClock className="text-lg text-emerald-600" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Hourly Fee</p>

              <h3 className="text-2xl font-bold text-green-600">
                ৳ {HourlyFee}
              </h3>
            </div>
          </div>

          {/* Warning */}

          {TotalSlots <= 0 && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
              This session is fully booked.
            </div>
          )}

          {sessionStarted && TotalSlots > 0 && (
            <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-700">
              Booking is no longer available because the session has already
              started.
            </div>
          )}

          {/* Button */}

          <button
            disabled={bookingDisabled}
            onClick={() => setOpen(true)}
            className={`
              mt-2
              h-12
              w-full
              rounded-xl
              font-semibold
              text-white
              transition
              ${
                bookingDisabled
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-sky-600 hover:bg-sky-700"
              }
            `}
          >
            {bookingDisabled ? "Booking Closed" : "Book Session"}
          </button>
        </div>
      </div>

      <BookSessionModal open={open} setOpen={setOpen} tutor={tutor} />
    </>
  );
};

export default ScheduleCard;
