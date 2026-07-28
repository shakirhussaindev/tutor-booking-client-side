"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

const DeleteTutorModal = ({
  open,
  setOpen,
  tutor,
  tableData,
  setTableData,
}) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!tutor) return;

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${tutor._id}`,
        {
          method: "DELETE",
        },
      );
      const result = await res.json();
      console.log(result);

      if (result.deletedCount) {
        toast.success("Tutor deleted successfully.");

        setTableData(tableData.filter((item) => item._id !== tutor._id));

        setOpen(false);
      } else {
        toast.error("Failed to delete tutor.");
      }
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Delete Tutor</DialogTitle>

          <DialogDescription className="leading-7">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-foreground">{tutor?.name}</span>
            ?
            <br />
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-6 gap-2">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete Tutor"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTutorModal;
