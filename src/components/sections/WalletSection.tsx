import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowUpRight, Lock, Layers } from 'lucide-react';
import { projects } from '../../data/projects';
import { WalletCard } from '../ui/WalletCard';

// Helper to trigger activeIndex change when a card enters viewport
const CardScrollWatcher = ({ index, onVisible }: { index: number; onVisible: (i: number) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-35% 0px -35% 0px' });

  if (isInView) onVisible(index);
  return <div ref={ref} className="absolute inset-0 pointer-events-none" />;
};

export const WalletSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface-2 mb-6 text-sm font-mono text-text-muted"
        >
          <Layers className="w-3.5 h-3.5" />
          {projects.length} projetos entregues
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-bold mb-4"
        >
          Cada projeto,
          <span className="text-gradient"> uma história.</span>
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Desktop: 2-col sticky+scroll */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">

          {/* Sticky Info Panel */}
          <div className="sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl p-10 flex flex-col gap-6"
                style={{ borderColor: active.color + '44' }}
              >
                {/* Number + category */}
                <div className="flex items-center gap-4">
                  <span className="font-mono text-5xl font-bold opacity-20">{active.id}</span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: active.color + '22', color: active.color, border: `1px solid ${active.color}55` }}
                  >
                    {active.category}
                  </span>
                </div>

                <h3 className="font-display text-4xl font-bold leading-tight">{active.title}</h3>
                <p className="text-text-muted text-lg leading-relaxed">{active.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {active.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface-2/50 rounded-md text-sm text-text-muted border border-border">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-2">
                  {active.url ? (
                    <a
                      href={active.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all group/btn text-white"
                      style={{ backgroundColor: active.color }}
                    >
                      Ver Projeto
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-2 text-text-muted font-medium cursor-not-allowed border border-border">
                      <Lock className="w-4 h-4" />
                      Demo Privada
                    </div>
                  )}
                </div>

                {/* Progress dots */}
                <div className="flex gap-1.5 pt-2">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className="h-1.5 rounded-full transition-all duration-300"
                      style={{
                        width: i === activeIndex ? '24px' : '6px',
                        backgroundColor: i === activeIndex ? active.color : '#ffffff22',
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Scrollable Cards Column */}
          <div className="flex flex-col gap-5">
            {projects.map((project, i) => (
              <div key={project.id} className="relative">
                <CardScrollWatcher index={i} onVisible={setActiveIndex} />
                <WalletCard
                  project={project}
                  isActive={activeIndex === i}
                  index={i}
                  onClick={() => setActiveIndex(i)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical stack */}
        <div className="flex flex-col gap-4 lg:hidden">
          {projects.map((project, i) => (
            <div key={project.id}>
              <WalletCard
                project={project}
                isActive={activeIndex === i}
                index={i}
                onClick={() => setActiveIndex(i === activeIndex ? -1 : i)}
              />
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="glass-card rounded-b-2xl p-6 -mt-2 border-t-0 flex flex-col gap-4" style={{ borderColor: project.color + '44' }}>
                      <p className="text-text-muted">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-surface-2/50 rounded-md text-xs text-text-muted border border-border">{tag}</span>
                        ))}
                      </div>
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white text-sm"
                          style={{ backgroundColor: project.color }}
                        >
                          Ver Projeto <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-2 text-text-muted text-sm border border-border">
                          <Lock className="w-4 h-4" /> Demo Privada
                        </span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
