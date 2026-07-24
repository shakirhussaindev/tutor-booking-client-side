import React from "react";
import TutorCard from "../tutor/TutorCard";
import Link from "next/link";

const AvailableTutors = async() => {
  const res = await fetch("http://localhost:5000/featured");
  const tutors = await res.json()
  return (
    <section className="py-20 bg-slate-50">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold">
            Featured Tutors
          </span>

          <h2 className="text-4xl font-bold mt-5 text-slate-800">
            Available Tutors
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-slate-500">
            Discover qualified tutors across different subjects and start
            learning from the best today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor} />
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <Link
          href="/tutors"
          className="btn bg-sky-600 hover:bg-sky-700 border-none text-white px-8 rounded-xl"
        >
          View All Tutors
        </Link>
      </div>
    </section>
  );
};

export default AvailableTutors;
