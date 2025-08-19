import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExamplesSection } from "@/components/ExamplesSection";
import { ContentFactorsSection } from "@/components/ContentFactorsSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { ProgramSection } from "@/components/ProgramSection";
import { BonusesSection } from "@/components/BonusesSection";
import { EconomySection } from "@/components/EconomySection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExamplesSection />
      <ContentFactorsSection />
      <TargetAudienceSection />
      <ProgramSection />
      <BonusesSection />
      <EconomySection />
      <WhyChooseSection />
      <DifferenceSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
