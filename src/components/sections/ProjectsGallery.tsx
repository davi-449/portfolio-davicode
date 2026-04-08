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
    <section className="py-32 px-6 max-w-7xl mx-auto w-full bg-background">
      <div className="mb-24 flex flex-col gap-6 items-start">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[1px] bg-zinc-800" />
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.5em]">Selected Works</span>
        </div>
        
        <h2 className="text-5xl md:text-8xl font-display font-bold text-white leading-none">
          Portfólio de<br />
          <span className="text-silver">Impacto.</span>
        </h2>
      </div>

      <div className="mb-20 flex justify-start">
        <FilterBar 
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </div>

      <div className="grid grid-cols-1 gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
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
         <div className="py-20 text-center text-zinc-600 font-mono text-xs uppercase tracking-widest">
           No projects found in this category.
         </div>
      )}
    </section>
  );
};
