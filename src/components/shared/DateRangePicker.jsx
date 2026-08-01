// "use client";

// import * as React from "react";
// import { format } from "date-fns";
// import { CalendarIcon } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// export default function DateRangePicker({ date, setDate }) {
//   return (
//     <Popover>
//       <PopoverTrigger
//         className="
//             h-12
//             w-60
//             justify-start
//             rounded-xl
//             border-slate-200
//             px-4
//             text-left
//             font-normal
//             shadow-none
//             bg-sky-500
//             hover:bg-sky-600
//             flex items-center
//             cursor-pointer
//           "
//       >
        
//           <CalendarIcon className="mr-3 h-5 w-5 text-white" />

//           {date?.from ? (
//             date.to ? (
//               <>
//                 {format(date.from, "dd MMM yyyy")} -{" "}
//                 {format(date.to, "dd MMM yyyy")}
//               </>
//             ) : (
//               format(date.from, "dd MMM yyyy")
//             )
//           ) : (
//             <span className="text-white">Select registration date</span>
//           )}
//       </PopoverTrigger>

//       <PopoverContent
//         className="w-auto rounded-2xl border-0 p-0 shadow-2xl"
//         align="start"
//       >
//         <Calendar
//           mode="range"
//           selected={date}
//           onSelect={setDate}
//           numberOfMonths={2}
//         />
//       </PopoverContent>
//     </Popover>
//   );
// }



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
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="h-12 w-full lg:w-60 justify-start rounded-xl border-slate-200 px-4 text-left font-normal bg-sky-500 hover:bg-sky-600 text-white hover:text-white flex items-center cursor-pointer shadow-none"
        >
          <CalendarIcon className="mr-2 h-5 w-5 text-white shrink-0" />
          <span className="truncate">
            {date?.from
              ? date.to
                ? `${format(date.from, "dd MMM yyyy")} - ${format(date.to, "dd MMM yyyy")}`
                : format(date.from, "dd MMM yyyy")
              : "Select registration date"}
          </span>
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
          pagedNavigation
          captionLayout="dropdown-buttons"
          fromYear={2024}
          toYear={2026}
        />
      </PopoverContent>
    </Popover>
  );
}
