import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-xl text-center">
        {/* 404 */}

        <h1 className="text-[7rem] font-extrabold leading-none text-primary md:text-[9rem]">
          404
        </h1>

        {/* Title */}

        <h2 className="mt-2 text-3xl font-bold text-foreground">
          Page Not Found
        </h2>

        {/* Description */}

        <p className="mt-4 leading-7 text-muted-foreground">
          Sorry, the page you are looking for doesn't exist or may have been
          moved. Try going back to the homepage or browse our tutors.
        </p>

        {/* Buttons */}

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-medium text-primary-foreground transition hover:opacity-90"
          >
            <Home className="h-5 w-5" />
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
