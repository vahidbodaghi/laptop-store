import ContactHero from "../Components/Templates/ContactUS/ContactHero";
import ContactInfoSection from "../Components/Templates/ContactUS/ContactInfoSection";
import ContactFormSection from "../Components/Templates/ContactUS/ContactFormSection";
import StatsSection from "../Components/Templates/ContactUS/StatsSection";
import MapSection from "../Components/Templates/ContactUS/MapSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <ContactHero />
      <ContactInfoSection />
      <ContactFormSection />
      <StatsSection />
      <MapSection />
    </div>
  );
}
