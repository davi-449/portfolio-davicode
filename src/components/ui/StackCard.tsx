import { motion } from 'framer-motion';
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
      className="absolute top-0 left-0 w-full rounded-2xl overflow-hidden shadow-2xl"
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
          ? `0 0 0 1px rgba(124,106,255,0.6), 0 20px 60px rgba(0,0,0,0.6)`
          : isBelow ? `0 0 0 1px rgba(124,106,255,0.1), 0 8px 32px rgba(0,0,0,0.5)` : 'none',
        originY: 0, // Scale from top
      }}
    >
      <div className="aspect-[16/9] w-full bg-surface-2 relative">
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

        {/* Overlay bottom gradient pra leitura da badge */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/90 to-transparent" />

        {/* Badge info at bottom left */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="text-white font-semibold text-sm drop-shadow-md truncate pr-4">
            {project.title}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap bg-surface-2 border border-border text-text-muted">
            {project.category}
          </span>
        </div>

      </div>
    </motion.div>
  );
};
