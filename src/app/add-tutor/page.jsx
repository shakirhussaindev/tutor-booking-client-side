import TutorAddForm from "@/components/tutor/TutorAddForm";


const AddTutor = () => {
 
  return (
    <div className=" bg-gradient-to-br from-sky-50 via-white to-indigo-100 py-10 px-4">
      {/* Background Blur */}
      <div className="absolute top-32 left-10 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Hero */}

        <div className="text-center mb-5">
          <h1 className=" text-[clamp(2rem,3vw,3rem)] font-extrabold text-gray-900 leading-tight">
            Become a<span className="text-sky-600"> Professional </span>
            Tutor
          </h1>

          <p className="max-w-2xl mx-auto mt-2 text-gray-600 text-md">
            Join our growing community of talented tutors. Build your profile,
            showcase your expertise, and help students achieve their goals.
          </p>
        </div>

        {/* Card */}
        <TutorAddForm/>
      </div>
    </div>
  );
};

export default AddTutor;
