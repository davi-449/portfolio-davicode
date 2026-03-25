import { motion } from 'framer-motion';
import { ArrowRight, Code, Code2, Globe, Star, Zap } from 'lucide-react';
import { ParticleBackground } from '../ui/ParticleBackground';

export const HeroSection = () => {
  return (
    <section className="section-hero relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Canvas de partículas — apenas no Hero */}
      <ParticleBackground />

      {/* Background Blobs Animados */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div 
          className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full mix-blend-screen animate-float" 
          style={{ background: 'radial-gradient(ellipse, rgba(124,106,255,0.22), transparent 70%)', filter: 'blur(80px)' }} 
        />
        <div 
          className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] rounded-full mix-blend-screen animate-float" 
          style={{ background: 'radial-gradient(ellipse, rgba(100,80,255,0.15), transparent 70%)', filter: 'blur(60px)', animationDelay: '2s' }} 
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-8 bg-surface-1/80 backdrop-blur-md px-4 py-2 rounded-full border border-border"
        >
          <Code className="w-4 h-4 text-accent" />
          <span className="font-mono text-sm text-text-muted">
            // criador de experiências digitais
          </span>
        </motion.div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-white text-glow">
          Davi
          <span className="text-gradient ml-1">Code</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-text-muted max-w-2xl mb-12"
        >
          Engenharia de Frontend focada em conversão. Transformando negócios locais com Landing Pages imersivas e arquitetura de elite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full bg-white text-background font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            Ver Portfólio <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/5511999999999" // Substituir pelo oficial
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-surface-1 border border-border text-white font-bold text-lg hover:border-accent transition-colors"
          >
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex items-center gap-6 text-text-muted"
        >
          <div className="p-3 bg-surface-2/50 backdrop-blur border border-border rounded-xl hover:scale-110 hover:text-accent transition-all cursor-pointer">
            <Code2 className="w-6 h-6" />
          </div>
          <div className="p-3 bg-surface-2/50 backdrop-blur border border-border rounded-xl hover:scale-110 hover:text-accent transition-all cursor-pointer">
            <Zap className="w-6 h-6" />
          </div>
          <div className="p-3 bg-surface-2/50 backdrop-blur border border-border rounded-xl hover:scale-110 hover:text-accent transition-all cursor-pointer">
            <Globe className="w-6 h-6" />
          </div>
          <div className="p-3 bg-surface-2/50 backdrop-blur border border-border rounded-xl hover:scale-110 hover:text-accent transition-all cursor-pointer">
            <Star className="w-6 h-6" />
          </div>
        </motion.div>

        {/* Métricas / Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/50 pt-10 w-full max-w-4xl"
        >
          {[
            { value: "10+", label: "Projetos Entregues" },
            { value: "5.0", label: "Estrelas Média" },
            { value: "Ultra", label: "Baixo Tempo de Carregamento" },
            { value: "Mobile", label: "First Architecture" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-display text-3xl font-bold text-white mb-1">{stat.value}</span>
              <span className="text-sm text-text-muted font-mono uppercase tracking-wider text-center">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
