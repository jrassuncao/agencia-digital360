import React from 'react';
import { Button } from "@/components/ui/button";
import contactImage from "@/assets/iniciar-contato.jpg";
import { Mail, Phone } from "lucide-react";

const Section = ({ id, className, container = true, children }) => {
  const containerClass = container ? 'container mx-auto' : '';
  return (
    <section id={id} className={`${className} ${containerClass}`}>
      {children}
    </section>
  );
};

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
      
      {/* BLOCO DE CONTATO COM FUNDO PRETO */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Texto da esquerda */}
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl font-bold leading-tight text-white">
                Pronto para a decolagem digital?
              </h2>
              <div className="h-8" />
              <p className="text-xl text-gray-300">
                Fale com um especialista e receba o plano de voo personalizado
                para o seu sucesso.
              </p>
            </div>
            
            {/* Coluna da direita */}
            <div className="space-y-6 md:ml-auto md:pl-16">
              <div className="h-16" />
              
              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" /> {/* Ícone com cor original */}
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a
                    href="mailto:contato@agencia360.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    contato@agencia360.com
                  </a>
                </div>
              </div>
              
              {/* Telefone */}
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" /> {/* Ícone com cor original */}
                <div>
                  <h4 className="font-semibold text-white">Telefone</h4>
                  <a
                    href="tel:+5521965611980"
                    className="text-gray-300 hover:text-white transition-colors"
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