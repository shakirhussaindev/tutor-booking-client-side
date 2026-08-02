"use client";

import CountUp from "react-countup";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FiStar } from "react-icons/fi";

const stats = [
  {
    icon: FaChalkboardTeacher,
    value: 500,
    suffix: "+",
    title: "Expert Tutors",
    color: "text-sky-600",
  },
  {
    icon: FaUserGraduate,
    value: 12000,
    suffix: "+",
    title: "Happy Students",
    color: "text-violet-600",
  },
  {
    icon: HiOutlineBookOpen,
    value: 35,
    suffix: "+",
    title: "Subjects",
    color: "text-emerald-600",
  },
  {
    icon: FiStar,
    value: 4.9,
    decimals: 1,
    suffix: "/5",
    title: "Average Rating",
    color: "text-amber-500",
  },
];

const StatisticsStrip = () => {
  return (
    <section className="relative -mt-6 z-20">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-border bg-background/90 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`
                    flex flex-col items-center justify-center
                    py-8 px-6 text-center
                    ${
                      index !== stats.length - 1
                        ? "lg:border-r border-border"
                        : ""
                    }
                    ${index < 2 ? "border-b lg:border-b-0 border-border" : ""}
                  `}
                >
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted ${item.color}`}
                  >
                    <Icon className="text-2xl" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold">
                    <CountUp
                      end={item.value}
                      duration={2.5}
                      decimals={item.decimals || 0}
                    />
                    {item.suffix}
                  </h3>

                  <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsStrip;
