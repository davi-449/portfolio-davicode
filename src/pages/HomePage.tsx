import { ArchitectHero } from '../components/sections/ArchitectHero';
import { StatsStrip } from '../components/sections/StatsStrip';
import { HighlightsSection } from '../components/sections/HighlightsSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { FaqSection } from '../components/sections/FaqSection';

export const HomePage = () => {
  return (
    <>
      <ArchitectHero />
      <StatsStrip />
      <HighlightsSection />
      <ServicesSection />
      <FaqSection />
    </>
  );
};
