"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FiBookOpen,
  FiDollarSign,
  FiMapPin,
  FiClock,
  FiCalendar,
  FiPlayCircle,
  FiMonitor,
} from "react-icons/fi";

const TutorCard = ({ tutor }) => {
  const { image, name, subject, AvailableDays, StartDate, teachingMode, HourlyFee } = tutor;
  return (
    

    <div className=" bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover hover:scale-105 transition duration-500"
        />

        <span className="absolute top-4 left-4 bg-sky-600 text-white text-xs font-semibold px-3 py-1 rounded-lg">
          {subject}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-slate-800">{name}</h2>

        <p className="text-sky-600 font-medium mb-3">{subject}</p>

        <div className="space-y-2 text-sm text-slate-600">
          <div className="flex items-center gap-3">
            <FiCalendar className="text-sky-600" />
            <span className="font-medium">Available Time:</span>
            <span>{AvailableDays}</span>
          </div>

          <div className="flex items-center gap-3">
            <FiPlayCircle className="text-sky-600" />
            <span className="font-medium">Session Starts:</span>
            <span>{StartDate}</span>
          </div>

          <div className="flex items-center gap-3">
            <FiMonitor className="text-sky-600" />
            <span className="font-medium">Teaching Mode:</span>
            <span>{teachingMode}</span>
          </div>

          <div className="flex items-center gap-3 ">
            <FiDollarSign className="text-green-600" />
            <span className="font-medium">Fee:</span>
            <span> {HourlyFee}/Hour</span>
          </div>
        </div>

        <Link href={`/tutors/${tutor._id}`} className=" btn w-full mt-6 rounded-lg bg-sky-600 hover:bg-sky-700 text-white border-none">
          Book Session
        </Link>
      </div>
    </div>
  );
};

export default TutorCard;
