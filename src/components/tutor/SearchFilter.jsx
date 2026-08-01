// "use client";

// import { FiRefreshCw, FiSearch } from "react-icons/fi";
// import DateRangePicker from "../shared/DateRangePicker";
// import { useState } from "react";
// import { useEffect } from "react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { format } from "date-fns";

// const SearchFilter = () => {

//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const [search, setSearch] = useState(searchParams.get("search") || "");
//   const [date, setDate] = useState();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const params = new URLSearchParams(searchParams.toString());

//       if (search.trim()) {
//         params.set("search", search);
//       } else {
//         params.delete("search");
//       }

//       router.replace(`${pathname}?${params.toString()}`);
//     }, 400);

//     return () => clearTimeout(timer);
//   }, [search, pathname, router, searchParams]);

//   const handleDateSearch = () => {
//     const params = new URLSearchParams(searchParams.toString());

//     if (date?.from) {
//       params.set("startDate", format(date.from, "yyyy-MM-dd"));
//     } else {
//       params.delete("startDate");
//     }

//     if (date?.to) {
//       params.set("endDate", format(date.to, "yyyy-MM-dd"));
//     } else {
//       params.delete("endDate");
//     }

//     router.replace(`${pathname}?${params.toString()}`);
//   };

//   const handleReset = () => {
//     setSearch("");

//     setDate(undefined);

//     router.replace(pathname);
//   };

//   return (
//     <>
//       {/* Search Section */}

//       <section className="mb-8">
//         <div>
//           <div className="flex flex-col gap-6 lg:flex-row lg:items-end">
//             {/* Search */}

//             <div className="flex-1">
//               <label className="mb-2 block text-sm font-semibold text-slate-700">
//                 Search Tutor
//               </label>

//               <div className="relative">
//                 <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-sky-600 text-lg" />

//                 <input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   placeholder="Search by tutor name..."
//                   className=" h-12 w-full rounded-xl border border-slate-200 bg-white pl-14 pr-4 text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
//                 />
//               </div>
//             </div>

//             {/* Date */}

//             <div className="w-full lg:w-[350px]">
//               <label className="mb-2 block text-sm font-semibold text-slate-700">
//                 Registration Date
//               </label>

//               <DateRangePicker date={date} setDate={setDate} />
//             </div>

//             {/* Search Button */}

//             <button
//               type="button"
//               onClick={handleDateSearch}
//               className="flex h-12 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-sky-600 to-cyan-500 px-6 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 cursor-pointer"
//             >
//               <FiSearch className="text-lg" />
//               Search
//             </button>

//             {/* Reset Button */}

//             <button
//               type="button"
//               onClick={handleReset}
//               className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600 hover:shadow-md active:scale-95 "
//             >
//               <FiRefreshCw className="text-lg" />
//               Reset
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SearchFilter;

// "use client";

// import { FiRefreshCw, FiSearch } from "react-icons/fi";

// import DateRangePicker from "../shared/DateRangePicker";

// import { useEffect, useState } from "react";

// import { usePathname, useRouter, useSearchParams } from "next/navigation";

// import { format } from "date-fns";

// const SearchFilter = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const [search, setSearch] = useState(searchParams.get("search") || "");

//   const [date, setDate] = useState();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const params = new URLSearchParams(searchParams.toString());

//       if (search.trim()) {
//         params.set("search", search);
//       } else {
//         params.delete("search");
//       }

//       router.replace(`${pathname}?${params.toString()}`);
//     }, 400);

//     return () => clearTimeout(timer);
//   }, [search, pathname, router, searchParams]);

//   const handleDateSearch = () => {
//     const params = new URLSearchParams(searchParams.toString());

//     if (date?.from) {
//       params.set("startDate", format(date.from, "yyyy-MM-dd"));
//     } else {
//       params.delete("startDate");
//     }

//     if (date?.to) {
//       params.set("endDate", format(date.to, "yyyy-MM-dd"));
//     } else {
//       params.delete("endDate");
//     }

//     router.replace(`${pathname}?${params.toString()}`);
//   };

