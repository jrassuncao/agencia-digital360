import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CTASection() {
  return (
    <Section className="bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10">
        <Card className="max-w-4xl mx-auto p-8 lg:p-12 bg-background/10 backdrop-blur-glass border-primary/20">
          <div className="text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Pronto para <span className="text-primary">revolucionar</span><br />
              sua presença digital?
            </h2>
            
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Não deixe sua empresa ficar para trás. Comece hoje mesmo a construir uma presença digital que gera resultados reais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">+500%</div>
                <p className="text-white/70">Aumento médio em conversões</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">24h</div>
                <p className="text-white/70">Tempo de resposta</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <p className="text-white/70">Satisfação dos clientes</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
                🚀 Começar minha transformação digital
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                📞 Falar com especialista
              </Button>
            </div>
            
            <p className="text-sm text-white/60">
              Consulta estratégica gratuita • Sem compromisso • Resultados garantidos
            </p>
          </div>
        </Card>
      </div>
    </Section>
  )
}