import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const SilverHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background">
      {/* Subtle Background Noise */}
      <div className="absolute inset-0 noise-bg z-0" />
      
      {/* Minimalist Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-white/[0.03] rounded-full blur-[120px] z-0" />

      <div className="container relative z-10 px-6 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.3em]">Engineering Digital Excellence</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tight mb-8 leading-[1.1]">
            Transformando visão em <br />
            <span className="text-silver">precisão técnica.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Desenvolvedor Fullstack focado em interfaces de alto escalão e sistemas de conversão de alta performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="h-14 px-10 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2 group">
              Explorar Projetos
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="h-14 px-10 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300">
              Agendar Call
            </button>
          </div>
        </motion.div>
      </div>

      {/* Social Footer Strip */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 flex justify-between items-center text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em] z-10">
        <div className="hidden sm:block">Scroll to explore</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Github</a>
          <a href="#" className="hover:text-white transition-colors">Linkedin</a>
        </div>
      </div>
    </section>
  );
};
