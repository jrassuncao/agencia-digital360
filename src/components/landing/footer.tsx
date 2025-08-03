import { Section } from "@/components/ui/section";
import logo360 from "@/assets/logo-360.png";

export function Footer() {
  return (
    <footer className="bg-black border-t border-border/50">
      <Section className="py-12 bg-black">
        <div className="grid grid-cols-1 gap-8">
          
          {/* Conteúdo unificado e centralizado */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo360} 
                alt="Logo Agência 360" 
                className="w-40 h-auto rounded-lg" 
              />
            </div>
            <p className="text-muted-foreground max-w-md">
              Soluções digitais inteligentes para empresas que querem crescer de verdade.
            </p>
          </div>
          
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Agência 360. Todos os direitos reservados.</p>
        </div>
      </Section>
    </footer>
  );
}