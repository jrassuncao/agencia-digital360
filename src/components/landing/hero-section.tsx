import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { PlexusBackground } from "@/components/effects/plexus-background"
import heroImage from "@/assets/hero-bg.jpg"

// --- Lógica para o Efeito de Máquina de Escrever ---

const phrasesToType = [
  'resultado',
  'impacto real',
];

export function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrasesToType[phraseIndex];
      if (isDeleting) {
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000); 
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrasesToType.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  const handleWhatsAppClick = () => {
    const url = "https://api.whatsapp.com/send/?phone=5521965611980&text=Gostaria+de+uma+cota%C3%A7%C3%A3o+e+tirar+d%C3%BAvidas.&type=phone_number&app_absent=0";
    window.open(url, '_blank');
  };

  return (
    <Section className="relative min-h-screen flex items-center justify-center overflow-hidden" container={false}>
      {/* Todo o seu código de background foi mantido intacto */}
      <PlexusBackground className="opacity-40" />
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float glow-primary" />
      <div className="absolute top-32 right-20 w-3 h-3 bg-secondary rounded-full animate-float glow-secondary" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent rounded-full animate-float glow-accent" style={{ animationDelay: '4s' }} />
      <div className="absolute top-60 right-40 w-5 h-5 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-60 right-10 w-3 h-3 bg-secondary/50 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight h-48 sm:h-56 lg:h-64">
            <span className="gradient-text">Transformamos</span><br />
            presença online em<br />
            <span className="gradient-text">
              {displayedText}
            </span>
            <span className="typing-cursor">|</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Na Agência Digital 360, entregamos a solução completa para empresas que querem crescer com consistência e inteligência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            
            <Button 
              variant="hero" 
              size="xl" 
              className="animate-pulse-slow"
              onClick={handleWhatsAppClick}
            >
             Comece agora sua revolução digital
            </Button>
            
            {/* ✅ O botão "Conhecer nossos serviços" foi removido */}

          </div>
          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              Bem-vindo à <strong className="text-primary">Agência 360</strong> — Soluções Inteligentes para Empresas que Querem Crescer de Verdade
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </Section>
  )
}
