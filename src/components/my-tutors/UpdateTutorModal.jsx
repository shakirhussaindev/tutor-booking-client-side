"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";

const UpdateTutorModal = ({
  open,
  setOpen,
  tutor,
  tableData,
  setTableData,
}) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (tutor) {
      reset(tutor);
    }
  }, [tutor, reset]);

  const onSubmit = async (data) => {
    const { _id, ...updatedData } = data;

    const {data:tokenData} = await authClient.token()
    
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${tutor._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify(updatedData),
        },
      );
      const result = await res.json();

      if (result.modifiedCount) {
        toast.success("Tutor updated successfully");

        setTableData((prev) =>
          prev.map((item) =>
            item._id === tutor._id ? { ...item, ...data } : item,
          ),
        );

        setOpen(false);
      }
    } catch(error) {
      console.error(error);
      toast.error("Failed to update tutor");
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Update Tutor</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-5 md:grid-cols-2"
        >
          <div>
            <Label>Name</Label>

            <Input {...register("name")} />
          </div>

          <div>
            <Label>Image</Label>

            <Input {...register("image")} />
          </div>

          <div>
            <Label>Subject</Label>

            <Input {...register("subject")} />
          </div>

          <div>
            <Label>Teaching Mode</Label>

            <Input {...register("teachingMode")} />
          </div>

          <div>
            <Label>Hourly Fee</Label>

            <Input type="number" {...register("HourlyFee")} />
          </div>

          <div>
            <Label>Available Days</Label>

            <Input {...register("AvailableDays")} />
          </div>

          <div>
            <Label>Start Date</Label>

            <Input type="date" {...register("StartDate")} />
          </div>

          <div>
            <Label>Experience</Label>

            <Input {...register("experience")} />
          </div>
          <div className="md:col-span-2">
            <Label>About</Label>

            <textarea
              {...register("about")}
              rows={5}
              className="
                w-full
                rounded-xl
                border
                bg-background
                p-3
                text-sm
                outline-none
                focus:ring-2
                focus:ring-primary
              "
            />
          </div>

          <div className="flex justify-end gap-3 md:col-span-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTutorModal;