import { Section } from "@/components/ui/section";
import logo360 from "@/assets/logo-360.png";

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border/50">
      <Section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo360} 
                alt="Logo Agência 360" 
                className="w-40 h-auto rounded-lg" 
              />
            </div>
            <p className="text-muted-foreground">
              Soluções digitais inteligentes para empresas que querem crescer de verdade.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Nossos Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Desenvolvimento de Sites</li>
              <li>Sistemas & Dashboards</li>
              <li>Google Meu Negócio</li>
              <li>Vídeos Publicitários</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contato</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 contato@agencia360.com</p>
              <p>📞 +55 21 96561-1980</p>
              <p>📍 Rio de Janeiro, RJ</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Agência 360. Todos os direitos reservados.</p>
        </div>
      </Section>
    </footer>
  );
}