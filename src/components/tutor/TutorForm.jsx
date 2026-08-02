"use client";

import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const TutorForm = () => {
  const { data: session } = authClient.useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleTutorSubmit = async (data) => {

    const {data:tokenData} = await authClient.token()

    try {
      const tutor = {...data, email: session?.user?.email,};

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(tutor),
      });

      const result = await res.json();

      console.log("result",tutor)

      if (result) {
        toast.success("Tutor added successfully.");

        router.push("/my-tutors");
      }else{

        toast.error("Failed to add tutor.");
      }


    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    }
  };

  return (
    <Card className="rounded-3xl shadow-sm border max-w-5xl mx-auto">
      <CardContent className="p-6 md:p-8 lg:p-10">
        <form onSubmit={handleSubmit(handleTutorSubmit)} className="space-y-10">
          {/* ================= Personal Information ================= */}

          <div>
            <h2 className="text-2xl font-bold">Personal Information</h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Provide your personal details.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Name */}

              <div>
                <Label className="mb-2">
                  Full Name<span className="text-red-500">*</span>
                </Label>

                <Input
                  {...register("name", {
                    required: "Name is required",
                  })}
                  placeholder="Enter your full name"
                />

                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              {/* Tutor email */}
              <div>
                <Label className="mb-2">
                  Tutor Email<span className="text-red-500">*</span>
                </Label>

                <Input
                  {...register("tutorEmail", {
                    required: "Email is required",
                  })}
                  placeholder="Enter tutor email"
                />

                {errors.tutorEmail && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.tutorEmail.message}
                  </p>
                )}
              </div>

              {/*User Email */}

              <div>
                <Label className="mb-2">
                  User Email<span className="text-black">*</span>
                </Label>

                <Input disabled value={session?.user?.email || ""} readOnly />
              </div>

              {/* Image */}

              <div>
                <Label className="mb-2">
                  Profile Image URL<span className="text-red-500">*</span>
                </Label>

                <Input
                  {...register("image")}
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              {/* Phone */}

              <div>
                <Label className="mb-2">
                  Phone<span className="text-red-500">*</span>
                </Label>

                <Input
                  {...register("phone", {
                    required: "Phone is required",
                  })}
                  placeholder="+8801XXXXXXXXX"
                />

                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Institution */}

              <div>
                <Label className="mb-2">
                  Institution<span className="text-red-500">*</span>
                </Label>

                <Input
                  {...register("institution", {
                    required: "Institution is required",
                  })}
                  placeholder="Dhaka University"
                />

                {errors.institution && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.institution.message}
                  </p>
                )}
              </div>

              {/* Location */}

              <div>
                <Label className="mb-2">
                  Location<span className="text-red-500">*</span>
                </Label>

                <Input
                  {...register("location", {
                    required: "Location is required",
                  })}
                  placeholder="Dhaka"
                />

                {errors.location && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.location.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* ================= Teaching Information ================= */}

          <div>
            <h2 className="text-2xl font-bold">Teaching Information</h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Tell students about your teaching expertise.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Subject */}

              <div>
                <Label className="mb-2">
                  Subject<span className="text-red-500">*</span>
                </Label>

                <select
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background outline-none focus:border-primary"
                >
                  <option value="">Select Subject</option>
                  <option>Mathematics</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>English</option>
                  <option>ICT</option>
                  <option>Science</option>
                </select>

                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Teaching Mode */}

              <div>
                <Label className="mb-2">
                  Teaching Mode<span className="text-red-500">*</span>
                </Label>

                <select
                  {...register("teachingMode", {
                    required: "Teaching mode is required",
                  })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background outline-none focus:border-primary"
                >
                  <option value="">Select Mode</option>
                  <option>Online</option>
                  <option>Offline</option>
                  <option>Both</option>
                </select>

                {errors.teachingMode && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.teachingMode.message}
                  </p>
                )}
              </div>

              {/* Available Days */}

              <div>
                <Label className="mb-2">
                  Available Days<span className="text-red-500">*</span>
                </Label>

                <Input
                  {...register("AvailableDays", {
                    required: "Available days are required",
                  })}
                  placeholder="Sat, Mon, Wed"
                />

                {errors.AvailableDays && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.AvailableDays.message}
                  </p>
                )}
              </div>

              {/* Start Date */}

              <div>
                <Label className="mb-2">
                  Session Start Date<span className="text-red-500">*</span>
                </Label>

                <Input
                  type="date"
                  {...register("StartDate", {
                    required: "Start date is required",
                  })}
                />

                {errors.StartDate && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.StartDate.message}
                  </p>
                )}
              </div>

              {/* Experience */}

              <div className="md:col-span-1">
                <Label className="mb-2">
                  Teaching Experience<span className="text-red-500">*</span>
                </Label>

                <Input
                type='number'
                  {...register("experience", {
                    required: "Experience is required",
                  })}
                  placeholder="2 Years"
                />

                {errors.experience && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.experience.message}
                  </p>
                )}
              </div>

              {/* About */}

              <div className="md:col-span-2">
                <Label className="mb-2">
                  About Yourself<span className="text-red-500">*</span>
                </Label>

                <Textarea
                  {...register("about", {
                    required: "About is required",
                  })}
                  placeholder="Write a short introduction..."
                  className="min-h-32"
                />

                {errors.about && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.about.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* ================= Pricing ================= */}

          <div>
            <h2 className="text-2xl font-bold">Pricing & Availability</h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Set your teaching fee and available tutoring slots.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Hourly Fee */}

              <div>
                <Label className="mb-2">
                  Hourly Fee (৳)<span className="text-red-500">*</span>
                </Label>

                <Input
                  type="number"
                  min={1}
                  {...register("HourlyFee", {
                    required: "Hourly fee is required",
                    valueAsNumber: true,
                  })}
                  placeholder="500"
                />

                {errors.HourlyFee && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.HourlyFee.message}
                  </p>
                )}
              </div>

              {/* Total Slots */}

              <div>
                <Label className="mb-2">
                  Total Weekly Slots<span className="text-red-500">*</span>
                </Label>

                <Input
                  type="number"
                  min={1}
                  {...register("TotalSlots", {
                    required: "Total slots are required",
                    valueAsNumber: true,
                  })}
                  placeholder="10"
                />

                {errors.TotalSlots && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.TotalSlots.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}

          <div className="pt-2">
            <Button
              type="submit"
              className="h-12 w-full rounded-xl text-base font-semibold"
            >
              Register Tutor
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default TutorForm;