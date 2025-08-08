// src/components/landing/TargetAudienceSection.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import ConstellationBackground from "../effects/ConstellationBackground";

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

const TargetAudienceSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);
  const position = useTransform(scrollYProgress, (pos) => (pos >= 0.2 && pos <= 0.8 ? "sticky" : "relative"));

  const decoderProgress = useTransform(scrollYProgress, [0.3, 0.8], [0, 100]);

  return (
    // ✅ CORREÇÃO: A classe "overflow-hidden" foi REMOVIDA daqui
    <section ref={targetRef} className="relative h-[300vh] bg-background text-foreground">
      <ConstellationBackground scrollYProgress={scrollYProgress} />

      <motion.div
        style={{ opacity, scale, position }}
        className="top-0 flex h-screen w-full flex-col items-center justify-center px-4 relative z-10"
      >
        <div className="text-center">
          <p className="mb-4 text-2xl font-light text-muted-foreground md:text-3xl">
            Para quem quer simplificar o digital e ver resultado.
          </p>
          <h2 className="mb-8 text-4xl font-bold md:text-6xl gradient-text">
            Para quem são os serviços 360?
          </h2>
        </div>

        <div className="w-full max-w-3xl space-y-8">
          {contentData.map((item, index) => {
            const start = index / contentData.length;
            const end = (index + 1) / contentData.length;
            const itemProgress = useTransform(decoderProgress, [start * 100, end * 100], [0, 100]);

            return (
              // ✅ MELHORIA: Adicionado backdrop-blur-sm para legibilidade
              <div key={index} className="relative overflow-hidden rounded-lg border border-border bg-card/50 p-6 backdrop-blur-sm">
                <motion.div
                  style={{ width: useTransform(itemProgress, [0, 100], ["0%", "100%"]) }}
                  className="absolute left-0 top-0 h-full bg-primary/20"
                />
                <h3 className="mb-2 text-xl font-semibold text-primary">{item.title}</h3>
                <p className="text-lg text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-xl font-light text-muted-foreground">
          Deixe a parte difícil com a gente. Você foca no que ama.
        </p>
      </motion.div>
    </section>
  );
};

export default TargetAudienceSection;