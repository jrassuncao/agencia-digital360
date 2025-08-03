import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import contactImage from "@/assets/iniciar-contato.jpg"; // Importa a sua imagem
import { Mail, Phone } from "lucide-react";

export function ContactSection() {
  const handleWhatsAppClick = () => {
    const url = "https://api.whatsapp.com/send/?phone=5521965611980&text=Gostaria+de+uma+cota%C3%A7%C3%A3o+e+tirar+d%C3%BAvidas.&type=phone_number&app_absent=0";
    window.open(url, '_blank');
  };

  return (
    <Section id="contato" className="p-0" container={false}>
      <div className="relative">
        {/* Imagem de Fundo */}
        <img 
          src={contactImage} 
          alt="Contato Imediato Agência 360" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      
      {/* Bloco de contato (classes de borda removidas) */}
      <div className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Texto da esquerda */}
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
                Pronto para a decolagem digital?
              </h2>

              <br /><br />

              <p className="text-xl text-muted-foreground">
                Fale com um especialista e receba o plano de voo personalizado
                para o seu sucesso.
              </p>
            </div>

            {/* Coluna da direita – deslocada muito à DIREITA */}
            <div className="space-y-6 md:ml-auto md:pl-16">
              <br /><br /><br /><br />

              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:contato@agencia360.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contato@agencia360.com
                  </a>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-semibold">Telefone</h4>
                  <a
                    href="tel:+5521965611980"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 21 96561-1980
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
