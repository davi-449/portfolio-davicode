import { motion } from 'framer-motion';
import { AboutTimeline } from '../components/sections/AboutTimeline';
import { TechStack } from '../components/sections/TechStack';
import { StatsStrip } from '../components/sections/StatsStrip';
import { ArrowUpRight, ShieldCheck, Terminal, Cpu } from 'lucide-react';

export const AboutPage = () => {
  return (
    <main className="bg-background min-h-screen">
      <section className="pt-48 pb-32 px-6 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-white/[0.02] z-0" />
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-zinc-800" />
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.5em]">The Architect</span>
            </div>

            <h1 className="text-6xl md:text-[120px] font-display font-bold text-white leading-[0.85] tracking-tighter mb-16 uppercase">
              Davi<br />
              <span className="text-silver">Code.</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div className="space-y-8 text-xl text-zinc-400 font-sans leading-relaxed">
                <p>
                  Especialista em arquitetura de software e engenharia visual. Minha abordagem funde a <span className="text-white">precisão do código Full Stack</span> com a psicologia da conversão de alto escalão.
                </p>
                <p>
                  Através da DaviCode, projeto sistemas que não apenas funcionam, mas dominam o setor através de interfaces imersivas e arquiteturas escaláveis.
                </p>
                
                <div className="pt-8">
                  <a href="https://sgc.gestorpulse.com.br" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm group">
                    Latest Ship: GestorPulse 
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: <Terminal size={20} />, title: "Full Stack Mastery", desc: "Sistemas ERP/CRM complexos de ponta a ponta." },
                  { icon: <Cpu size={20} />, title: "Visual Engineering", desc: "Interfaces fluidas com foco em Web Vitals." },
                  { icon: <ShieldCheck size={20} />, title: "Reliability", desc: "Código limpo, testado e pronto para escala." }
                ].map((item, i) => (
                  <div key={i} className="p-6 liquid-glass border-white/5 rounded-lg flex gap-6 items-start">
                    <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg text-zinc-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white uppercase tracking-tight mb-1">{item.title}</h4>
                      <p className="text-zinc-500 text-sm leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutTimeline />
      <TechStack />
      <StatsStrip />
    </main>
  );
};
