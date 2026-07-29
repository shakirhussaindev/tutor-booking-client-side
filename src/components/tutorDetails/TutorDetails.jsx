import Image from "next/image";
import {
  FiAward,
  FiBook,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiPhone,
} from "react-icons/fi";

import Info from "./Info";
import ScheduleCard from "./ScheduleCard";

const TutorDetails = ({ tutor }) => {
  const {
    name,
    image,
    email,
    phone,
    institution,
    location,
    subject,
    teachingMode,
    experience,
    about,
    HourlyFee,
  } = tutor;

  return (
    <section className="min-h-screen bg-background py-10 lg:py-14 transition-colors">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Header */}

        <div className="text-center mb-10">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Tutor Profile
          </span>

          <h1 className="mt-4 text-[clamp(2rem,4vw,2.8rem)] font-bold text-foreground">
            Meet Your Tutor
          </h1>

          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground leading-7">
            Explore tutor information before booking your learning session.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[340px_1fr]">
          {/* ================= LEFT PROFILE ================= */}

          <aside>
            <div className="sticky top-24 overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
              <div className="h-24 bg-gradient-to-r from-sky-600 to-cyan-500" />

              <div className="-mt-14 flex justify-center">
                <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-background shadow-lg">
                  <Image src={image} alt={name} fill className="object-cover" />
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 text-center">
                <h2 className="text-2xl font-bold text-foreground">{name}</h2>

                <p className="mt-2 text-primary font-medium">{subject} Tutor</p>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {experience} Years
                  </span>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {teachingMode}
                  </span>
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-muted p-4">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Hourly Fee
                  </p>

                  <h3 className="mt-1 text-3xl font-bold text-green-600">
                    ৳ {HourlyFee}
                  </h3>

                  <p className="text-sm text-muted-foreground">Per Session</p>
                </div>
              </div>
            </div>
          </aside>

          {/* ================= RIGHT ================= */}

          <div className="space-y-6">
            {/* Tutor Information */}

            <div className="rounded-3xl border border-border bg-card p-6 shadow-lg">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Tutor Information
                </h2>

                <p className="mt-2 text-muted-foreground">
                  Essential information about the tutor.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Info icon={<FiMail />} title="Email" value={email} />

                <Info icon={<FiPhone />} title="Phone" value={phone} />

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

            {/* About */}

            <div className="rounded-3xl border border-border bg-card p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <FiBook className="text-lg text-primary" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    About Tutor
                  </h2>

                  <p className="text-sm text-muted-foreground">
                    Short introduction
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-8 text-muted-foreground">{about}</p>
            </div>

            <ScheduleCard tutor={tutor}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorDetails;
