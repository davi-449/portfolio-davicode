import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../data/projects';

interface StackCardProps {
  project: Project;
  positionOffset: number; // 0 = active, 1 = just below, -1 = already past
}

export const StackCard = ({ project, positionOffset }: StackCardProps) => {
  // Config values based on positionOffset
  const isPast = positionOffset < 0;
  const isActive = positionOffset === 0;
  const isBelow = positionOffset > 0;

  // Extração do domínio
  const domain = project.url
    ? new URL(project.url).hostname
    : 'davicode.me';

  // Calculate transforms
  let translateY = '0px';
  let scale = 1;
  let opacity = 1;

  if (isPast) {
    translateY = '-110%'; // pushed up
    scale = 1;
    opacity = 0;
  } else if (isActive) {
    translateY = '0px';
    scale = 1;
    opacity = 1;
  } else if (isBelow) {
    // Parallax effect for cards stacked below
    const offsetCalc = Math.min(positionOffset, 3); // Max visual depth is 3 cards
    translateY = `${offsetCalc * 24}px`;
    scale = 1 - (offsetCalc * 0.04);
    opacity = positionOffset >= 3 ? 0 : 1 - (offsetCalc * 0.15);
  }

  return (
    <motion.div
      className="absolute top-0 left-0 w-full rounded-2xl overflow-hidden bg-surface-1 shadow-2xl flex flex-col"
      initial={false}
      animate={{
        y: translateY,
        scale,
        opacity,
      }}
      transition={{
        type: 'spring',
        stiffness: isActive ? 220 : 180,
        damping: isActive ? 24 : 28,
        mass: 0.8
      }}
      style={{
        zIndex: 20 - positionOffset, // Active is on top
        boxShadow: isActive
          ? `0 0 0 1px rgba(124,106,255,0.4), 0 20px 60px rgba(0,0,0,0.6)`
          : isBelow ? `0 0 0 1px rgba(124,106,255,0.1), 0 8px 32px rgba(0,0,0,0.5)` : 'none',
        originY: 0, // Scale from top
      }}
    >
      {/* ZONA 1 — URL Bar (estilo macOS Safari) */}
      <div className="flex items-center gap-3 px-4 py-3 bg-surface-2 border-b border-border">
        {/* Traffic lights */}
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        
        {/* URL field */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="w-full max-w-[80%] flex items-center gap-2 bg-background/80 rounded-md px-3 py-1 border border-border/50">
            <span className="text-sm leading-none">{project.favicon}</span>  
            <span className="font-mono text-[11px] md:text-xs text-text-muted truncate flex-1 text-center">
              {domain}
            </span>
            <ExternalLink className="w-3 h-3 text-text-muted/50 flex-shrink-0" />
          </div>
        </div>
        
        {/* Spacer for symmetry with traffic lights */}
        <div className="w-[42px] flex-shrink-0" />
      </div>

      {/* ZONA 2 — Screenshot */}
      <div className="aspect-[16/9] w-full bg-surface-2 relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-muted/30 font-display text-xl">
            {project.title}
          </div>
        )}
      </div>

      {/* ZONA 3 — Metadata Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-surface-2/80">
        <span className="font-semibold text-sm text-white truncate pr-4">
          {project.title}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap bg-surface-1 border border-border text-text-muted">
          {project.category}
        </span>
      </div>
    </motion.div>
  );
};
