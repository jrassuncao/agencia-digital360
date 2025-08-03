import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa"; // Importa o ícone do WhatsApp

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const url = "https://api.whatsapp.com/send/?phone=5521965611980&text=Gostaria+de+uma+cota%C3%A7%C3%A3o+e+tirar+d%C3%BAvidas.&type=phone_number&app_absent=0";
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="whatsapp-fab"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </Button>
  );
}
