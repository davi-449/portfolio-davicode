import { motion } from 'framer-motion';
import { Smartphone, Zap, Search, Clock, MapPin, MessageCircle } from 'lucide-react';

const features = [
  { icon: Smartphone, title: 'Mobile First', desc: 'Design pensado primariamente para conversão via celular.' },
  { icon: Search, title: 'SEO Nativo', desc: 'Tags otimizadas (schema.org) prontas para o Google.' },
  { icon: Zap, title: 'Performance', desc: 'Carregamento instantâneo via Vite & código minificado.' },
  { icon: MessageCircle, title: 'Integração WA', desc: 'Chat direto pro WhatsApp com textos pré-prontos.' },
  { icon: MapPin, title: 'Google Maps UI', desc: 'Embarcado inteligentemente preservando tipologia dark/light.' },
  { icon: Clock, title: 'Entrega Fast', desc: 'Desenvolvimento recorde com base no Vibe System.' },
];

export const FeaturesStrip = () => {
  return (
    <section className="py-24 bg-surface-1 border-y border-border px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">O Diferencial <span className="text-accent">DaviCode</span></h2>
          <p className="text-text-muted text-lg">A anatomia de projetos que convertem diariamente.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1, duration: 0.5 }}
                 className="p-8 rounded-2xl bg-surface-2 border border-border group hover:border-accent transition-colors"
               >
                 <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <Icon className="w-6 h-6 text-accent" />
                 </div>
                 <h3 className="font-bold text-xl mb-3">{feat.title}</h3>
                 <p className="text-text-muted">{feat.desc}</p>
               </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
