import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { RoadmapSection } from "@/components/landing/RoadmapSection";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { ServicesSection } from "@/components/landing/services-section";
import { FAQSection } from "@/components/landing/faq-section";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ContactSection } from "@/components/landing/ContactSection";

const Index = () => {
  return (
    // Usamos um React Fragment <> para não adicionar divs desnecessários
    <>
      <Header />
      {/* ✅ Este 'div' agora contém todo o conteúdo que rola,
          resolvendo o problema do scroll horizontal sem afetar o Header. */}
      <div className="overflow-x-hidden">
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <RoadmapSection />
          <SectionDivider />
          <FAQSection />
          <ContactSection />
          <CTASection />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
};

export default Index;
