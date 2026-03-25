import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ArrowUpRight, Lock, Layers } from 'lucide-react';
import { projects } from '../../data/projects';
import { StackCard } from '../ui/StackCard';

export const StackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const ignoreRef = useRef(false);

  const STICKY_HEIGHT = `${projects.length * 80}vh`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  // Navegar via dot: scroll para a posição correspondente
  const navigateTo = useCallback((index: number) => {
    if (!sectionRef.current) return;
    const section = sectionRef.current;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const targetPct = (index + 0.5) / projects.length;
    const scrollTarget = sectionTop + sectionHeight * targetPct;
    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    setActiveIndex(index);
    ignoreRef.current = true;
    setTimeout(() => {
      ignoreRef.current = false;
    }, 650);
  }, [activeIndex]);

  // Listen to scroll progress
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      if (ignoreRef.current) return;
      const newIndex = latest >= 1
        ? projects.length - 1
        : Math.max(0, Math.min(projects.length - 1, Math.floor(latest * projects.length)));

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    });
  }, [scrollYProgress, activeIndex]);

  const active = projects[activeIndex];

  return (
    <section ref={sectionRef} className="relative w-full bg-background" style={{ height: STICKY_HEIGHT }}>

      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">

        {/* Section label */}
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

          {/* LADO ESQUERDO: INFO PANEL (SEM DOTS) */}
          <div className="w-full flex-shrink-0 z-40 order-2 lg:order-1 flex flex-col justify-center pb-24 lg:pb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
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

                {/* Progress counter */}
                <div className="absolute right-6 top-6 md:right-10 md:top-10 flex gap-1 items-center">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-text-muted/60 font-mono text-xs ml-2">
                    {activeIndex + 1} / {projects.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* LADO DIREITO: DECK DE CARTAS + DOTS */}
          <div className="relative w-full order-1 lg:order-2 flex flex-row items-center gap-4 lg:gap-8 justify-center">
            
            {/* O DECK */}
            <div className="relative w-full max-w-[560px] h-[350px] lg:h-[600px] perspective-1000 flex items-center justify-center">
              <div className="absolute w-full h-[58%] sm:h-[65%] md:h-[75%] lg:h-[400px]">
                {projects.map((project, index) => {
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

            {/* DOTS DIRETOS (Accordions pills verticais) */}
            <div className="hidden lg:flex flex-col gap-2 items-center">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigateTo(i)}
                  className="group relative flex items-center justify-center w-5 h-10"
                  aria-label={`Ir para projeto ${i + 1}`}
                >
                  <motion.div
                    animate={{
                      height: i === activeIndex ? 40 : i === activeIndex - 1 || i === activeIndex + 1 ? 16 : 8,
                      backgroundColor: i === activeIndex ? 'rgba(124, 106, 255, 1)' : 'rgba(124, 106, 255, 0.2)',
                      boxShadow: i === activeIndex ? '0 0 8px rgba(124, 106, 255, 0.7)' : 'none'
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className="w-[4px] rounded-full"
                  />
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Scroll hint */}
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
