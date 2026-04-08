import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col md:flex-row gap-12 items-center p-8 md:p-12 liquid-glass border-white/5 rounded-lg overflow-hidden transition-all duration-700 hover:border-white/10">
      
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[140%] bg-white/[0.02] rotate-[25deg] blur-3xl" />
      </div>

      {/* Image Side */}
      <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden relative z-10 border border-white/5 group-hover:border-white/10 transition-colors duration-500">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 to-transparent opacity-60" />
        
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-white text-black text-[9px] font-mono font-black uppercase tracking-[0.2em] rounded-sm z-20">
            Featured System
          </div>
        )}
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 flex flex-col items-start relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em]">{project.category}</span>
          <div className="w-8 h-[1px] bg-zinc-800" />
          <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.3em]">0{index + 1}</span>
        </div>

        <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight leading-none group-hover:text-zinc-200 transition-colors duration-500">
          {project.title}
        </h3>

        <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 border border-white/5 bg-white/[0.02] text-zinc-500 font-mono text-[10px] uppercase tracking-wider rounded-md group-hover:border-white/10 group-hover:text-zinc-300 transition-all duration-500">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group/btn"
          >
            Live Preview 
            <ExternalLink size={16} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest"
          >
            Case Study <span className="text-[10px] font-mono text-zinc-700">/_</span>
          </a>
        </div>
      </div>
    </div>
  );
};
