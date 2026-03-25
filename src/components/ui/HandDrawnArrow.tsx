import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const HandDrawnArrow = ({ className = '' }: { className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <svg 
      ref={ref} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`overflow-visible ${className}`}
    >
      <motion.path
        d="M10 10 C 40 10, 80 40, 90 90" 
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M70 90 L 90 90 L 90 70" 
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
      />
    </svg>
  );
};
