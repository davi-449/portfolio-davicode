import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const ContactCTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Glow gigantesco de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-accent/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl glass-card rounded-[3rem] p-12 md:p-20 border-accent/30"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-surface-2 border border-accent/20 text-accent font-bold tracking-wider text-sm mb-8 uppercase">
          Inicie seu Projeto
        </span>
        
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Pronto para liderar o seu mercado local?
        </h2>
        
        <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
          Vamos construir juntos uma presença digital de elite. Me conte sobre seu negócio e receba uma proposta personalizada e focada em resultados reais.
        </p>

        <a 
          href="https://wa.me/5511999999999" // Substituir
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-accent text-white font-bold text-xl hover:bg-accent-hover transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(124,106,255,0.4)]"
        >
          <MessageCircle className="w-6 h-6" />
          Chamar no WhatsApp
        </a>
      </motion.div>

    </section>
  );
};
