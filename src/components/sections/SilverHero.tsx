import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const SilverHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background font-sans">
      {/* Mesh Gradient Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[100vw] h-[100vh] opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle at 20% 30%, white 0%, transparent 50%), radial-gradient(circle at 80% 70%, #71717a 0%, transparent 50%)',
            filter: 'blur(100px)'
          }}
        />
        <div className="absolute inset-0 noise-bg opacity-[0.015]" />
      </div>
      
      {/* Geometric Accents */}
      <div className="absolute top-0 left-0 w-full h-full border-x border-white/[0.02] max-w-7xl left-1/2 -translate-x-1/2 z-0" />

      <div className="container relative z-10 px-6 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 mb-10">
            <span className="flex h-1.5 w-1.5 rounded-full bg-zinc-500 animate-pulse" />
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-[0.4em]">Available for high-stakes projects</span>
          </div>

          <h1 className="text-6xl md:text-[100px] font-display font-bold text-white tracking-tight mb-8 leading-[0.95]">
            Engineering<br />
            <span className="text-silver">Digital Precision.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-14 leading-relaxed font-sans font-medium">
            Desenvolvedor Fullstack especializado em arquiteturas de alta conversão e interfaces que definem o padrão da indústria.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="h-16 px-12 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-all duration-500 flex items-center gap-3 group shadow-2xl shadow-white/5">
              Explorar Portfolio
              <ArrowUpRight size={20} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <button className="h-16 px-12 border border-white/10 text-white font-bold rounded-lg hover:bg-white/[0.03] transition-all duration-500">
              Start a Project
            </button>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Metadata */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-10 flex justify-between items-end text-[10px] font-mono text-zinc-600 uppercase tracking-[0.5em] z-10 select-none">
        <div className="flex flex-col gap-2">
          <span>LAT: -23.6822</span>
          <span>LNG: -46.6203</span>
        </div>
        <div className="hidden sm:block">Built with Precision © 2026</div>
        <div className="flex flex-col items-end gap-2">
          <a href="#" className="hover:text-white transition-colors">Github_</a>
          <a href="#" className="hover:text-white transition-colors">Linkedin_</a>
        </div>
      </div>
    </section>
  );
};
