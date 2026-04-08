import { motion } from 'framer-motion';

export const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-zinc-950 overflow-hidden pointer-events-none">
      {/* Texture Layer */}
      <div className="absolute inset-0 noise-bg mix-blend-overlay opacity-[0.03]" />
      
      {/* Ambient Light Orbs */}
      <motion.div 
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-emerald-500/5 rounded-full blur-[120px]" 
      />
      
      <motion.div 
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[100px]" 
      />

      {/* Grid Overlay sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};
