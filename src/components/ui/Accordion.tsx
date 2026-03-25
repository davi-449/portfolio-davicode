import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
  number: string;
}

export const Accordion = ({ title, content, isOpen, onToggle, number }: AccordionProps) => {
  return (
    <div className="border-b border-white/10 overflow-hidden">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
      >
        <div className="flex items-center gap-4 md:gap-8">
          <span className="font-mono text-sm md:text-base text-accent/80 font-bold">{number}</span>
          <h4 className="font-display text-xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
            {title}
          </h4>
        </div>
        <motion.div 
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-10 h-10 rounded-full border border-white/10 flex flex-shrink-0 items-center justify-center text-text-muted group-hover:border-accent group-hover:text-accent transition-colors duration-300"
        >
          <Plus className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pb-8 pl-[3.5rem] md:pl-[4.5rem] text-text-muted text-base md:text-lg leading-relaxed max-w-3xl">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
