import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

export const ContactCTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Background Blobs Animados */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/2 left-[30%] -translate-y-1/2 w-[400px] h-[400px] rounded-full mix-blend-screen animate-float" 
          style={{ background: 'radial-gradient(ellipse, rgba(124,106,255,0.15), transparent 70%)', filter: 'blur(80px)' }} 
        />
        <div 
          className="absolute top-1/2 right-[30%] -translate-y-1/2 w-[300px] h-[300px] rounded-full mix-blend-screen animate-float" 
          style={{ background: 'radial-gradient(ellipse, rgba(255,107,107,0.1), transparent 70%)', filter: 'blur(60px)', animationDelay: '2s' }} 
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl glass-card rounded-[3rem] p-12 md:p-20 border-accent/20 bg-surface-1/50 backdrop-blur-3xl shadow-2xl"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold tracking-wider text-sm mb-8 uppercase">
          Inicie seu Projeto
        </span>
        
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white text-glow">
          Pronto para liderar o mercado local?
        </h2>
        
        <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Vamos construir juntos uma presença digital de elite. Me conte sobre seu negócio e receba uma proposta personalizada e focada em resultados reais.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://wa.me/5511956076123"

            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-3 px-10 py-5 rounded-full bg-accent text-white font-bold text-lg hover:bg-accent-hover transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(124,106,255,0.4)] hover:shadow-[0_0_50px_rgba(124,106,255,0.6)]"
          >
            <MessageCircle className="w-6 h-6" />
            Chamar no WhatsApp
          </a>

          <a 
            href="mailto:contato@davicode.me"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-3 px-10 py-5 rounded-full bg-surface-2 border border-border text-white font-bold text-lg hover:border-accent hover:bg-surface-2/80 transition-all active:scale-95"
          >
            <Mail className="w-5 h-5 text-text-muted" />
            contato@davicode.me
          </a>
        </div>
      </motion.div>

    </section>
  );
};
