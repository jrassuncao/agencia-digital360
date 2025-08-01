import { RoadmapSection } from "@/components/landing/RoadmapSection";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { ServicesSection } from "@/components/landing/services-section";
import { FAQSection } from "@/components/landing/faq-section";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
import { SectionDivider } from "@/components/ui/SectionDivider"; // ✅ Importamos o novo componente

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <RoadmapSection />
        <SectionDivider /> {/* ✅ Adicionamos o divisor aqui */}
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
