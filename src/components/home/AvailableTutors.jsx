

import Link from "next/link";
import TutorCard from "../tutor/TutorCard";
import { Button } from "@/components/ui/button";

const AvailableTutors = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`, {
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
          <Link href="/tutors">
            <Button size="lg" className="rounded-xl px-8">
              View All Tutors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AvailableTutors;