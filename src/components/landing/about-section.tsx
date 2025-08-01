import { useState, useEffect, useRef } from "react";
import imagemQuemSomos from "@/assets/astronauta-about-section.png"; 
import { Section } from "@/components/ui/section";

// As "receitas" para os efeitos continuam as mesmas
interface Particle {
  id: number;
  size: number;
  duration: number;
  delay: number;
  left: string;
  top: string;
}

interface Orbit {
  id: number;
  size: number;
  duration: number;
  left: string;
  top: string;
}

export function AboutSection() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [orbits, setOrbits] = useState<Orbit[]>([]);
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // O useEffect para criar os efeitos de fundo continua o mesmo
  useEffect(() => {
    const generatedParticles: Particle[] = [];
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      generatedParticles.push({
        id: i,
        size: Math.random() * 3 + 1,
        duration: 5 + Math.random() * 10,
        delay: Math.random() * 5,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      });
    }
    setParticles(generatedParticles);

    const generatedOrbits: Orbit[] = [];
    const orbitCount = 3;
    for (let i = 0; i < orbitCount; i++) {
      generatedOrbits.push({
        id: i,
        size: 200 + Math.random() * 300,
        duration: 150 + Math.random() * 200,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      });
    }
    setOrbits(generatedOrbits);
  }, []);

  // O useEffect para observar a secção continua o mesmo
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // ✅ 1. Definimos os estilos da animação diretamente aqui
  const animationStyle = {
    transition: 'transform 4s cubic-bezier(0.25, 1, 0.5, 1), opacity 2.5s ease-out',
  };

  const column1Style = {
    ...animationStyle,
    transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
    opacity: isVisible ? 1 : 0,
  };

  const column2Style = {
    ...animationStyle,
    transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
    opacity: isVisible ? 1 : 0,
  };

  return (
    <Section id="sobre" ref={sectionRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* ✅ 2. Aplicamos os estilos inline e removemos as classes de animação */}
        <div style={column1Style} className="relative space-y-6 p-4">
          <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
            {orbits.map((orbit) => (
              <div
                key={orbit.id}
                className="orbit"
                style={{
                  width: `${orbit.size}px`,
                  height: `${orbit.size}px`,
                  left: orbit.left,
                  top: orbit.top,
                  animationDuration: `${orbit.duration}s`,
                }}
              />
            ))}
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Por que 360?</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mt-6">
              <p>
                <strong className="text-foreground">Porque o que você faz precisa ser visto. Do jeito certo. Por quem se importa.</strong> A Agência 360 nasceu pra romper com tudo o que é comum.
              </p>
              <p>
                Porque sentimos que o digital precisava de mais alma. Faltava essência, direcionamento, amplitude nas estratégias. Um horizonte que pusesse ser visto de forma clara. Assim nasceu a <strong className="text-primary">Agência Digital 360</strong>, do desejo de unir arte, visão e resultado em um poderosos fluxo criativo.
              </p>
              <p>
                Entregamos soluções com um <strong className="text-foreground">panorama em 360°</strong> alinhando a alma da sua marca com performance, movimento e resultado.
              </p>
              <p className="text-foreground font-semibold">
                Sabemos o que funciona, porque vivemos isso todos os dias. E queremos colocar toda essa experiência a serviço do seu crescimento. Agora.
              </p>
            </div>
          </div>
        </div>
        
        {/* ✅ 3. Aplicamos os estilos inline e removemos as classes de animação */}
        <div style={column2Style} className="relative flex justify-center items-center">
          <img
            src={imagemQuemSomos}
            alt="Astronauta representando a exploração digital da Agência 360"
            className="rounded-lg shadow-2xl w-full max-w-[60rem] object-cover"
          />
          <div className="absolute inset-0 z-10 pointer-events-none">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="cosmic-particle"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  left: particle.left,
                  top: particle.top,
                  animationDuration: `${particle.duration}s`,
                  animationDelay: `${particle.delay}s`,
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </Section>
  )
}