import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Smartphone, Zap, Search, MessageCircle } from 'lucide-react';

const AnimatedCounter = ({ from, to }: { from: number; to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2, ease: "easeOut" });
    }
  }, [inView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const features = [
  { icon: Smartphone, title: 'Mobile First', desc: 'Layouts 100% pensados para celular.', stat: 100, suffix: '%' },
  { icon: Search, title: 'SEO Nativo', desc: 'Busca orgânica maximizada.', stat: 99, suffix: ' score' },
  { icon: Zap, title: 'Performance', desc: 'Milissegundos de carregamento.', stat: 200, suffix: 'ms' },
  { icon: MessageCircle, title: 'Conversão', desc: 'Cliques diretos para seu WhatsApp.', stat: 5, suffix: 'x +' },
];

export const FeaturesStrip = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden px-6">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-white">Anatomia de <span className="text-gradient">Alta Conversão</span></h2>
          <p className="text-text-muted text-lg">O diferencial DaviCode embutido em cada pixel.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, scale: 0.95, y: 20 }}
                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1, duration: 0.5 }}
                 className="glass-card rounded-2xl p-6 group hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
               >
                 <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                   <Icon className="w-6 h-6 text-accent" />
                 </div>

                 <div className="font-mono text-3xl font-bold text-white mb-2 flex items-baseline gap-1">
                   {feat.stat === 100 || feat.stat === 99 || feat.stat === 200 || feat.stat === 5 ? (
                     <AnimatedCounter from={0} to={feat.stat} />
                   ) : (
                     feat.stat
                   )}
                   <span className="text-sm text-accent opacity-80">{feat.suffix}</span>
                 </div>

                 <h3 className="font-bold text-lg mb-2 text-white">{feat.title}</h3>
                 <p className="text-text-muted text-sm leading-relaxed">{feat.desc}</p>
               </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
