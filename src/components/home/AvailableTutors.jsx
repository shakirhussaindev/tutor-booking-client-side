// import React from "react";
// import TutorCard from "../tutor/TutorCard";
// import Link from "next/link";

// const AvailableTutors = async() => {
//   const res = await fetch("http://localhost:5000/featured");
//   const tutors = await res.json()
//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="w-11/12 max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <span className="px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold">
//             Featured Tutors
//           </span>

//           <h2 className="text-4xl font-bold mt-5 text-slate-800">
//             Available Tutors
//           </h2>

//           <p className="max-w-2xl mx-auto mt-4 text-slate-500">
//             Discover qualified tutors across different subjects and start
//             learning from the best today.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {tutors.map((tutor) => (
//             <TutorCard key={tutor._id} tutor={tutor} />
//           ))}
//         </div>
//       </div>
//       <div className="text-center mt-12">
//         <Link
//           href="/tutors"
//           className="btn bg-sky-600 hover:bg-sky-700 border-none text-white px-8 rounded-xl"
//         >
//           View All Tutors
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default AvailableTutors;

import Link from "next/link";
import TutorCard from "../tutor/TutorCard";
import { Button } from "@/components/ui/button";

const AvailableTutors = async () => {
  const res = await fetch("http://localhost:5000/featured", {
    cache: "no-store",
  });

  const tutors = await res.json();

  return (
    <section className="py-20">
      <div className="mx-auto w-11/12 max-w-7xl">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Featured Tutors
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Learn From Expert Tutors
          </h2>

          <p className="mt-5 text-muted-foreground leading-7">
            Browse our hand-picked tutors across multiple subjects and start
            learning with experienced educators who can help you reach your
            academic goals.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {tutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor} />
          ))}
        </div>

        {/* CTA */}

        <div className="mt-14 flex justify-center">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href="/tutors">View All Tutors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AvailableTutors;