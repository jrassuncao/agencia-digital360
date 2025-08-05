import { Section } from "@/components/ui/section";

// ✅ 1. Importe as suas imagens aqui
import suporteImage from "@/assets/suporte.jpg";
import performanceImage from "@/assets/performance.jpg";
import treinamentoImage from "@/assets/treinamento.jpg";
import pixelsImage from "@/assets/pixels.jpg";

const bonusItems = [
  {
    subtitle: "Assistência Técnica",
    title: "Suporte Personalizado",
    description: "Durante todo o processo e até 15 dias depois, você terá acesso direto à nossa equipa para qualquer dúvida ou ajuste que queira solicitar.",
    image: suporteImage
  },
  {
    subtitle: "Velocidade e Desempenho",
    title: "Otimizações de Performance",
    description: "Analisamos e otimizamos a velocidade do seu site com PageSpeed e Gtmetrix para garantir a melhor experiência e mais conversões.",
    image: performanceImage
  },
  {
    subtitle: "Vídeo Aulas",
    title: "Treinamento em Gestão",
    description: "No final, entregamos um mini-treinamento para que você possa gerir o seu projeto e fazer pequenas alterações com total autonomia.",
    image: treinamentoImage
  },
  {
    subtitle: "Marketing",
    title: "Instalação de Pixels",
    description: "Instalamos todos os pixels de rastreamento (Google, Meta, etc.) que você precisar para as suas campanhas de marketing.",
    image: pixelsImage
  }
];

export function BonusSection() {
  return (
    <Section id="bonus">
      <div className="text-center space-y-6 mb-24">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          <span className="gradient-text">Você Ainda Ganha Bónus</span>
        </h2>
      </div>
      
      <div className="relative bonus-timeline">
        {bonusItems.map((item, index) => (
          <div key={index} className="bonus-item-wrapper">
            <div className="bonus-item-content">
              <div className="bonus-text-content">
                <p className="bonus-subtitle">{item.subtitle}</p>
                <h3 className="bonus-title">{item.title}</h3>
                <p className="bonus-description">{item.description}</p>
              </div>
              <div className="bonus-image-wrapper">
                <img src={item.image} alt={item.title} className="bonus-image" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
