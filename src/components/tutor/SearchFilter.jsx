"use client";

import { FiRefreshCw, FiSearch } from "react-icons/fi";
import DateRangePicker from "../shared/DateRangePicker";
import { useState } from "react";
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { format } from "date-fns";



const SearchFilter = () => {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [date, setDate] = useState();


  


  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (search.trim()) {
        params.set("search", search);
      } else {
        params.delete("search");
      }

      router.replace(`${pathname}?${params.toString()}`);
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

    router.replace(`${pathname}?${params.toString()}`);
  };


  const handleReset = () => {
    setSearch("");

    setDate(undefined);

    router.replace(pathname);
  };


  return (
    <>
      {/* Search Section */}

      <section className="mb-8">
        <div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end">
            {/* Search */}

            <div className="flex-1">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Search Tutor
              </label>

              <div className="relative">
                <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-sky-600 text-lg" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by tutor name..."
                  className=" h-12 w-full rounded-xl border border-slate-200 bg-white pl-14 pr-4 text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </div>
            </div>

            {/* Date */}

            <div className="w-full lg:w-[350px]">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Registration Date
              </label>

              <DateRangePicker date={date} setDate={setDate} />
            </div>

            {/* Search Button */}

            <button
              type="button"
              onClick={handleDateSearch}
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-sky-600 to-cyan-500 px-6 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 cursor-pointer"
            >
              <FiSearch className="text-lg" />
              Search
            </button>

            {/* Reset Button */}

            <button
              type="button"
              onClick={handleReset}
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600 hover:shadow-md active:scale-95 "
            >
              <FiRefreshCw className="text-lg" />
              Reset
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchFilter;
