"use client";

import Link from "next/link";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";

const BecomeTutorCTA = () => {
  return (
    <section className="py-24">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 text-white shadow-2xl">
          {/* Decorative Blur */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative grid gap-14 px-8 py-16 md:px-14 lg:grid-cols-2 lg:px-20">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                <FiBookOpen />
                Join Smart Tutor
              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
                Share Your Knowledge.
                <br />
                Inspire Future Learners.
              </h2>

              <p className="mt-6 max-w-xl text-white/85 leading-8">
                Become part of a growing community of passionate educators.
                Create your tutor profile, connect with motivated students, and
                teach on your own schedule.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center gap-5 lg:items-end">
              <Link
                href="/add-tutor"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-sky-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Become a Tutor
                <FiArrowRight />
              </Link>

              <Link
                href="/tutors"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
              >
                Browse Tutors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeTutorCTA;
