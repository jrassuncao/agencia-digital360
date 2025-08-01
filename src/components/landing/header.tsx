import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import logoAgencia from "@/assets/logo-360.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // ✅ 1. Função para rolar suavemente para o topo da página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "bg-background/20 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Coluna da Esquerda (Logo) */}
          <div className="flex-1 flex justify-start">
            {/* ✅ 2. Envolvemos a imagem num botão que chama a função scrollToTop */}
            <button onClick={scrollToTop} className="flex items-center focus:outline-none">
              <img
                src={logoAgencia}
                alt="Logo da Agência 360"
                className="h-10 w-auto"
              />
            </button>
          </div>

          {/* Coluna do Centro (Navegação) */}
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </button>
            </nav>
          </div>

          {/* Coluna da Direita (Vazia, para balancear o layout) */}
          <div className="flex-1" />

        </div>
      </div>
    </header>
  )
}