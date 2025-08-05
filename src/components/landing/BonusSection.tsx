import { Section } from "@/components/ui/section";

// Importe as suas imagens aqui
import suporteImage from "@/assets/suporte.jpg";
import performanceImage from "@/assets/performance.jpg";
import treinamentoImage from "@/assets/treinamento.jpg";
import pixelsImage from "@/assets/pixels.jpg";

const bonusItems = [
  {
    subtitle: "Assistência Técnica",
    title: "Suporte em Órbita Direta",
    description: "Nossa parceria vai além da entrega final. Durante todo o desenvolvimento e por 15 dias após a decolagem do seu projeto, você tem uma linha de comunicação direta com nossos especialistas. Sem tickets, sem intermediários. Qualquer dúvida ou ajuste é tratado com a agilidade e a atenção que seu negócio merece.",
    image: suporteImage
  },
  {
    subtitle: "Velocidade e Desempenho",
    title: "Engenharia de Performance Máxima",
    description: "Em um mercado movido a anúncios e conversões, a velocidade não é um luxo, é o motor do seu faturamento. Nossa equipe realiza uma calibragem de performance, testando combinações de tecnologias de cache e otimização em plataformas como PageSpeed e GTmetrix. O objetivo: encontrar a configuração perfeita que minimize as fugas e maximize seus resultados.",
    image: performanceImage
  },
  {
    subtitle: "Vídeo Aulas",
    title: "Sessão de Transferência de Comando",
    description: "Entregamos a você as chaves da sua nova nave digital. Após a conclusão, realizamos uma sessão de orientação personalizada e sem complicação. Explicamos como administrar os aspectos essenciais do seu site para que você tenha total autonomia e confiança para aproveitar todo o potencial da sua nova ferramenta.",
    image: treinamentoImage
  },
  {
    subtitle: "Marketing",
    title: "Instalação de Satélites de Marketing",
    description: "Preparamos seu site para o ecossistema de marketing digital. Realizamos a instalação e configuração dos principais pixels de rastreamento (Google Ads, Meta Ads) e, caso precise, orientamos na criação de conversões personalizadas. Deixamos sua plataforma 100% pronta para capturar dados, otimizar campanhas e gerar inteligência para o seu negócio.",
    image: pixelsImage
  }
];

export function BonusSection() {
  return (
    // Adicionamos classes para o posicionamento do fundo.
    <Section id="bonus" className="relative overflow-hidden">
      {/* Elemento do fundo de nebulosa */}
      <div className="nebula-background"></div>

      {/* Conteúdo principal da seção */}
      <div className="relative z-10">
        <div className="text-center space-y-6 mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Sua Plataforma Digital, Elevada ao Máximo Potencial.</span>
          </h2>
        </div>
        
        <div className="relative bonus-timeline">
          {bonusItems.map((item, index) => (
            <div key={index} className="bonus-item-wrapper">
              <div className="bonus-item-content">
                <div className="bonus-text-content" style={{ textAlign: 'left' }}>
                  <p className="bonus-subtitle">{item.subtitle}</p>
                  <h3 className="bonus-title">{item.title}</h3>
                  <p className="bonus-description">{item.description}</p>
                </div>
                <div className="bonus-image-wrapper animated-frame-wrapper">
                  <img src={item.image} alt={item.title} className="bonus-image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}