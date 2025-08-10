// src/components/landing/PainPointsSection.tsx
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { XCircle, Users, BarChart2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const painPoints = [
  {
    id: 1,
    icon: <XCircle size={32} />,
    title: "Presença Online Inexistente",
    description: "Sua empresa navega à deriva no espaço digital, sem um website ou redes sociais que gerem novas oportunidades de negócio.",
    solution: "Diretiva: Estabelecer uma base orbital forte com um website de alta conversão e presença estratégica nas redes sociais.",
    color: {
      text: "text-primary",
      border: "border-primary",
      bg: "bg-primary/20",
      glow: "glow-primary",
    },
  },
  {
    id: 2,
    icon: <Users size={32} />,
    title: "Parceiro Atual Desalinhado",
    description: "Sua agência atual não oferece a orientação clara e a parceria estratégica necessárias para navegar no complexo universo do marketing.",
    solution: "Diretiva: Iniciar uma parceria transparente, com comunicação clara e foco total nos seus objetivos de negócio.",
    color: {
      text: "text-secondary",
      border: "border-secondary",
      bg: "bg-secondary/20",
      glow: "glow-secondary",
    },
  },
  {
    id: 3,
    icon: <BarChart2 size={32} />,
    title: "Conteúdo Pouco Atrativo",
    description: "A criação de conteúdos de valor, com visuais que cativem a sua audiência, parece uma missão impossível no dia a dia.",
    solution: "Diretiva: Produzir um arsenal de conteúdo visualmente impressionante que engaja, educa e converte a sua audiência.",
    color: {
      text: "text-accent",
      border: "border-accent",
      bg: "bg-accent/20",
      glow: "glow-accent",
    },
  },
  {
    id: 4,
    icon: <Zap size={32} />,
    title: "Leads de Baixa Qualidade",
    description: "Os contactos que chegam até si não são o público ideal, resultando num desperdício de tempo e recursos valiosos.",
    solution: "Diretiva: Implementar um sistema de atração de alta precisão para capturar os clientes certos para o seu negócio.",
    color: {
      text: "text-pink-500",
      border: "border-pink-500",
      bg: "bg-pink-500/20",
      glow: "shadow-[0_0_40px_rgba(236,72,153,0.3)]", // Glow customizado para a cor rosa
    },
  },
];

export const PainPointsSection: React.FC = () => {
  const [activePoint, setActivePoint] = useState(painPoints[0]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleWhatsAppClick = () => {
    const url = "https://api.whatsapp.com/send/?phone=5521965611980&text=Vi+os+desafios+no+site+e+quero+uma+solu%C3%A7%C3%A3o!&type=phone_number&app_absent=0";
    window.open(url, '_blank');
  };

  // Função para iniciar o slideshow
  const startSlideshow = () => {
    // Para qualquer slideshow anterior para evitar múltiplos intervalos
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setActivePoint(currentPoint => {
        const currentIndex = painPoints.findIndex(p => p.id === currentPoint.id);
        const nextIndex = (currentIndex + 1) % painPoints.length;
        return painPoints[nextIndex];
      });
    }, 2000); // Muda a cada 2 segundos
  };

  // Função para parar o slideshow
  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Inicia o slideshow quando o componente é montado
  useEffect(() => {
    startSlideshow();
    // Limpa o intervalo quando o componente é desmontado
    return () => stopSlideshow();
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="nebula-background pointer-events-none"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          className="mx-auto max-w-5xl lg:grid lg:grid-cols-[auto_1fr] lg:gap-x-8 items-start"
          onMouseEnter={stopSlideshow} // Pausa o slideshow ao entrar com o rato
          onMouseLeave={startSlideshow} // Recomeça o slideshow ao sair com o rato
        >
          <motion.div 
            className="text-center lg:text-left lg:col-start-2 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl gradient-text whitespace-nowrap pb-2">
              Está navegando por algum destes desafios?
            </h2>
          </motion.div>

          {/* Painel de Controlo (Ícones) - Coluna 1, Linha 2 em LG */}
          <div className="flex flex-row lg:flex-col justify-center gap-4 mx-auto lg:mx-0 lg:row-start-2">
            {painPoints.map((point) => (
              <motion.button
                key={point.id}
                onMouseEnter={() => setActivePoint(point)}
                onClick={() => setActivePoint(point)}
                className={cn(
                  "p-4 rounded-lg border transition-all duration-300",
                  activePoint.id === point.id
                    ? `${point.color.bg} ${point.color.border} ${point.color.glow}`
                    : "border-border bg-card/50 hover:bg-primary/10"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={cn(
                  "transition-colors duration-300", 
                  activePoint.id === point.id ? point.color.text : "text-muted-foreground"
                )}>
                  {point.icon}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Painel e CTA - Coluna 2, Linha 2 em LG */}
          <div className="flex flex-1 flex-col gap-8 mt-8 lg:mt-0 lg:row-start-2">
            {/* Painel Holográfico de Exibição */}
            <div className="relative flex-1 p-8 rounded-lg bg-card/30 backdrop-blur-sm border border-border overflow-hidden min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePoint.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col justify-center h-full"
                >
                  <h3 className={cn("text-2xl font-bold mb-4", activePoint.color.text)}>{activePoint.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{activePoint.description}</p>
                  <p className={cn("text-lg text-primary-foreground font-semibold border-t pt-4", activePoint.color.border)}>
                    {activePoint.solution}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Card de CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-center p-8 md:p-12 rounded-xl bg-card/30 backdrop-blur-sm border border-border transition-all duration-300 hover:border-primary/50 hover:glow-primary hover:scale-[1.02]">
                <h3 className="text-3xl font-bold gradient-text">
                  Pronto para uma Solução?
                </h3>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Vamos transformar seus desafios em resultados. O primeiro passo é conversar com nossa equipe de especialistas.
                </p>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="mt-8"
                  onClick={handleWhatsAppClick}
                >
                  Iniciar Diagnóstico →
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
