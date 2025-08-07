import { useState, useEffect, useRef } from "react";
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"

import { InteractiveBackground } from "@/components/effects/interactive-background"
import webDevImage from "@/assets/web-development.jpg"
import dashboardImage from "@/assets/dashboard-systems.jpg"
import googleBusinessImage from "@/assets/google-business.jpg"
import videoProductionImage from "@/assets/video-production.jpg"
import seoImage from "@/assets/seo-performance.jpg"
import socialMediaImage from "@/assets/social-media.jpg"

const services = [
  {
    title: "Desenvolvimento de Sites Estratégicos",
    description: "Criamos sites que impressionam visualmente e vendem, comunicando e fortalecendo sua marca, de microempresas a grandes negócios.",
    features: [
      "Design impactante e responsivo",
      "UX/UI de alta performance",
      "Performance técnica impecável",
      "Foco total em experiência do usuário",
      "Otimização para conversão"
    ],
    image: webDevImage
  },
  {
    title: "Sistemas & Dashboards Personalizados",
    description: "Automatize. Controle. Cresça. Desenvolvemos painéis inteligentes, sistemas sob medida e ferramentas que resolvem problemas específicos do seu negócio.",
    features: [
      "Painéis inteligentes e intuitivos",
      "Sistemas sob medida",
      "Automação de processos",
      "Decisões baseadas em dados",
      "Economia de tempo e recursos"
    ],
    image: dashboardImage
  },
  {
    title: "Otimização do Google Meu Negócio",
    description: "Sua empresa no topo das buscas locais — onde seus clientes estão. Otimizamos seu perfil com fotos profissionais, informações estratégicas e gestão de avaliações.",
    features: [
      "Otimização completa do perfil",
      "Fotos profissionais",
      "Gestão de avaliações",
      "Mais visibilidade local",
      "Aumento direto em visitas e contatos"
    ],
    image: googleBusinessImage
  },
  {
    title: "Criação de Vídeos Publicitários",
    description: "Sua mensagem em movimento: impacte, envolva e venda mais. Produzimos vídeos publicitários estratégicos com roteiro, captação e edição profissional.",
    features: [
      "Vídeos institucionais e comerciais",
      "Roteiro estratégico",
      "Captação e edição profissional",
      "Identidade visual alinhada",
      "Maior engajamento e conversão"
    ],
    image: videoProductionImage
  },
  {
    title: "SEO de Performance: Sua Marca no Topo do Google",
    description: "Ser encontrado é o primeiro passo para vender. Posicionamos sua empresa de forma estratégica no Google, atraindo clientes qualificados que estão ativamente buscando por suas soluções. Não se trata apenas de tráfego, mas de gerar oportunidades reais de negócio.",
    features: [
      "Análise completa de palavras-chave",
      "Otimização técnica (On-Page)",
      "Estratégia de autoridade (Off-Page)",
      "Monitoramento e relatórios de performance",
      "Atração de tráfego orgânico qualificado"
    ],
    image: seoImage
  },
  {
    title: "Gestão de Redes Sociais: Conexões que Geram Resultados",
    description: "Transformamos suas redes sociais em canais de relacionamento e vendas. Mais do que posts, criamos conversas estratégicas, construindo uma comunidade engajada em torno da sua marca com conteúdo relevante e design profissional.",
    features: [
      "Planejamento de conteúdo estratégico",
      "Criação de posts com design profissional",
      "Gestão e interação com a comunidade",
      "Relatórios de crescimento e engajamento",
      "Campanhas focadas em conversão"
    ],
    image: socialMediaImage
  }
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleWhatsAppClick = () => {
    const url = "https://api.whatsapp.com/send/?phone=5521965611980&text=Gostaria+de+uma+cota%C3%A7%C3%A3o+e+tirar+d%C3%BAvidas.&type=phone_number&app_absent=0";
    window.open(url, '_blank');
  };

  // ✅ 1. Definimos os estilos da animação aqui, com os mesmos parâmetros da AboutSection
  const textAnimationStyle = {
    transition: 'transform 2s cubic-bezier(0.25, 1, 0.5, 1), opacity 4.5s ease-out',
    transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
    opacity: isVisible ? 1 : 0,
  };

  return (
    <Section id="servicos" ref={sectionRef} className="bg-gradient-card relative overflow-hidden">
      <InteractiveBackground className="opacity-20" />
      <div className="relative z-10">
        
        {/* ✅ 2. Aplicamos os estilos inline e removemos as classes de animação */}
        <div style={textAnimationStyle} className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Soluções 360</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Seu potencial é real. Só precisa do impulso certo. Aqui, unimos estratégia, design e criatividade para transformar visão em resultados. 
            Preparado para se destacar de verdade? A hora é agora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
            />
          ))}
        </div>

        <div className="text-center">
 
        </div>
      </div>
    </Section>
  )
}
