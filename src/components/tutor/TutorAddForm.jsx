"use client";


import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiBook,
  FiDollarSign,
  FiCalendar,
  FiClock,
  FiImage,
  FiAward,
  FiBookOpen,
  FiMonitor,
} from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const TutorAddForm = () => {

  const router = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTutor = Object.fromEntries(formData.entries());
    console.log("new tutor", newTutor);

    const res = await fetch("http://localhost:5000/tutors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTutor),
    });
     const data = await res.json();

    if(res.ok){
      toast.success("Tutor successfully added")
      router.push("/tutors");
    }else{
      toast.error("Failed to add tutor");
      console.log(data, res.status)
    }
    
  };
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_25px_80px_rgba(0,0,0,0.08)] p-8 md:p-12"
    >
      {/* ================= PERSONAL INFO ================= */}

      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-xl bg-sky-100 flex items-center justify-center">
          <FiUser className="text-2xl text-sky-600" />
        </div>

        <div>
          <h2 className="text-[clamp(1rem,1.2vw,1.5rem)]  font-bold text-gray-800">
            Personal Information
          </h2>

          <p className="text-gray-500">Basic information about the tutor.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Tutor Name */}

        <div name="name" >
          <label className="font-medium text-gray-700 mb-1 block">
            Tutor Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="input w-full h-12 rounded-xl border-2 border-gray-200 pl-8 bg-white focus:border-sky-500 focus:outline-none"
          />
          
        </div>

        {/* Image */}

        <div name="image" >
          <label className="font-medium text-gray-700 mb-1 block">
            Profile Image
          </label>

          <input
            type="url"
            placeholder="https://example.com/photo.jpg"
            className="input w-full h-12 rounded-xl border-2 border-gray-200 pl-8 bg-white focus:border-sky-500 focus:outline-none"
          />
          
        </div>

        {/* Email */}
        <div name="email" >
          <label className="font-medium text-gray-700 mb-1 block">Email</label>

          <input
            type="email"
            placeholder="example@gmail.com"
            className="input w-full h-12 rounded-xl border-2 border-gray-200 pl-8 bg-white focus:border-sky-500 focus:outline-none"
          />
          
        </div>

        {/* Phone */}

        <div name="phone" >
          <label className="font-medium text-gray-700 mb-1 block">
            Phone Number
          </label>
          <div className="relative">
            <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-500 text-lg" />
            <input
              type="number"
              placeholder="+8801XXXXXXXXX"
              className="input w-full h-12 rounded-xl border-2 border-gray-200 pl-8 bg-white focus:border-sky-500 focus:outline-none [appearance:div] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          
        </div>

        {/* Institution */}
        <div name="institution" >
          <label className="font-medium text-gray-700 mb-1 block">
            Institution
          </label>

          <input
            type="text"
            placeholder="Dhaka University"
            className="input w-full h-12 rounded-xl border-2 border-gray-200 pl-8 bg-white focus:border-sky-500 focus:outline-none"
          />
          
        </div>

        {/* Location */}
        <div name="location" >
          <label className="font-medium text-gray-700 mb-1 block">
            Location
          </label>

          <input
            type="text"
            placeholder="Dhaka"
            className="input w-full h-12 rounded-xl border-2 border-gray-200 pl-8 bg-white focus:border-sky-500 focus:outline-none"
          />
          
        </div>
      </div>

      {/* ================= TEACHING INFO ================= */}

      <div className="mt-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center">
            <FiBook className="text-2xl text-indigo-600" />
          </div>

          <div>
            <h2 className="text-[clamp(1rem,1.2vw,1.5rem)] font-bold text-gray-800">
              Teaching Information
            </h2>

            <p className="text-gray-500">
              Tell students about your teaching expertise.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div >
            <label className="font-medium text-gray-700 mb-1 block">
              Subject
            </label>

            <div className="relative">
              <FiBookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />

              <select
                name="subject"
                defaultValue=""
                required
                className=" w-full h-12 rounded-xl border-2 border-gray-200 bg-white pl-12 pr-10 text-gray-700 outline-none transition appearance-none focus:border-sky-500"
              >
                <option value="" disabled>
                  Select Subject
                </option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="Science">Science</option>
                <option value="Computer Science">Computer Science</option>
                <option value="ICT">ICT</option>
                <option value="English">English</option>
                <option value="History">History</option>
              </select>

              <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            
          </div>

          <div >
            <label className="font-medium text-gray-700 mb-1 block">
              Teaching Mode
            </label>

            <div className="relative">
              <FiMonitor className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />

              <select
                name="teachingMode"
                required
                defaultValue=""
                className="w-full h-12 rounded-xl border-2 border-gray-200 bg-white pl-12 pr-10 text-gray-700 outline-none appearance-none transition focus:border-sky-500"
              >
                <option value="" disabled>
                  Select Mode
                </option>

                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Both">Both</option>
              </select>

              <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            
          </div>

          <div name="AvailableDays" >
            <label className="font-medium text-gray-700 mb-1 block">
              Available Days Time
            </label>

            <input
              type="text"
              placeholder="Sat - Thu, 5:00 PM - 8:00 PM"
              className="input w-full h-12 rounded-xl border-2 border-gray-200 pl-8 bg-white focus:border-sky-500 focus:outline-none"
            />
            
          </div>

          <div name="StartDate"  type="date">
            <label className="font-medium text-gray-700 mb-1 block">
              Session Start Date
            </label>

            <div className="relative">
              <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500" />
              <input
                type="date"
                placeholder="Sat - Thu"
                className="input w-full h-12 rounded-xl border-2 border-gray-200 pl-8 bg-white focus:border-sky-500 focus:outline-none"
              />
            </div>
            
          </div>

          <div name="experience" >
            <label className="font-medium text-gray-700 mb-1 block">
              Experience
            </label>

            <input
              type="text"
              placeholder="3 Years"
              className="input w-full h-12 rounded-xl border-2 border-gray-200 pl-8 bg-white focus:border-sky-500 focus:outline-none"
            />
            
          </div>
        </div>

        <div className="mt-5" name="about" >
          <label className="font-semibold text-gray-700 mb-2 block">
            About Yourself
          </label>

          <textArea
            rows={3}
            placeholder="Describe your teaching experience, teaching style, achievements and why students should choose you..."
            className="textArea w-full rounded-xl border-2 border-gray-200 bg-white resize-none p-5"
          ></textArea>
          
        </div>
      </div>

      {/* ================= PRICING ================= */}

      <div className="mt-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center">
            <FiDollarSign className="text-2xl text-emerald-600" />
          </div>

          <div>
            <h2 className="text-[clamp(1rem,1.2vw,1.5rem)] font-bold text-gray-800">
              Pricing & Availability
            </h2>

            <p className="text-gray-500">
              Set your tutoring price and available slots.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div name="HourlyFee" >
            <label className="font-medium text-gray-700 mb-1 block">
              Hourly Fee
            </label>

            <div className="relative">
              <FiDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" />

              <input
                type="number"
                placeholder="500"
                className="input w-full h-12 rounded-xl border-2 border-gray-200 pl-8 bg-white [appearance:div] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            
          </div>

          <div name="TotalSlots" >
            <label className="font-medium text-gray-700 mb-1 block">
              Total Slots
            </label>

            <input
              type="number"
              placeholder="500"
              className="input w-full h-12 rounded-xl border-2 border-gray-200 pl-8 bg-white [appearance:div] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            
          </div>
        </div>
      </div>

      <div className="mt-10">
        <button
          type="submit"
          className="
              w-full
              h-12
              rounded-xl
              text-lg
              font-bold
              text-white
              bg-gradient-to-r
              from-sky-500
              via-cyan-500
              to-indigo-600
              hover:scale-[1.009]
              hover:shadow-2xl
              transition-all
              duration-300
              "
        >
          Register Tutor
        </button>
      </div>
    </form>
  );
};

export default TutorAddForm;
