import SearchFilter from "@/components/tutor/SearchFilter";
import TutorCard from "@/components/tutor/TutorCard";
import { FiSearch } from "react-icons/fi";

const TutorsPage = async ({ searchParams }) => {
  const { search = "", startDate = "", endDate = "" } = await searchParams;
  const query = new URLSearchParams();
  if (search) query.set("search", search);
  if (startDate) query.set("startDate", startDate);
  if (endDate) query.set("endDate", endDate);

  const res = await fetch(`http://localhost:5000/tutors?${query.toString()}`);
  const tutors = await res.json();

  return (
    <section className="bg-linear-to-b from-sky-50 to-white min-h-screen py-16">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-14">
          <span className="px-5 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold">
            Find Your Perfect Tutor
          </span>

          <h1 className="text-5xl font-bold mt-5 text-gray-900">
            Learn From Expert Tutors
          </h1>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Browse experienced tutors from different subjects and book your
            preferred learning session in just one click.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
          <SearchFilter />
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {tutors.length > 0 ? (
              tutors.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)
            ) : (
              <div className="col-span-full py-10">
                <div className="mx-auto max-w-xl text-center">
                  

                  {/* Title */}

                  <h2 className="mt-6 text-[clamp(1.4rem,2vw,2rem)] font-bold text-red-400">
                    No Tutor Found
                  </h2>

                  {/* Description */}

                  <p className="mx-auto mt-3 max-w-md text-slate-500 leading-7">
                    We couldn't find any tutors matching your search or selected
                    date range. Try using another tutor name or adjust your
                    filters.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorsPage;
