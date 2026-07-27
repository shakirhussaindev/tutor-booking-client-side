"use client";

import {
  FiUsers,
  FiShield,
  FiClock,
  FiBookOpen,
  FiAward,
  FiMessageCircle,
} from "react-icons/fi";

const features = [
  {
    icon: FiUsers,
    title: "Verified Expert Tutors",
    description:
      "Every tutor is carefully reviewed to ensure quality teaching experience and subject expertise.",
  },
  {
    icon: FiBookOpen,
    title: "Personalized Learning",
    description:
      "Choose tutors based on your subject, schedule, budget and preferred teaching style.",
  },
  {
    icon: FiClock,
    title: "Flexible Scheduling",
    description:
      "Book sessions that fit your routine with convenient availability and learning times.",
  },
  {
    icon: FiShield,
    title: "Safe & Reliable",
    description:
      "A trusted platform designed to connect students with professional tutors securely.",
  },
  {
    icon: FiAward,
    title: "Affordable Pricing",
    description:
      "Find tutors for every budget without compromising learning quality.",
  },
  {
    icon: FiMessageCircle,
    title: "Easy Communication",
    description:
      "Simple booking process with smooth interaction between students and tutors.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold">
            Why Choose Smart Tutor
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            Learning Made Smarter
          </h2>

          <p className="mt-5 text-muted-foreground leading-8">
            Smart Tutor helps students connect with qualified tutors through a
            simple, reliable and flexible learning platform designed for better
            academic success.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-border bg-background p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="text-2xl" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
