// src/components/effects/ConstellationBackground.tsx
import React, { useState, useEffect } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

// Define os tipos para as props
interface ConstellationBackgroundProps {
  scrollYProgress: MotionValue<number>;
}

const themeColors = [
  "hsl(var(--primary))",
  "hsl(var(--secondary))",
  "hsl(var(--accent))",
];

const ConstellationBackground: React.FC<ConstellationBackgroundProps> = ({ scrollYProgress }) => {
  const [points, setPoints] = useState<{ x: number; y: number; color: string }[]>([]);

  useEffect(() => {
    const newPoints = Array.from({ length: 70 }).map(() => ({
      // ✅ CORREÇÃO: Adiciona uma margem de segurança de 1% em cada lado
      x: 1 + Math.random() * 98, // Gera um número entre 1 e 99
      y: 1 + Math.random() * 98, // Gera um número entre 1 e 99
      color: themeColors[Math.floor(Math.random() * themeColors.length)],
    }));
    setPoints(newPoints);
  }, []);

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full z-0"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 100 100"
    >
      {points.map((p1, i) =>
        points.slice(i + 1, i + 4).map((p2, j) => (
          <motion.path
            key={`${i}-${j}`}
            d={`M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`}
            stroke="hsl(var(--muted-foreground))"
            strokeOpacity="0.3"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            style={{ pathLength }}
          />
        ))
      )}

      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="0.2"
          fill={p.color}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </svg>
  );
};

export default ConstellationBackground;