// src/components/landing/TargetAudienceSection.tsx
import { motion } from "framer-motion";
import React from "react";
import PlexusBackground from "../effects/PlexusBackground"; 

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

const TargetAudienceSection: React.FC = () => {
  return (
    <section className="relative bg-background py-20 px-4 text-foreground">
      <PlexusBackground />
      
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
            PARA QUEM É A AGÊNCIA 360?
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