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
  const {register,handleSubmit, watch, formState:{ errors },} = useForm();

  const password = watch("password","")

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <section className=" bg-gradient-to-b from-sky-50 to-white py-16">
      <div className="w-11/12 max-w-md mx-auto">
        {/* Header */}

        <div className="text-center mb-8">
          <h1 className="mt-4 text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-slate-800">
            Create Account
          </h1>

          <p className="mt-2 text-slate-500">
            Join Tutor Booking and start learning today.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-xl">
          <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-5">
            {/* Name */}

            <div className="mb-5">
              <Label className="mb-2 block">
                Full Name <span className="text-red-500">*</span>
              </Label>

              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <Input
                  {...register("name", {
                    required: "Name is required",
                  })}
                  placeholder="John Doe"
                  className="h-11 rounded-xl pl-11"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Photo */}

            <div className="mb-5">
              <Label className="mb-2 block">Photo URL</Label>

              <div className="relative">
                <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <Input
                  {...register("image")}
                  placeholder="https://example.com/photo.jpg"
                  className="h-11 rounded-xl pl-11"
                />
              </div>
            </div>

            {/* Email */}

            <div className="mb-5">
              <Label className="mb-2 block">
                Email <span className="text-red-500">*</span>
              </Label>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="h-11 rounded-xl pl-11"
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
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}

            <div>
              <Label className="mb-2 block">
                Password <span className="text-red-500">*</span>
              </Label>

              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="h-11 rounded-xl pl-11 pr-11"
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
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
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

            {/* Register */}

            <Button
              type="submit"
              className="mt-6 h-11 w-full rounded-xl bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-700 hover:to-cyan-600"
            >
              Create Account
            </Button>
          </form>
          {/* Divider */}

          <div className="my-6 flex items-center gap-4">
            <Separator orientation="horizontal" className="flex-1" />

            <span className="px-2 text-sm text-slate-400">OR</span>

            <Separator orientation="horizontal" className="flex-1" />
          </div>

          {/* Google */}

          <Button variant="outline" className="h-11 w-full rounded-xl">
            <FcGoogle className="mr-2 text-xl" />
            Continue with Google
          </Button>

          {/* Login */}

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-sky-600 hover:text-sky-700"
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
