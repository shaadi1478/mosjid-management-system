import AcademySection from "./AcademySection";
import DonateSection from "./DonateSection";
import EventsSection from "./EventsSection";
import Hero from "./Hero";
import PrayerTimes from "./PrayerTimes";
import StatsSection from "./StatsSection";

export default function Home() {
  return (
    <div>
        <Hero />
        <PrayerTimes />
        <DonateSection />
        <EventsSection />
        <AcademySection />
        <StatsSection />
        
    </div>
  );
}