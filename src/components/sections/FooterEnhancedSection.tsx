import { HandDrawnArrow } from '../ui/HandDrawnArrow';
import { Mail, Code2, Briefcase, MessageCircle } from 'lucide-react';

export const FooterEnhancedSection = () => {
  return (
    <footer className="relative w-full bg-background pt-32 lg:pt-48 overflow-hidden z-10" id="contact">
      
      {/* 1. O CTA Flutuante Premium */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="w-full bg-surface-1/50 backdrop-blur-xl border border-accent/20 rounded-[2rem] p-8 md:p-16 flex flex-col items-center justify-center text-center shadow-[0_0_80px_rgba(124,106,255,0.08)] relative">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            O seu projeto,<br /> a nossa <span className="text-accent italic font-light">engenharia</span>.
          </h2>
          <p className="text-text-muted text-lg md:text-xl font-mono mb-10 md:mb-12 opacity-80 tracking-wide">
            Let's build something cinematic.
          </p>

          <a 
            href="mailto:contato@davicode.me" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-background font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
          >
            <Mail className="w-6 h-6" />
            <span>Falar com Davi</span>
          </a>

          {/* Seta Dinâmica */}
          <HandDrawnArrow className="absolute -bottom-16 md:-bottom-24 right-4 md:right-24 w-28 md:w-40 h-28 md:h-40 text-accent rotate-12 drop-shadow-[0_0_15px_rgba(124,106,255,0.5)]" />
        </div>
      </div>

      {/* 2. Links Sociais Minimalistas */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-32 md:mt-48 mb-8 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-8">
        <div className="flex gap-6">
          <a href="https://github.com/davi-449" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-accent hover:bg-accent/10 transition-colors">
            <Code2 className="w-5 h-5" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-accent hover:bg-accent/10 transition-colors">
            <Briefcase className="w-5 h-5" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-accent hover:bg-accent/10 transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
        <div className="font-mono text-xs md:text-sm text-text-muted/50 tracking-[0.2em] uppercase text-center md:text-right">
          © {new Date().getFullYear()} DaviCode.<br className="md:hidden" /> Crafted with passion.
        </div>
      </div>

      {/* 3. Marquee Monstruoso (The Loop) */}
      <div className="absolute bottom-0 left-0 w-full flex whitespace-nowrap overflow-hidden select-none pointer-events-none z-0 mix-blend-screen translate-y-16">
         {/* Primeira faixa */}
         <div className="flex animate-scroll shrink-0">
           <span className="font-display font-bold text-[22vw] leading-none tracking-tighter pr-8 text-transparent opacity-30" style={{ WebkitTextStroke: '2px #7c6aff' }}>
             DaviCode &lt;/&gt;
           </span>
         </div>
         {/* Segunda faixa loop de segurança */}
         <div className="flex animate-scroll shrink-0">
           <span className="font-display font-bold text-[22vw] leading-none tracking-tighter pr-8 text-transparent opacity-30" style={{ WebkitTextStroke: '2px #7c6aff' }}>
             DaviCode &lt;/&gt;
           </span>
         </div>
      </div>
      
    </footer>
  );
};
