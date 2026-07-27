"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import {
  FiEye,
  FiEyeOff,
  FiImage,
  FiLock,
  FiMail,
  FiUser,
} from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import PasswordRules from "@/components/ui/password-rules";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <section className="min-h-screen bg-background py-16 transition-colors">
      <div className="mx-auto w-11/12 max-w-lg">
        {/* Header */}

        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
            Welcome to Smart Tutor
          </span>

          <h1 className="mt-5 text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-tight text-foreground">
            Create Your Account
          </h1>

          <p className="mx-auto mt-3 max-w-sm leading-7 text-muted-foreground">
            Join Smart Tutor today and connect with experienced tutors from
            anywhere.
          </p>
        </div>

        {/* Card */}

        <div className="rounded-3xl border border-border bg-card p-8 shadow-xl transition-colors">
          <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-6">
            {/* Full Name */}

            <div>
              <Label htmlFor="name" className="mb-2 block text-sm font-medium">
                Full Name <span className="text-red-500">*</span>
              </Label>

              <div className="relative">
                <FiUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="name"
                  placeholder="John Doe"
                  className="h-12 rounded-xl border-border bg-background pl-11 placeholder:text-muted-foreground"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
              </div>

              {errors.name && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Photo URL */}

            <div>
              <Label htmlFor="image" className="mb-2 block text-sm font-medium">
                Photo URL
              </Label>

              <div className="relative">
                <FiImage className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="image"
                  placeholder="https://example.com/photo.jpg"
                  className="h-12 rounded-xl border-border bg-background pl-11 placeholder:text-muted-foreground"
                  {...register("image")}
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <Label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email Address <span className="text-red-500">*</span>
              </Label>

              <div className="relative">
                <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="h-12 rounded-xl border-border bg-background pl-11 placeholder:text-muted-foreground"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
              </div>

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}

            <div>
              <Label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Password <span className="text-red-500">*</span>
              </Label>

              <div className="relative">
                <FiLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-12 rounded-xl border-border bg-background pl-11 pr-11 placeholder:text-muted-foreground"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                      message: "Must contain uppercase, lowercase and number",
                    },
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}

              {/* Password Rules */}

              <PasswordRules password={password} />
            </div>

            {/* Create Account Button */}

            <Button
              type="submit"
              size="lg"
              className="mt-2 h-12 w-full rounded-xl bg-primary text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
            >
              Create Account
            </Button>
          </form>

          {/* Divider */}

          <div className="my-8 flex items-center gap-4">
            <Separator className="flex-1" />

            <span className="text-sm font-medium text-muted-foreground">
              OR
            </span>

            <Separator className="flex-1" />
          </div>

          {/* Google Login */}

          <Button
            variant="outline"
            size="lg"
            className="h-12 w-full rounded-xl"
          >
            <FcGoogle className="mr-3 text-xl" />
            Continue with Google
          </Button>

          {/* Login */}

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary transition-colors hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;