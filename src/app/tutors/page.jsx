import TutorCard from "@/components/tutor/TutorCard";




const TutorsPage = async () => {
  const res = await fetch("http://localhost:5000/addTutor");
  const tutors = await res.json()
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white min-h-screen py-16">
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor}/>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorsPage;