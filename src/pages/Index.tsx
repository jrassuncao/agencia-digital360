import { useState, useEffect } from "react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { RoadmapSection } from "@/components/landing/RoadmapSection";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { ServicesSection } from "@/components/landing/services-section";
import { FAQSection } from "@/components/landing/faq-section";
/*import { CTASection } from "@/components/landing/cta-section";*/
import { Footer } from "@/components/landing/footer";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ContactSection } from "@/components/landing/ContactSection";
import { Preloader } from "@/components/ui/Preloader"; // ✅ 1. Importamos o Preloader
import { BonusSection } from "@/components/landing/BonusSection";

const Index = () => {
  // ✅ 2. Lógica para controlar o estado de carregamento
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula um tempo de carregamento
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    // Usamos um React Fragment <> para não adicionar divs desnecessários
    <>
      <Preloader isLoading={isLoading} />
      
      {/* O conteúdo do site só aparece quando o carregamento termina */}
      <div className={`transition-opacity duration-1000 overflow-x-hidden ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <SectionDivider />
          <BonusSection />
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
