"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DateRangePicker({ date, setDate }) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          variant="outline"
          className="
            h-12
            w-full
            justify-start
            rounded-xl
            border-slate-200
            bg-white
            px-4
            text-left
            font-normal
            shadow-none
            hover:bg-slate-50
          "
        >
          <CalendarIcon className="mr-3 h-5 w-5 text-sky-600" />

          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "dd MMM yyyy")} -{" "}
                {format(date.to, "dd MMM yyyy")}
              </>
            ) : (
              format(date.from, "dd MMM yyyy")
            )
          ) : (
            <span className="text-slate-400">Select registration date</span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-auto rounded-2xl border-0 p-0 shadow-2xl"
        align="start"
      >
        <Calendar
          mode="range"
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}
