"use client";

import Link from "next/link";
import { FiAlertTriangle, FiRefreshCw, FiHome } from "react-icons/fi";

const ErrorPage = ({ reset }) => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg rounded-3xl border border-border bg-card p-10 text-center shadow-sm">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
          <FiAlertTriangle className="text-4xl text-destructive" />
        </div>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-bold text-foreground">
          Something went wrong
        </h1>

        {/* Description */}
        <p className="mt-3 leading-7 text-muted-foreground">
          We could not complete your request. Please try again or return to the
          home page.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => reset()}
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-primary font-medium text-primary-foreground transition hover:opacity-90 cursor-pointer"
          >
            <FiRefreshCw />
            Try Again
          </button>

          <Link
            href="/"
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-background font-medium text-foreground transition hover:bg-muted"
          >
            <FiHome />
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
