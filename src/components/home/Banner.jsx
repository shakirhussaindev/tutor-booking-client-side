// "use client";

// import Image from "next/image";
// import Link from "next/link";

// const slides = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
//     title: "Learn from Expert Tutors",
//     description:
//       "Connect with experienced tutors and improve your skills through personalized learning sessions anytime, anywhere.",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1600&q=80",
//     title: "Find the Right Tutor",
//     description:
//       "Explore tutors by subject, compare their expertise, and choose the perfect mentor for your learning goals.",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80",
//     title: "Start Your Learning Journey",
//     description:
//       "Build confidence, master new skills, and achieve your academic goals with trusted tutors.",
//   },
// ];

// const Banner = () => {
//   return (
//     <div className="carousel w-full h-[80vh]">
//       {slides.map((slide) => (
//         <div
//           key={slide.id}
//           id={`slide${slide.id}`}
//           className="carousel-item relative w-full"
//         >
//           <Image
//             src={slide.image}
//             alt={slide.title}
//             width={800}
//             height={800}
//             className="w-full object-cover"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/55 flex items-center">
//             <div className="max-w-2xl text-white px-8 md:px-20">
//               <h1 className="text-4xl md:text-6xl font-bold mb-4">
//                 {slide.title}
//               </h1>

//               <p className="text-lg md:text-xl mb-6 text-gray-200">
//                 {slide.description}
//               </p>

//               <Link href="/tutors" className="btn btn-primary">
//                 Explore Tutors
//               </Link>
//             </div>
//           </div>

//           {/* Navigation */}
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
//             <a
//               href={`#slide${slide.id === 1 ? 3 : slide.id - 1}`}
//               className="btn btn-circle"
//             >
//               ❮
//             </a>

//             <a
//               href={`#slide${slide.id === 3 ? 1 : slide.id + 1}`}
//               className="btn btn-circle"
//             >
//               ❯
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Banner;



"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&q=90",
    title: "Learn Smarter with Expert Tutors",
    description:
      "Discover highly rated tutors for every subject and enjoy one-to-one personalized learning from anywhere.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1800&q=90",
    title: "Book Sessions in Seconds",
    description:
      "Compare tutors, check availability, and reserve your preferred learning session effortlessly.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1800&q=90",
    title: "Build Skills. Achieve Goals.",
    description:
      "Whether you're preparing for exams or learning something new, find the perfect mentor today.",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-[75vh] min-h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ${
            current === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl text-white">
                <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                  🎓 Trusted Learning Platform
                </span>

                <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                  {slide.title}
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-200">
                  {slide.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/tutors">
                    <Button size="lg">Explore Tutors</Button>
                  </Link>

                  <Link href="/signup">
                    <Button variant="outline" size="lg">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-5">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-lg">
                    <h2 className="text-3xl font-bold">500+</h2>
                    <p className="mt-2 text-sm text-gray-200">Expert Tutors</p>
                  </div>

                  <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-lg">
                    <h2 className="text-3xl font-bold">12K+</h2>
                    <p className="mt-2 text-sm text-gray-200">
                      Learning Sessions
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-lg">
                    <h2 className="text-3xl font-bold">98%</h2>
                    <p className="mt-2 text-sm text-gray-200">Satisfaction</p>
                  </div>

                  <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-lg">
                    <h2 className="text-3xl font-bold">24/7</h2>
                    <p className="mt-2 text-sm text-gray-200">
                      Flexible Learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all ${
              current === i ? "w-10 bg-white" : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
