import { HeroSection } from '../components/sections/HeroSection';
import { StatsStrip } from '../components/sections/StatsStrip';
import { HighlightsSection } from '../components/sections/HighlightsSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { FaqSection } from '../components/sections/FaqSection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <HighlightsSection />
      <ServicesSection />
      <FaqSection />
    </>
  );
};
