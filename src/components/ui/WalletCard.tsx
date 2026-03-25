import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';

interface WalletCardProps {
  project: Project;
  isActive: boolean;
  index: number;
  onClick: () => void;
}

export const WalletCard = ({ project, isActive, index, onClick }: WalletCardProps) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -4 }}
      style={{
        boxShadow: isActive
          ? `0 0 0 2px ${project.color}, 0 16px 48px ${project.color}44`
          : '0 2px 16px rgba(0,0,0,0.3)',
      }}
      className={`relative w-full rounded-2xl overflow-hidden cursor-pointer transition-opacity duration-300 ${
        isActive ? 'opacity-100' : 'opacity-50 hover:opacity-75'
      }`}
    >
      {/* Screenshot */}
      <div className="aspect-[16/9] bg-surface-2 relative">
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

        {/* Overlay bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Badge info */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="text-white font-semibold text-sm truncate">{project.title}</span>
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
            style={{ backgroundColor: project.color + '33', color: project.color, border: `1px solid ${project.color}66` }}
          >
            {project.category}
          </span>
        </div>

        {/* Active indicator dot */}
        {isActive && (
          <motion.div
            layoutId="active-dot"
            className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: project.color }}
          />
        )}
      </div>
    </motion.div>
  );
};
