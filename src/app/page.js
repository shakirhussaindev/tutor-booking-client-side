import AvailableTutors from "@/components/home/AvailableTutors";
import Banner from "@/components/home/Banner";
import BecomeTutorCTA from "@/components/home/BecomeTutorCTA";
import StatisticsStrip from "@/components/home/StatisticsStrip";
import Testimonials from "@/components/home/Testimonials";
import WhyChoose from "@/components/home/WhyChoose";

export const metadata = {
  title: "Smart Tutor | Find & Book Expert Tutors Online",
  description:
    "Find qualified tutors for Mathematics, Physics, Chemistry, Biology, English, Computer Science, and more. Compare tutor profiles, check availability, and book sessions online with Smart Tutor.",
};

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <StatisticsStrip/>
      <AvailableTutors/>
      <WhyChoose/>
      <Testimonials/>
      <BecomeTutorCTA/>
    </div>
  );
}
