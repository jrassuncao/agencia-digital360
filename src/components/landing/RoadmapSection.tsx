import { useState, useEffect, useRef } from "react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BrainCircuit, FileText, Palette, Code, CheckCircle, Rocket } from "lucide-react";

// ✅ Variação de Cores v6: Sequência única e equilibrada
const roadmapSteps = [
  {
    number: <span className="roadmap-card-number" style={{ color: '#6A5ACD', background: 'rgba(106, 90, 205, 0.1)', borderColor: 'rgba(106, 90, 205, 0.4)' }}>01</span>,
    title: "Conversa Estratégica",
    description: "Conhecemos seu negócio, objetivos e desafios. Definimos juntos a melhor estratégia digital para alcançar seus resultados.",
    icon: <BrainCircuit size={40} className="roadmap-card-icon" style={{ color: '#40E0D0' }} /> // Turquoise
  },
  {
    number: <span className="roadmap-card-number" style={{ color: '#9370DB', background: 'rgba(147, 112, 219, 0.1)', borderColor: 'rgba(147, 112, 219, 0.4)' }}>02</span>,
    title: "Proposta & Contrato",
    description: "Apresentamos uma proposta personalizada com cronograma, investimento e entregáveis. Tudo transparente e sem surpresas.",
    icon: <FileText size={40} className="roadmap-card-icon" style={{ color: '#7FFFD4' }} /> // Aquamarine
  },
  {
    number: <span className="roadmap-card-number" style={{ color: '#8A2BE2', background: 'rgba(138, 43, 226, 0.1)', borderColor: 'rgba(138, 43, 226, 0.4)' }}>03</span>,
    title: "Design & Planejamento",
    description: "Criamos o design visual, estrutura de conteúdo e arquitetura da informação alinhados à identidade da sua marca.",
    icon: <Palette size={40} className="roadmap-card-icon" style={{ color: '#48D1CC' }} /> // MediumTurquoise
  },
  {
    number: <span className="roadmap-card-number" style={{ color: '#9932CC', background: 'rgba(153, 50, 204, 0.1)', borderColor: 'rgba(153, 50, 204, 0.4)' }}>04</span>,
    title: "Desenvolvimento",
    description: "Colocamos a mão na massa! Desenvolvemos seu projeto com as melhores tecnologias e práticas do mercado.",
    icon: <Code size={40} className="roadmap-card-icon" style={{ color: '#DDA0DD' }} /> // Plum
  },
  {
    number: <span className="roadmap-card-number" style={{ color: '#8B008B', background: 'rgba(139, 0, 139, 0.1)', borderColor: 'rgba(139, 0, 139, 0.4)' }}>05</span>,
    title: "Revisão & Aprovação",
    description: "Apresentamos o resultado final, coletamos seu feedback e fazemos os ajustes necessários até a aprovação total.",
    icon: <CheckCircle size={40} className="roadmap-card-icon" style={{ color: '#FF00FF' }} /> // Fuchsia
  },
  {
    number: <span className="roadmap-card-number" style={{ color: '#9400D3', background: 'rgba(148, 0, 211, 0.1)', borderColor: 'rgba(148, 0, 211, 0.4)' }}>06</span>,
    title: "Lançamento & Suporte",
    description: "Publicamos seu projeto e fornecemos todo o suporte técnico. Seu sucesso digital começa aqui!",
    icon: <Rocket size={40} className="roadmap-card-icon" style={{ color: '#4B0082' }} /> // Indigo
  }
];

// Componente para o Card individual
function RoadmapCard({ number, title, description, icon }: { number: React.ReactNode, title: string, description: string, icon: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15;
    const y = (e.clientY - top - height / 2) / 15;
    card.style.setProperty('--x', `${-y}deg`);
    card.style.setProperty('--y', `${x}deg`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--x', '0deg');
    card.style.setProperty('--y', '0deg');
  };

  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="roadmap-card relative p-8 rounded-xl overflow-hidden">
      <div className="roadmap-card-content">
        <div className="flex justify-between items-start mb-4">
          {number}
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

// Lógica para o efeito de estrelas
interface Star {
  id: number;
  size: number;
  duration: number;
  delay: number;
  left: string;
  top: string;
}

// Componente principal da Secção
export function RoadmapSection() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = [];
    const starCount = 50;
    for (let i = 0; i < starCount; i++) {
      generatedStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        duration: 5 + Math.random() * 10,
        delay: Math.random() * 15,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      });
    }
    setStars(generatedStars);
  }, []);

  const handleWhatsAppClick = () => {
    const url = "https://api.whatsapp.com/send/?phone=5521965611980&text=Gostaria+de+uma+cota%C3%A7%C3%A3o+e+tirar+d%C3%BAvidas.&type=phone_number&app_absent=0";
    window.open(url, '_blank');
  };

  return (
    <Section id="processo" className="relative overflow-hidden">
      {/* Contentor para o Fundo de Estrelas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: star.left,
              top: star.top,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
      
      {/* Conteúdo da Secção */}
      <div className="relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Nossa Jornada</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Da ideia ao resultado, seguimos um processo claro e colaborativo para garantir que cada projeto seja um sucesso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapSteps.map((step, index) => (
            <RoadmapCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>

        <div className="roadmap-cta-card mt-16">
          <h3 className="text-3xl font-bold">
            <span className="gradient-text">Pronto para Começar?</span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Vamos transformar sua presença digital em uma máquina de resultados. O primeiro passo é conversar com nossa equipe.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            className="mt-8"
            onClick={handleWhatsAppClick}
          >
            Iniciar Meu Projeto →
          </Button>
        </div>
      </div>
    </Section>
  );
}
