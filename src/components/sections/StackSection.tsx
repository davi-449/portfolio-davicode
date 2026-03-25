import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ArrowUpRight, Lock, Layers } from 'lucide-react';
import { projects } from '../../data/projects';
import { StackCard } from '../ui/StackCard';

export const StackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // We need plenty of scroll room. Let's make it 80vh per card
  // The first card is active immediately, the others take 80vh each to scroll into view
  const STICKY_HEIGHT = `${(projects.length) * 80}vh`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  // Convert raw 0-1 progress into an active index from 0 to projects.length - 1
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      if (latest === 1) {
        setActiveIndex(projects.length - 1);
        return;
      }
      
      const newIndex = Math.floor(latest * projects.length);
      // Ensure bounds
      if (newIndex >= 0 && newIndex < projects.length) {
        setActiveIndex(newIndex);
      }
    });
  }, [scrollYProgress]);

  const active = projects[activeIndex];

  return (
    <section ref={sectionRef} className="relative w-full bg-background" style={{ height: STICKY_HEIGHT }}>
      
      {/* Container fixo (sticky) que segura a UI enquanto a tela desce */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Section header flutuante / opcional, centralizado no topo */}
        <div className="absolute top-12 md:top-24 inset-x-0 w-full text-center z-50 pointer-events-none px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface-2 mb-4 text-xs font-mono text-text-muted backdrop-blur-md"
          >
            <Layers className="w-3.5 h-3.5" />
            Empilhados com precisão
          </motion.div>
        </div>

        <div className="max-w-6xl w-full mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 pt-24 lg:pt-0 h-full max-h-[900px]">
          
          {/* LADO ESQUERDO: INFO PANEL */}
          <div className="w-full flex-shrink-0 z-40 order-2 lg:order-1 flex flex-col justify-center pb-24 lg:pb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -24, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl p-8 md:p-10 flex flex-col gap-5 md:gap-6 backdrop-blur-xl shadow-2xl relative border border-accent/20 bg-surface-1/80"
              >
                {/* Number + category */}
                <div className="flex items-center gap-4">
                  <span className="font-mono text-4xl md:text-5xl font-bold opacity-10 text-white">{active.id}</span>
                  <span className="px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                    {active.category}
                  </span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight text-white">{active.title}</h3>
                <p className="text-text-muted text-base md:text-lg leading-relaxed line-clamp-3 md:line-clamp-none">{active.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {active.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface-2/70 rounded-md text-xs md:text-sm text-text-muted border border-border">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-2 md:mt-4">
                  {active.url ? (
                    <a
                      href={active.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all group/btn text-white text-sm md:text-base bg-accent hover:bg-accent-hover hover:scale-[1.02] shadow-[0_0_20px_rgba(124,106,255,0.3)] hover:shadow-[0_0_30px_rgba(124,106,255,0.5)]"
                    >
                      Ver Projeto
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-2 text-text-muted font-medium cursor-not-allowed border border-border text-sm md:text-base">
                      <Lock className="w-4 h-4" />
                      Demo Privada
                    </div>
                  )}
                </div>

                {/* Progress indicador visível */}
                <div className="absolute right-6 top-6 md:right-10 md:top-10 flex gap-1 items-center">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-text-muted/60 font-mono text-xs ml-2">
                    {activeIndex + 1} / {projects.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* LADO DIREITO: DECK DE CARTAS */}
          <div className="relative w-full h-[350px] lg:h-[600px] perspective-1000 order-1 lg:order-2 flex items-center justify-center">
            <div className="absolute w-full max-w-[500px] mx-auto aspect-[16/9]">
              {projects.map((project, index) => {
                // Cálculo de posição relativa da carta
                const positionOffset = index - activeIndex;

                return (
                  <StackCard
                    key={project.id}
                    project={project}
                    positionOffset={positionOffset}
                  />
                );
              })}
            </div>
          </div>

        </div>
        
        {/* Scroll indicator - some minimal UI to show "scroll down" */}
        <motion.div 
          className="absolute bottom-8 inset-x-0 w-full flex justify-center text-text-muted/50 text-xs tracking-widest uppercase font-mono z-50 pointer-events-none"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll para explorar
        </motion.div>
      </div>
    </section>
  );
};
