
import Info from "@/components/tutorDetails/Info";
import Image from "next/image";
import {
  FiAward,
  FiBook,
  FiCalendar,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiPhone,
  FiPlayCircle,
  FiUsers,
} from "react-icons/fi";

const TutorDetailPage = async ({params}) => {
  const {id} = await params
  console.log({id})

  const res = await fetch(`http://localhost:5000/tutors/${id}`);
  const tutorDetails = await res.json();
  console.log(tutorDetails);
  const {
    _id,
    name,
    image,
    email,
    phone,
    institution,
    location,
    subject,
    teachingMode,
    AvailableDays,
    StartDate,
    experience,
    about,
    HourlyFee,
    TotalSlots,
  } = tutorDetails;
  return (
    // <section className="bg-slate-50 py-16 min-h-screen">
    //   <div className="max-w-7xl mx-auto px-4">
    //     <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
    //       <div className="grid lg:grid-cols-3">
    //         {/* Left Image */}

    //         <div className="relative aspect-square w-full">
    //           <Image
    //             src={image}
    //             alt={name}
    //             fill
    //             className="object-cover rounded-l-3xl"
    //           />
    //         </div>

    //         {/* Right */}

    //         <div className="lg:col-span-2 p-10">
    //           <div className="flex items-center justify-between flex-wrap gap-4">
    //             <div>
    //               <h1 className="text-4xl font-bold text-slate-800">{name}</h1>

    //               <span className="inline-block mt-3 bg-sky-100 text-sky-700 px-4 py-2 rounded-full font-medium">
    //                 {subject} Tutor
    //               </span>
    //             </div>

    //             <div className="text-right">
    //               <h2 className="text-3xl font-bold text-green-600">
    //                 ৳ {HourlyFee}
    //               </h2>

    //               <p className="text-gray-500">Per Hour</p>
    //             </div>
    //           </div>

    //           <div className="grid md:grid-cols-2 gap-5 mt-10">
    //             <Info icon={<FiMail />} title="Email" value={email} />

    //             <Info icon={<FiPhone />} title="Phone" value={phone} />

    //             <Info
    //               icon={<FiBook />}
    //               title="Institution"
    //               value={institution}
    //             />

    //             <Info icon={<FiMapPin />} title="Location" value={location} />

    //             <Info
    //               icon={<FiMonitor />}
    //               title="Teaching Mode"
    //               value={teachingMode}
    //             />

    //             <Info
    //               icon={<FiCalendar />}
    //               title="Available"
    //               value={AvailableDays}
    //             />

    //             <Info
    //               icon={<FiPlayCircle />}
    //               title="Session Starts"
    //               value={StartDate}
    //             />

    //             <Info
    //               icon={<FiAward />}
    //               title="Experience"
    //               value={`${experience} Years`}
    //             />

    //             <Info
    //               icon={<FiUsers />}
    //               title="Total Slots"
    //               value={TotalSlots}
    //             />
    //           </div>

    //           <div className="mt-10">
    //             <h2 className="text-2xl font-semibold mb-4">About Tutor</h2>

    //             <p className="text-gray-600 leading-8">{about}</p>
    //           </div>

    //           <button className="btn bg-sky-600 hover:bg-sky-700 text-white border-none rounded-xl w-full mt-10 h-14 text-lg">
    //             Book Session
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 py-12">
    //   <div className="w-11/12 max-w-7xl mx-auto">
    //     {/* Header */}

    //     <div className="text-center mb-12">
    //       <span className="inline-block px-5 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold">
    //         Tutor Profile
    //       </span>

    //       <h1 className="text-5xl font-bold text-slate-800 mt-5">
    //         Meet Your Tutor
    //       </h1>

    //       <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
    //         Explore tutor information, experience and teaching schedule before
    //         booking your learning session.
    //       </p>
    //     </div>

    //     <div className="grid lg:grid-cols-12 gap-8">
    //       {/* LEFT PROFILE CARD */}

    //       <div className="lg:col-span-4">
    //         <div className="sticky top-24 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
    //           {/* Image */}

    //           <div className="relative h-96">
    //             <Image src={image} alt={name} fill className="object-cover" />
    //           </div>

    //           {/* Profile */}

    //           <div className="p-7">
    //             <h2 className="text-3xl font-bold text-slate-800">{name}</h2>

    //             <p className="text-sky-600 font-semibold mt-2">
    //               {subject} Tutor
    //             </p>

    //             <div className="mt-6 flex items-center justify-between">
    //               <div>
    //                 <p className="text-sm text-slate-500">Hourly Fee</p>

    //                 <h3 className="text-3xl font-bold text-green-600">
    //                   ৳ {HourlyFee}
    //                 </h3>
    //               </div>

    //               <div className="text-right">
    //                 <p className="text-sm text-slate-500">Experience</p>

    //                 <h3 className="font-bold text-slate-800">
    //                   {experience} Years
    //                 </h3>
    //               </div>
    //             </div>

    //             <div className="mt-7">
    //               <button className="btn w-full h-14 rounded-2xl border-none text-white bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-700 hover:to-cyan-600 shadow-lg text-lg">
    //                 Book Session
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* RIGHT SIDE */}

    //       <div className="lg:col-span-8">
    //         {/* Next part starts here */}
    //         {/* Information Section */}

    //         <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
    //           <div className="flex items-center justify-between mb-8">
    //             <div>
    //               <h2 className="text-3xl font-bold text-slate-800">
    //                 Tutor Information
    //               </h2>

    //               <p className="text-slate-500 mt-2">
    //                 Everything you need to know before booking a session.
    //               </p>
    //             </div>

    //             <span className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
    //               Available
    //             </span>
    //           </div>

    //           <div className="grid md:grid-cols-2 gap-5">
    //             <Info icon={<FiMail />} title="Email Address" value={email} />

    //             <Info icon={<FiPhone />} title="Phone Number" value={phone} />

    //             <Info
    //               icon={<FiBook />}
    //               title="Institution"
    //               value={institution}
    //             />

    //             <Info icon={<FiMapPin />} title="Location" value={location} />

    //             <Info
    //               icon={<FiMonitor />}
    //               title="Teaching Mode"
    //               value={teachingMode}
    //             />

    //             <Info
    //               icon={<FiCalendar />}
    //               title="Available Days & Time"
    //               value={AvailableDays}
    //             />

    //             <Info
    //               icon={<FiPlayCircle />}
    //               title="Session Starts"
    //               value={StartDate}
    //             />

    //             <Info
    //               icon={<FiUsers />}
    //               title="Available Slots"
    //               value={`${TotalSlots} Students`}
    //             />
    //           </div>
    //         </div>

    //         {/* About */}

    //         <div className="mt-8 bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
    //           <div className="flex items-center gap-3 mb-6">
    //             <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center">
    //               <FiAward className="text-sky-600 text-xl" />
    //             </div>

    //             <div>
    //               <h2 className="text-3xl font-bold text-slate-800">
    //                 About Tutor
    //               </h2>

    //               <p className="text-slate-500">
    //                 A short introduction from the tutor.
    //               </p>
    //             </div>
    //           </div>

    //           <p className="text-slate-600 leading-9 text-[17px]">{about}</p>
    //         </div>

    //         {/* Bottom CTA */}

    //         <div className="mt-8 bg-gradient-to-r from-sky-600 to-cyan-500 rounded-3xl p-8 text-white shadow-xl">
    //           <h2 className="text-3xl font-bold">Ready to Start Learning?</h2>

    //           <p className="mt-3 text-sky-100 max-w-2xl">
    //             Book your first session today and start learning from an
    //             experienced tutor.
    //           </p>

    //           <button className="btn mt-7 h-14 px-10 rounded-2xl bg-white text-sky-700 hover:bg-slate-100 border-none text-lg font-semibold">
    //             Book Session
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-50 py-10 lg:py-14">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Page Header */}

        <div className="text-center mb-8 lg:mb-10">
          <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Tutor Profile
          </span>

          <h1 className="mt-4 font-bold tracking-tight text-slate-800 text-[clamp(1.9rem,4vw,2.7rem)]">
            Meet Your Tutor
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-[clamp(.95rem,1.4vw,1.05rem)] leading-7 text-slate-500">
            Learn more about your tutor before booking a session.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[360px_1fr]">
          {/* ================= LEFT PROFILE CARD ================= */}

          <aside>
            <div className="sticky top-24 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              {/* Cover */}

              <div className="h-24 bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-500" />

              {/* Avatar */}

              <div className="relative -mt-14 flex justify-center">
                <div className="relative h-36 w-36 overflow-hidden rounded-full border-[6px] border-white shadow-xl">
                  <Image src={image} alt={name} fill className="object-cover" />
                </div>
              </div>

              {/* Content */}

              <div className="px-6 pb-6 pt-4 text-center">
                <h2 className="font-bold text-slate-800 text-[clamp(1.4rem,2vw,1.8rem)]">
                  {name}
                </h2>

                <p className="mt-2 text-[clamp(.9rem,1.2vw,1rem)] text-sky-600 font-medium">
                  {subject} Tutor
                </p>

                {/* Badges */}

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {experience} Years
                  </span>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {teachingMode}
                  </span>
                </div>

                {/* Fee Card */}

                <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50 p-4">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Hourly Fee
                  </p>

                  <h3 className="mt-1 font-bold text-green-600 text-[clamp(1.5rem,2vw,2rem)]">
                    ৳ {HourlyFee}
                  </h3>

                  <p className="text-sm text-slate-500">Per Session Hour</p>
                </div>

                {/* CTA */}

                <button
                  className="
                  mt-6
                  h-12
                  w-full
                  rounded-2xl
                  bg-gradient-to-r
                  from-sky-600
                  to-cyan-500
                  text-white
                  font-semibold
                  shadow-lg
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
                >
                  Book Session
                </button>
              </div>
            </div>
          </aside>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="space-y-6">
            {/* ================= QUICK INFO ================= */}

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-slate-800 text-[clamp(1.25rem,2vw,1.7rem)]">
                    Tutor Information
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Essential information about the tutor.
                  </p>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Available
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Info icon={<FiMail />} title="Email Address" value={email} />

                <Info icon={<FiPhone />} title="Phone Number" value={phone} />

                <Info
                  icon={<FiBook />}
                  title="Institution"
                  value={institution}
                />

                <Info icon={<FiMapPin />} title="Location" value={location} />

                <Info
                  icon={<FiMonitor />}
                  title="Teaching Mode"
                  value={teachingMode}
                />

                <Info
                  icon={<FiAward />}
                  title="Experience"
                  value={`${experience} Years`}
                />
              </div>
            </div>

            {/* ================= ABOUT ================= */}

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100">
                  <FiBook className="text-sky-600 text-lg" />
                </div>

                <div>
                  <h2 className="font-bold text-slate-800 text-[clamp(1.2rem,2vw,1.6rem)]">
                    About Tutor
                  </h2>

                  <p className="text-sm text-slate-500">Short introduction</p>
                </div>
              </div>

              <p className="mt-5 leading-8 text-slate-600 text-[15px]">
                {about}
              </p>
            </div>

            {/* ================= SCHEDULE ================= */}

            <div className="rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-sky-600 to-cyan-500 p-5 text-white">
                <h2 className="font-bold text-[clamp(1.2rem,2vw,1.6rem)]">
                  Teaching Schedule
                </h2>

                <p className="mt-1 text-sm text-sky-100">
                  Session availability
                </p>
              </div>

              <div className="bg-white p-6">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100">
                      <FiCalendar className="text-sky-600 text-lg" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Available Days & Time
                      </p>

                      <h3 className="mt-1 font-semibold text-slate-800">
                        {AvailableDays}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100">
                      <FiPlayCircle className="text-green-600 text-lg" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">Session Starts</p>

                      <h3 className="mt-1 font-semibold text-slate-800">
                        {StartDate}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100">
                      <FiUsers className="text-orange-600 text-lg" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">Available Slots</p>

                      <h3 className="mt-1 font-semibold text-slate-800">
                        {TotalSlots} Students
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Session Fee</p>

                      <h2 className="font-bold text-green-600 text-[clamp(1.4rem,2vw,1.8rem)]">
                        ৳ {HourlyFee}
                      </h2>
                    </div>

                    <button
                      className="
            rounded-xl
            bg-sky-600
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-sky-700
          "
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorDetailPage;