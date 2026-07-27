import AvailableTutors from "@/components/home/AvailableTutors";
import Banner from "@/components/home/Banner";
import BecomeTutorCTA from "@/components/home/BecomeTutorCTA";
import StatisticsStrip from "@/components/home/StatisticsStrip";
import Testimonials from "@/components/home/Testimonials";
import WhyChoose from "@/components/home/WhyChoose";

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
