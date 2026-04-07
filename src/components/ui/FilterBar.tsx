import { motion } from 'framer-motion';

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const FilterBar = ({ categories, activeCategory, onSelectCategory }: FilterBarProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
              isActive ? 'text-white' : 'text-text-muted hover:text-white hover:bg-surface-2'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-active"
                className="absolute inset-0 bg-accent rounded-full -z-10"
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              />
            )}
            {cat}
          </button>
        );
      })}
    </div>
  );
};
