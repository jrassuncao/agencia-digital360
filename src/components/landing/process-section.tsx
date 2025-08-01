import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { InteractiveBackground } from "@/components/effects/interactive-background"

const processSteps = [
  {
    number: "01",
    icon: "💬",
    title: "Conversa Estratégica",
    description: "Conhecemos seu negócio, objetivos e desafios. Definimos juntos a melhor estratégia digital para alcançar seus resultados."
  },
  {
    number: "02", 
    icon: "📋",
    title: "Proposta & Contrato",
    description: "Apresentamos uma proposta personalizada com cronograma, investimento e entregáveis. Tudo transparente e sem surpresas."
  },
  {
    number: "03",
    icon: "🎨",
    title: "Design & Planejamento",
    description: "Criamos o design visual, estrutura de conteúdo e arquitetura da informação alinhados à identidade da sua marca."
  },
  {
    number: "04",
    icon: "⚡",
    title: "Desenvolvimento",
    description: "Colocamos a mão na massa! Desenvolvemos seu projeto com as melhores tecnologias e práticas do mercado."
  },
  {
    number: "05",
    icon: "✅",
    title: "Revisão & Aprovação",
    description: "Apresentamos o resultado final, coletamos seu feedback e fazemos os ajustes necessários até a aprovação total."
  },
  {
    number: "06",
    icon: "🚀",
    title: "Lançamento & Suporte",
    description: "Publicamos seu projeto e fornecemos todo o suporte técnico. Seu sucesso digital começa aqui!"
  }
]

export const ProcessSection = () => {
  return (
    <Section id="processo" className="relative overflow-hidden">
      <InteractiveBackground />
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Como Funciona</span> Nossa Parceria
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo simples, transparente e focado em resultados. 
            Do primeiro contato ao lançamento do seu projeto digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:bg-card/80 transition-all duration-300 hover:shadow-[0_20px_40px_-10px_hsl(var(--primary)/0.2)]"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                {step.number}
              </div>
              
              <div className="text-4xl mb-4 group-hover:animate-bounce transition-transform duration-300">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col items-center space-y-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold gradient-text">
              Pronto para Começar?
            </h3>
            <p className="text-muted-foreground max-w-md">
              Vamos transformar sua presença digital em uma máquina de resultados. 
              O primeiro passo é conversar com nossa equipe.
            </p>
            <Button size="lg" className="group">
              Iniciar Meu Projeto
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}