// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import {
//   FiBookOpen,
//   FiDollarSign,
//   FiMapPin,
//   FiClock,
//   FiCalendar,
//   FiPlayCircle,
//   FiMonitor,
// } from "react-icons/fi";

// const TutorCard = ({ tutor }) => {
//   const { image, name, subject, AvailableDays, StartDate, teachingMode, HourlyFee } = tutor;
//   return (
//     <div
//       className="group h-full transition-all duration-300 hover:-translate-y-2"
//     >
//       {/* Image */}
//       <div className="relative h-60 overflow-hidden">
//         <Image
//           src={image}
//           alt={name}
//           fill
//           className="object-cover hover:scale-105 transition duration-500"
//         />

//         <span className="absolute top-4 left-4 bg-sky-600 text-white text-xs font-semibold px-3 py-1 rounded-lg">
//           {subject}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <h2 className="text-xl font-bold text-slate-800">{name}</h2>

//         <p className="text-sky-600 font-medium mb-3">{subject}</p>

//         <div className="space-y-2 text-sm text-slate-600">
//           <div className="flex items-center gap-3">
//             <FiCalendar className="text-sky-600" />
//             <span className="font-medium">Available Time:</span>
//             <span>{AvailableDays}</span>
//           </div>

//           <div className="flex items-center gap-3">
//             <FiPlayCircle className="text-sky-600" />
//             <span className="font-medium">Session Starts:</span>
//             <span>{StartDate}</span>
//           </div>

//           <div className="flex items-center gap-3">
//             <FiMonitor className="text-sky-600" />
//             <span className="font-medium">Teaching Mode:</span>
//             <span>{teachingMode}</span>
//           </div>

//           <div className="flex items-center gap-3 ">
//             <FiDollarSign className="text-green-600" />
//             <span className="font-medium">Fee:</span>
//             <span> {HourlyFee}/Hour</span>
//           </div>
//         </div>

//         <Link
//           href={`/tutors/${tutor._id}`}
//           className="w-full mt-6 rounded-lg bg-sky-600 hover:bg-sky-700 text-white border-none px-4 py-2 inline-flex items-center justify-center"
//         >
//           Book Session
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default TutorCard;





"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FiCalendar,
  FiDollarSign,
  FiMonitor,
  FiPlayCircle,
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
  } = tutor;

  const info = [
    {
      icon: <FiCalendar />,
      label: "Available",
      value: AvailableDays,
    },
    {
      icon: <FiPlayCircle />,
      label: "Starts",
      value: StartDate,
    },
    {
      icon: <FiMonitor />,
      label: "Mode",
      value: teachingMode,
    },
    {
      icon: <FiDollarSign />,
      label: "Fee",
      value: `${HourlyFee}/Hour`,
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
      rounded-3xl
      border
      bg-card
      shadow-sm
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-primary/40
      hover:shadow-2xl
      "
    >
      {/* Image */}

      <div className="relative h-60 overflow-hidden">
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

        <span
          className="
          absolute
          left-5
          top-5
          rounded-full
          border
          border-white/20
          bg-white/15
          px-4
          py-1.5
          text-xs
          font-semibold
          text-white
          backdrop-blur-md
          "
        >
          {subject}
        </span>
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold tracking-tight">{name}</h3>

        <p className="mt-1 text-sm font-medium text-primary">{subject} Tutor</p>

        {/* Info */}

        <div className="mt-6 space-y-4">
          {info.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div
                className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
                "
              >
                {item.icon}
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </p>

                <p className="font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}

        <Button asChild size="lg" className="mt-8 w-full rounded-xl">
          <Link href={`/tutors/${_id}`}>Book Session</Link>
        </Button>
      </div>
    </article>
  );
};

export default TutorCard;
