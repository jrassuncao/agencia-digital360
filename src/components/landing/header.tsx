import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import logoAgencia from "@/assets/logo-360.png";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false);
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled || isMobileMenuOpen ? "bg-background/10 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-1 flex justify-start">
            <button onClick={scrollToTop} className="flex items-center focus:outline-none">
              <img
                src={logoAgencia}
                alt="Logo da Agência 360"
                className="h-10 w-auto"
              />
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('sobre')} className="text-muted-foreground hover:text-primary transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('servicos')} className="text-muted-foreground hover:text-primary transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('faq')} className="text-muted-foreground hover:text-primary transition-colors">FAQ</button>
            </nav>
          </div>

          <div className="flex-1 flex justify-end">
            {/* ✅ Cor do ícone do menu alterada para azul */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-primary">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile de Ecrã Inteiro */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40 flex flex-col items-center justify-center space-y-6">
          {/* ✅ Cor da fonte dos links alterada para azul */}
          <button onClick={() => scrollToSection('sobre')} className="text-lg text-primary hover:text-primary/80 transition-colors">Sobre</button>
          <button onClick={() => scrollToSection('servicos')} className="text-lg text-primary hover:text-primary/80 transition-colors">Serviços</button>
          <button onClick={() => scrollToSection('faq')} className="text-lg text-primary hover:text-primary/80 transition-colors">FAQ</button>
        </div>
      )}
    </header>
  )
}
