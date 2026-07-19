import AboutHero from "../Components/Templates/AboutUS/AboutHero";
import FinalCta from "../Components/Templates/AboutUS/FinalCta";
import OurMission from "../Components/Templates/AboutUS/OurMission";
import OurStory from "../Components/Templates/AboutUS/OurStory";
import Statistics from "../Components/Templates/AboutUS/Statistics";
import Team from "../Components/Templates/AboutUS/Team";
import WhyChooseUs from "../Components/Templates/AboutUS/WhyChooseUs";






export default function AboutUs() {
  

  return (
    <div className="min-h-screen w-full bg-white">
      <AboutHero />
      <OurStory />
      <OurMission />
      <WhyChooseUs />
      <Statistics />
      <Team />
      <FinalCta />
    </div>
  );
}
