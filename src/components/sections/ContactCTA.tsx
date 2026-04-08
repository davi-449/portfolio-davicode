import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { MagneticCard } from '../ui/MagneticCard';

export const ContactCTA = () => {
  return (
    <section className="py-48 bg-zinc-950 relative overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-12 flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.5em]">The Next Step</span>
            <div className="w-12 h-[1px] bg-primary" />
          </div>

          <h2 className="text-[12vw] sm:text-[10vw] font-display font-black text-white uppercase leading-[0.75] mb-20 tracking-tighter">
            Vamos Criar<br />
            <span className="text-gradient-cyber">o Futuro.</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <a href="https://wa.me/5511956076123" target="_blank" rel="noopener noreferrer">
              <MagneticCard className="w-full sm:w-80">
                <div className="p-12 bg-white text-black font-display font-black text-2xl uppercase flex flex-col items-center gap-6 group">
                  <Phone size={40} className="transition-transform duration-500 group-hover:scale-110" />
                  WhatsApp
                  <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </MagneticCard>
            </a>

            <a href="mailto:contato@davicode.com">
              <MagneticCard className="w-full sm:w-80">
                <div className="p-12 liquid-glass border-white/10 text-white font-display font-black text-2xl uppercase flex flex-col items-center gap-6 group">
                  <Mail size={40} className="transition-transform duration-500 group-hover:scale-110 group-hover:text-primary" />
                  E-mail
                  <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </MagneticCard>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-white/[0.01] select-none pointer-events-none uppercase leading-none">
        Build
      </div>
    </section>
  );
};
