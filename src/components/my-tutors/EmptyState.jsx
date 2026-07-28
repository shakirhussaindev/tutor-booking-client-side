import Link from "next/link";
import { BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

const EmptyState = () => {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-dashed bg-card px-8 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <BookOpen className="h-10 w-10 text-primary" />
      </div>

      <h2 className="mt-6 text-2xl font-bold">No Tutors Found</h2>

      <p className="mt-3 max-w-md text-muted-foreground leading-7">
        You haven't created any tutor profiles yet. Create your first tutor
        profile and start connecting with students.
      </p>

      <Link href="/add-tutor">
        <Button size="lg" className="mt-8 rounded-xl px-8">
          Add Your First Tutor
        </Button>
      </Link>
    </div>
  );
};

export default EmptyState;
