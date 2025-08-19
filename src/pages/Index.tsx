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
import { FinalPersuasionSection} from "@/components/FinalPersuasionSection";
import { PersonalLetterSection } from "@/components/PersonalLetterSection";
import { FooterSection } from "@/components/FooterSection";
// import footer from "@/assets/footer.png";

const Index = () => {
  return (
    <div className="min-h-screen relative select-none">
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
      <FinalPersuasionSection />
      <PersonalLetterSection />
      <FooterSection />

        {/* Background image */}
        {/* <div 
          className="absolute bottom-0 w-full h-[1000px] opacity-40 bg-cover bg-center -z-9"
          style={{
            backgroundImage: `url(${footer})`,
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)'
          }}
        /> */}
    </div>
  );
};

export default Index;
