import { motion } from 'framer-motion';
import { Layout, Zap, Smartphone, Search, BarChart, Code2 } from 'lucide-react';
import { MagneticCard } from '../ui/MagneticCard';

const services = [
  {
    title: "Landing Pages Imersivas",
    desc: "Desenvolvimento focado em conversão com estética 2026.",
    icon: <Layout className="w-8 h-8 text-primary" />,
    size: "lg"
  },
  {
    title: "High Performance Apps",
    desc: "Aplicações React/Vite com velocidade extrema.",
    icon: <Zap className="w-8 h-8 text-primary" />,
    size: "sm"
  },
  {
    title: "Mobile First Design",
    desc: "Interfaces pensadas para a palma da mão.",
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    size: "sm"
  },
  {
    title: "UX Strategy & SEO",
    desc: "Estratégia completa de posicionamento digital.",
    icon: <Search className="w-8 h-8 text-primary" />,
    size: "sm"
  },
  {
    title: "Conversion Engineering",
    desc: "Análise de métricas e otimização de funil.",
    icon: <BarChart className="w-8 h-8 text-primary" />,
    size: "lg"
  },
  {
    title: "Clean Code Audit",
    desc: "Refatoração e melhoria de sistemas legados.",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    size: "sm"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        <div className="mb-24 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-primary" />
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.5em]">The Capabilities</span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-maximalist text-6xl md:text-8xl text-white"
          >
            Engenharia de<br />
            <span className="text-gradient-cyber">Resultados.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className={service.size === 'lg' ? 'md:col-span-2' : ''}
            >
              <MagneticCard className="h-full">
                <div className="p-12 liquid-glass border-white/5 h-full flex flex-col justify-between group cursor-crosshair">
                  <div className="mb-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-3xl font-display font-black text-white mb-4 uppercase tracking-tighter group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-zinc-500 text-lg leading-snug">{service.desc}</p>
                  </div>
                </div>
              </MagneticCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