//   const handleReset = () => {
//     setSearch("");
//     setDate(undefined);

//     router.replace(pathname);
//   };

//   return (
//     <section className="mb-8">
//       <div
//         className="flex flex-col gap-5 lg:flex-row lg:items-end" >
//         <div className="flex-1">
//           <label
//             className="mb-2 block text-sm font-semibold text-foreground">
//             Search Tutor
//           </label>

//           <div className="relative">
//             <FiSearch
//               className="
// absolute
// left-5
// top-1/2
// -translate-y-1/2
// text-primary
// "
//             />

//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search by tutor name..."
//               className="
// h-12
// w-full
// rounded-xl
// border
// border-border
// bg-background
// pl-14
// pr-4
// text-foreground
// placeholder:text-muted-foreground
// outline-none
// transition
// focus:ring-4
// focus:ring-primary/20
// "
//             />
//           </div>
//         </div>

//         <div className="w-full lg:w-[350px]">
//           <label
//             className="
// mb-2
// block
// text-sm
// font-semibold
// text-foreground
// "
//           >
//             Registration Date
//           </label>

//           <DateRangePicker date={date} setDate={setDate} />
//         </div>

//         <button
//           onClick={handleDateSearch}
//           className="
// flex
// h-12
// items-center
// justify-center
// gap-2
// rounded-xl
// bg-sky-500 text-white cursor-pointer 
// px-6
// font-semibold
// transition
// hover:opacity-90
// "
//         >
//           <FiSearch />
//           Search
//         </button>

//         <button
//           onClick={handleReset}
//           className="
// flex
// h-12
// items-center
// justify-center
// gap-2
// rounded-xl
// border
// border-border
// bg-background
// px-6
// font-semibold
// text-foreground
// transition
// hover:bg-muted
// "
//         >
//           <FiRefreshCw />
//           Reset
//         </button>
//       </div>
//     </section>
//   );
// };

// export default SearchFilter;


"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FiRefreshCw, FiSearch } from "react-icons/fi";
import { format } from "date-fns";
import DateRangePicker from "../shared/DateRangePicker";

const SearchFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [date, setDate] = useState();

  // Debounce search input update
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentSearchParam = searchParams.get("search") || "";
      
      if (search !== currentSearchParam) {
        const params = new URLSearchParams(searchParams.toString());
        if (search.trim()) {
          params.set("search", search.trim());
        } else {
          params.delete("search");
        }

        startTransition(() => {
          router.replace(`${pathname}?${params.toString()}`, { scroll: false });
        });
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [search, pathname, router, searchParams]);

  const handleDateSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (date?.from) {
      params.set("startDate", format(date.from, "yyyy-MM-dd"));
    } else {
      params.delete("startDate");
    }

    if (date?.to) {
      params.set("endDate", format(date.to, "yyyy-MM-dd"));
    } else {
      params.delete("endDate");
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  const handleReset = () => {
    setSearch("");
    setDate(undefined);
    startTransition(() => {
      router.replace(pathname, { scroll: false });
    });
  };

  return (
    <section className="mb-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end">
        {/* Search Field */}
        <div className="flex-1">
          <label className="mb-2 block text-sm font-semibold text-foreground">
            Search Tutor
          </label>
          <div className="relative">
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-primary text-lg" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by tutor name..."
              className="h-12 w-full rounded-xl border border-border bg-background pl-14 pr-4 text-foreground placeholder:text-muted-foreground outline-none transition focus:ring-4 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Date Field */}
        <div className="w-full lg:w-[350px]">
          <label className="mb-2 block text-sm font-semibold text-foreground">
            Registration Date
          </label>
          <DateRangePicker date={date} setDate={setDate} />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleDateSearch}
            disabled={isPending}
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white cursor-pointer px-6 font-semibold transition disabled:opacity-50"
          >
            <FiSearch />
            Search
          </button>

          <button
            type="button"
            onClick={handleReset}
            disabled={isPending}
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 font-semibold text-foreground transition hover:bg-muted cursor-pointer disabled:opacity-50"
          >
            <FiRefreshCw className={isPending ? "animate-spin" : ""} />
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
