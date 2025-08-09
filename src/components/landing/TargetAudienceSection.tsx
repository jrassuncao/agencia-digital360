// src/components/landing/TargetAudienceSection.tsx
import { motion } from "framer-motion";
// ✅ 1. Imports adicionados para o efeito de estrelas
import React, { useState, useEffect } from "react";

const contentData = [
  {
    title: "Não sabe por onde começar sua marca?",
    description: "Nós criamos sua identidade visual.",
  },
  {
    title: "O site do seu negócio não traz clientes?",
    description: "Nós transformamos ele em uma máquina de conversão.",
  },
  {
    title: "Não tem tempo para cuidar de tudo?",
    description: "Nós cuidamos de tudo para você.",
  },
  {
    title: "Quer vender e atender de qualquer lugar do mundo?",
    description: "Nós te conectamos com seu cliente, onde ele estiver.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

// ✅ 2. Interface para definir a estrutura de cada estrela
interface Star {
  id: number;
  size: number;
  duration: number;
  delay: number;
  left: string;
  top: string;
}

const TargetAudienceSection: React.FC = () => {
  // ✅ 3. Lógica para criar e armazenar as estrelas
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = [];
    const starCount = 50; // Mesmo número de estrelas da sua outra seção
    for (let i = 0; i < starCount; i++) {
      generatedStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        duration: 5 + Math.random() * 10,
        delay: Math.random() * 15,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      });
    }
    setStars(generatedStars);
  }, []);

  return (
    // ✅ 4. As classes 'relative' e 'overflow-hidden' são cruciais para conter o fundo
    <section className="relative overflow-hidden bg-background py-20 px-4 text-foreground">
      
      {/* ✅ 5. JSX para renderizar o fundo de estrelas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star" // A classe 'star' vem do seu index.css
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: star.left,
              top: star.top,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="mb-4 text-2xl font-light text-muted-foreground md:text-3xl">
            Para quem quer simplificar o digital e ver resultado.
          </p>
          <h2 className="mb-8 text-4xl font-bold md:text-6xl gradient-text">
            Para quem são nossos serviços?
          </h2>
        </motion.div>

        <div className="space-y-8">
          {contentData.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg border border-border bg-card/50 p-6 backdrop-blur-sm"
              variants={itemVariants}
            >
              <h3 className="mb-2 text-xl font-semibold text-primary">{item.title}</h3>
              <p className="text-lg text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.p variants={itemVariants} className="mt-12 text-center text-xl font-light text-muted-foreground">
          Deixe a parte difícil com a gente. Você foca no que ama.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default TargetAudienceSection;