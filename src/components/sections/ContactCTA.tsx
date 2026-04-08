import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { MagneticCard } from '../ui/MagneticCard';

export const ContactCTA = () => {
  return (
    <section className="py-48 bg-zinc-950 relative overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-12 flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-zinc-800" />
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.5em]">The Next Step</span>
            <div className="w-12 h-[1px] bg-zinc-800" />
          </div>

          <h2 className="text-6xl md:text-9xl font-display font-bold text-white uppercase leading-[0.9] mb-20 tracking-tighter">
            Vamos Criar <br />
            <span className="text-silver">o Futuro.</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a href="https://wa.me/5511956076123" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              <MagneticCard>
                <div className="h-20 px-12 bg-white text-black font-display font-bold text-xl uppercase flex items-center justify-center gap-4 rounded-lg group">
                  <Phone size={20} className="transition-transform duration-500 group-hover:scale-110" />
                  WhatsApp
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </MagneticCard>
            </a>

            <a href="mailto:contato@davicode.com" className="w-full md:w-auto">
              <MagneticCard>
                <div className="h-20 px-12 border border-white/10 text-white font-display font-bold text-xl uppercase flex items-center justify-center gap-4 rounded-lg hover:bg-white/5 transition-all duration-500 group">
                  <Mail size={20} className="transition-transform duration-500 group-hover:scale-110" />
                  E-mail
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </MagneticCard>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
