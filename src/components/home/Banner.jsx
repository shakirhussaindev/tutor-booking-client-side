"use client";

import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
    title: "Learn from Expert Tutors",
    description:
      "Connect with experienced tutors and improve your skills through personalized learning sessions anytime, anywhere.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1600&q=80",
    title: "Find the Right Tutor",
    description:
      "Explore tutors by subject, compare their expertise, and choose the perfect mentor for your learning goals.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80",
    title: "Start Your Learning Journey",
    description:
      "Build confidence, master new skills, and achieve your academic goals with trusted tutors.",
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full h-[80vh]">
      {slides.map((slide) => (
        <div
          key={slide.id}
          id={`slide${slide.id}`}
          className="carousel-item relative w-full"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            width={800}
            height={800}
            className="w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55 flex items-center">
            <div className="max-w-2xl text-white px-8 md:px-20">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>

              <p className="text-lg md:text-xl mb-6 text-gray-200">
                {slide.description}
              </p>

              <Link href="/tutors" className="btn btn-primary">
                Explore Tutors
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a
              href={`#slide${slide.id === 1 ? 3 : slide.id - 1}`}
              className="btn btn-circle"
            >
              ❮
            </a>

            <a
              href={`#slide${slide.id === 3 ? 1 : slide.id + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
