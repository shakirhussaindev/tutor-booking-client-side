"use client";

import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "HSC Student",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    review:
      "Finding the right tutor was incredibly easy. The sessions were engaging, well-structured, and helped me improve my grades in just a few weeks.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahim Hasan",
    role: "University Student",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    review:
      "The booking process was smooth and the tutor explained difficult concepts in a very simple way. Highly recommended for students.",
    rating: 5,
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "SSC Candidate",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    review:
      "Smart Tutor helped me stay consistent with my studies. Scheduling classes around my routine was super convenient.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            What Students Say
          </h2>

          <p className="mt-5 text-muted-foreground leading-8">
            Thousands of learners trust Smart Tutor to connect with experienced
            tutors and achieve their academic goals.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <FaQuoteLeft className="absolute right-8 top-8 text-5xl text-primary/10 transition group-hover:scale-110" />

              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="h-[70px] w-[70px] rounded-full object-cover ring-4 ring-primary/10"
                />

                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>

                  <p className="text-sm text-muted-foreground">{item.role}</p>

                  <div className="mt-2 flex gap-1">
                    {[...Array(item.rating)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-6 leading-8 text-muted-foreground">
                "{item.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
