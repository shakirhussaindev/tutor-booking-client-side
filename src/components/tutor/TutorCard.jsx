"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiMonitor,
  FiAward,
} from "react-icons/fi";

import { Button } from "@/components/ui/button";

const TutorCard = ({ tutor }) => {
  const {
    _id,
    image,
    name,
    subject,
    AvailableDays,
    StartDate,
    teachingMode,
    HourlyFee,
    experience,
  } = tutor;

  const info = [
    {
      icon: <FiCalendar className="size-4" />,
      label: "Available",
      value: AvailableDays,
    },
    {
      icon: <FiMonitor className="size-4" />,
      label: "Mode",
      value: teachingMode,
    },
    {
      icon: <FiAward className="size-4" />,
      label: "Experience",
      value: experience,
    },
    {
      icon: <FiClock className="size-4" />,
      label: "Starts",
      value: StartDate,
    },
  ];

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-xl
        border
        bg-card
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-xl
      "
    >
      {/* Image */}

      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-primary
            px-3
            py-1
            text-xs
            font-semibold
            text-primary-foreground
            shadow-lg
          "
        >
          {subject}
        </span>
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">
        <div>
          <h2 className="line-clamp-1 text-2xl font-bold">{name}</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Professional Tutor
          </p>
        </div>

        {/* Information */}

        <div className="mt-6 space-y-4">
          {info.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                "
              >
                {item.icon}
              </div>

              <div className="flex-1 overflow-hidden">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </p>

                <p className="line-clamp-1 font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Price */}

        <div className="mt-6 border-t border-border pt-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Hourly Fee</p>

              <div className="mt-1 flex items-center gap-1">
                <FiDollarSign className="text-primary" />

                <h3 className="text-2xl font-bold text-primary">{HourlyFee}</h3>
              </div>
            </div>

            <span className="text-sm text-muted-foreground">/ Hour</span>
          </div>
        </div>

        {/* Button */}

        <Link href={`/tutors/${_id}`}>
          <Button size="lg" className="mt-6 h-11 w-full rounded-xl">
            View Details
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default TutorCard;
