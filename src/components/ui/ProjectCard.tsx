import { motion } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';
import type { Project } from '../../data/projects';

export const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative w-full glass-card rounded-3xl overflow-hidden group flex flex-col md:flex-row ${
        !isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Faixa lateral de cor da marca */}
      <div 
        className="absolute top-0 bottom-0 w-2 opacity-50 transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: project.color, [isEven ? 'left' : 'right']: 0 }}
      />

      {/* Conteúdo Textual */}
      <div className={`flex flex-col flex-1 p-8 md:p-12 z-10 ${isEven ? 'pl-10' : 'pr-10'}`}>
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-2xl font-bold opacity-30">{project.id}</span>
          <span 
            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-2 border border-border"
            style={{ color: project.color }}
          >
            {project.category}
          </span>
        </div>

        <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-glow">
          {project.title}
        </h3>
        
        <p className="text-text-muted text-lg mb-8 max-w-xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-surface-2/50 rounded-md text-sm text-text-muted border border-border">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          {project.url ? (
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold transition-all group/btn"
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
      </div>

      {/* Mockup area */}
      <div className="w-full md:w-[45%] bg-surface-2/30 relative overflow-hidden flex items-center justify-center p-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl relative z-10 bg-surface-1 transform transition-transform duration-700 group-hover:scale-[1.02]">
           {/* Fallback pattern se não houver asset pronto */}
           <div className="absolute inset-0 bg-surface-2 flex items-center justify-center text-text-muted/30 font-display text-2xl font-bold">
             Screenshot
           </div>
           {/* Imagem real do mockup */}
           {project.image && (
             <img
               src={project.image}
               alt={`Preview ${project.title}`}
               className="absolute inset-0 w-full h-full object-cover object-top"
             />
           )}
        </div>
        
        {/* Glow de fundo da imagem baseado na cor do projeto */}
        <div 
          className="absolute -inset-10 opacity-20 blur-[80px] rounded-full transition-opacity duration-700 group-hover:opacity-40"
          style={{ backgroundColor: project.color }}
        />
      </div>

    </motion.div>
  );
};
