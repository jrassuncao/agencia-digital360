// src/pages/Index.tsx
import { useState, useEffect } from "react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { RoadmapSection } from "@/components/landing/RoadmapSection";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { ServicesSection } from "@/components/landing/services-section";
import { FAQSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ContactSection } from "@/components/landing/ContactSection";
import { Preloader } from "@/components/ui/Preloader";
import { BonusSection } from "@/components/landing/BonusSection";
import TargetAudienceSection from "@/components/landing/TargetAudienceSection";
// ✅ 1. Importe a nova secção aqui
import { PainPointsSection } from "@/components/landing/PainPointsSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      
      <div className={`relative transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <SectionDivider />
          {/* ✅ 2. Adicione a nova secção aqui, antes do divisor */}
          <PainPointsSection />
          <SectionDivider />
          <BonusSection />
          <TargetAudienceSection />
          <SectionDivider />
          <RoadmapSection />
          <SectionDivider />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
};

export default Index;
