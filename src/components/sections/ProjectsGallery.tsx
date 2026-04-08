import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { FilterBar } from '../ui/FilterBar';
import { MagneticCard } from '../ui/MagneticCard';

export const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = useMemo(() => {
    const cats = new Set(projects.map(p => p.category));
    return ['Todos', ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto w-full bg-zinc-950">
      <div className="mb-24 flex flex-col gap-6 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-12 h-[1px] bg-primary" />
          <span className="font-mono text-[10px] text-primary uppercase tracking-[0.5em]">Selected Works</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-maximalist text-6xl md:text-8xl text-white"
        >
          Portfólio de<br />
          <span className="text-gradient-cyber">Impacto.</span>
        </motion.h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mb-20 flex justify-start"
      >
        <FilterBar 
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </motion.div>

      <div className="grid grid-cols-1 gap-16">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticCard className="w-full">
                <ProjectCard project={project} index={index} />
              </MagneticCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
         <div className="py-20 text-center text-zinc-500 font-mono uppercase tracking-widest">
           No signals found in this sector.
         </div>
      )}
    </section>
  );
};
