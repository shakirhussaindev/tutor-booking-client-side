
"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import {
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
} from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage = () => {

  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirect") || "/"
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    
    const {email, password} = data

    const {data:res, error} = await authClient.signIn.email({
      email,password, rememberMe: true,
    })

    if(error){
      toast.error(error.message)
      return
    }
    if(res){
      toast.success("Login successfull")
      
      setTimeout(()=>{
        router.push(redirectTo)
      },1200)
    }
  };

  return (
    <section className="bg-gradient-to-b from-sky-50 to-white py-16 dark:from-background dark:to-background">
      <div className="mx-auto w-11/12 max-w-md">
        {/* Header */}

        <div className="mb-8 text-center">
          <h1 className="mt-4 text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-foreground">
            Welcome Back
          </h1>

          <p className="mt-2 text-muted-foreground">
            Login to continue your learning journey.
          </p>
        </div>

        {/* Card */}

        <div className="rounded-2xl border border-border bg-card p-7 shadow-xl transition-colors">
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
            {/* Email */}

            <div>
              <Label className="mb-2 block">
                Email
                <span className="text-red-500"> *</span>
              </Label>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />

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
                Password
                <span className="text-red-500"> *</span>
              </Label>

              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />

                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="h-11 rounded-xl pl-11 pr-11"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              {errors.password && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* Login Button */}

            <Button
              type="submit"
              size="lg"
              className="mt-2 h-12 w-full rounded-xl bg-primary text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
            >
              Login
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

          {/* Signup */}

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-primary transition-colors hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;