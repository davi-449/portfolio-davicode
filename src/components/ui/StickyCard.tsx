import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StickyCardProps {
  index: number;
  
  title: string;
  description: string;
  number: string;
  imageUrl?: string;
  icon: React.ReactNode;
}

export const StickyCard = ({ index, title, description, number, icon }: StickyCardProps) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  
  // Rastreia o progresso do scroll DENTRO do container global das cartas (opcional para diminuir o tamanho)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'] // Anima enquanto sai da tela pra cima
  });

  // Encolhe levemente o card antigo quando o usuário rola pra baixo e o novo entra em cena
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  // Cada card para ("gruda") um pouquinho mais pra baixo que o anterior
  const stickyTop = `calc(10vh + ${index * 40}px)`;

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        position: 'sticky', 
        top: stickyTop,
        scale,
        opacity,
        zIndex: index + 1
      }}
      className="w-full glass-card bg-surface-1/90 backdrop-blur-3xl rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 border border-white/5 shadow-2xl flex flex-col md:flex-row gap-8 lg:gap-16 items-center justify-between overflow-hidden relative"
    >
      {/* Glow radial para dar profundidade premium */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent opacity-20 rounded-full blur-[100px] pointer-events-none" />

      {/* Esquerda: Tipografia e Iconografia */}
      <div className="flex-1 flex flex-col justify-start relative z-10">
        <div className="flex items-center gap-6 mb-8 md:mb-12">
          <span className="font-mono text-5xl md:text-7xl font-bold text-white/5">{number}</span>
          <div className="w-16 h-16 rounded-2xl bg-surface-2 border border-white/10 flex items-center justify-center text-accent shadow-lg">
            {icon}
          </div>
        </div>
        <h3 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-xl">
          {title}
        </h3>
        <p className="text-text-muted text-base md:text-xl leading-relaxed max-w-md">
          {description}
        </p>
      </div>

      {/* Direita: Abstração / Imagem / Decorativo */}
      <div className="hidden lg:flex flex-shrink-0 w-[40%] aspect-square max-w-[400px] rounded-3xl bg-surface-2 border border-white/10 items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50" />
        {/* Placeholder abstrato premium usando gradients */}
        <div className="w-3/4 h-3/4 rounded-2xl bg-gradient-to-tr from-accent to-[#5c4ae0] flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
           <div className="w-1/2 h-1/2 rounded-full border-4 border-white/20 blur-[1px]" />
        </div>
      </div>
    </motion.div>
  );
};
