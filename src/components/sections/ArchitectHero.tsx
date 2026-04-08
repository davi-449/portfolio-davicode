import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export const ArchitectHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["-0.08em", "0.2em"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-zinc-950 overflow-hidden">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center p-6">
        
        {/* Noise & Ambient Light */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 noise-bg mix-blend-overlay" />
          <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-emerald-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        {/* Status Line */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-12 left-12 flex items-center gap-4 z-20"
        >
          <div className="w-12 h-[1px] bg-primary/50" />
          <span className="font-mono text-[10px] text-zinc-500 tracking-[0.5em] uppercase">Status: Architecting 2026</span>
        </motion.div>

        {/* Social Bar */}
        <div className="absolute top-12 right-12 flex flex-col gap-6 z-20">
          {[
            { icon: <Github size={18} />, href: "https://github.com/davi-449" },
            { icon: <Linkedin size={18} />, href: "https://linkedin.com" },
            { icon: <Mail size={18} />, href: "mailto:contato@davicode.com" }
          ].map((item, i) => (
            <motion.a 
              key={i}
              href={item.href}
              target="_blank"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="text-zinc-600 hover:text-primary transition-colors duration-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Kinetic Headline */}
        <motion.div style={{ opacity, scale }} className="relative z-10 text-center select-none">
          <motion.h1 
            style={{ letterSpacing }}
            className="text-[18vw] sm:text-[15vw] leading-[0.75] font-display font-black text-white uppercase"
          >
            Davi<br />
            <span className="text-gradient-cyber">Code.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <p className="font-mono text-zinc-500 text-sm tracking-[0.2em] uppercase">
              Fullstack Engineer & Visual Designer
            </p>
            <div className="w-[2px] h-24 bg-linear-to-b from-primary to-transparent" />
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <button className="group relative px-8 py-4 bg-white text-black font-display font-black text-xl uppercase overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              View Work <ArrowUpRight size={20} className="transition-transform group-hover:rotate-45" />
            </span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
