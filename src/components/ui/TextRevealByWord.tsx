import { motion, MotionValue, useTransform } from 'framer-motion';

interface TextRevealByWordProps {
  text: string;
  progress: MotionValue<number>;
  className?: string; // Classes passadas para o wrapper (ex: tamanho da fonte, alinhamento)
}

export const TextRevealByWord = ({ text, progress, className = '' }: TextRevealByWordProps) => {
  const words = text.split(' ');

  return (
    <p className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        // Mapeia o progresso do scroll do parent em "fatias" para cada palavra
        const start = i / words.length;
        const end = start + 1 / words.length;
        
        return (
          <Word key={i} progress={progress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  // A opacidade vai de 0.1 a 1 conforme o progress cruza este range
  const opacity = useTransform(progress, range, [0.15, 1]);
  
  return (
    <span className="relative mr-[0.25em] mb-[0.1em] mt-[0.1em]">
      {/* Ghost text (transparente, fundo) */}
      <span className="absolute opacity-20 text-text-muted">{children}</span>
      {/* Texto aceso (branco brilhante) */}
      <motion.span 
        style={{ opacity }} 
        className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] relative z-10"
      >
        {children}
      </motion.span>
    </span>
  );
};
