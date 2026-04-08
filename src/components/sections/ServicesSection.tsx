import { motion } from 'framer-motion';
import { Layout, Zap, Smartphone, Search, BarChart, Code2 } from 'lucide-react';
import { MagneticCard } from '../ui/MagneticCard';

const services = [
  {
    title: "Landing Pages",
    desc: "Interfaces de alto impacto visual focadas em conversão imediata.",
    icon: <Layout className="w-6 h-6 text-zinc-200" />,
    size: "lg"
  },
  {
    title: "Aplicações Web",
    desc: "Sistemas robustos com React/Vite e performance extrema.",
    icon: <Zap className="w-6 h-6 text-zinc-200" />,
    size: "sm"
  },
  {
    title: "Design Mobile",
    desc: "Experiências pensadas para a palma da mão.",
    icon: <Smartphone className="w-6 h-6 text-zinc-200" />,
    size: "sm"
  },
  {
    title: "Estratégia UX",
    desc: "Análise comportamental para otimização de funil.",
    icon: <Search className="w-6 h-6 text-zinc-200" />,
    size: "sm"
  },
  {
    title: "Performance",
    desc: "Otimização de Web Vitals e infraestrutura escalável.",
    icon: <BarChart className="w-6 h-6 text-zinc-200" />,
    size: "lg"
  },
  {
    title: "Código Limpo",
    desc: "Manutenibilidade e arquitetura modular de elite.",
    icon: <Code2 className="w-6 h-6 text-zinc-200" />,
    size: "sm"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        <div className="mb-24 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-zinc-800" />
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.5em]">The Capabilities</span>
          </div>
          <h3 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-none">
            Engenharia de<br />
            <span className="text-silver">Resultados.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={service.size === 'lg' ? 'md:col-span-2' : ''}
            >
              <MagneticCard className="h-full">
                <div className="p-10 liquid-glass border-white/5 h-full flex flex-col justify-between group rounded-lg">
                  <div className="mb-12 p-3 w-fit bg-white/[0.03] border border-white/5 rounded-lg group-hover:border-white/20 transition-all duration-500">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-tight">
                      {service.title}
                    </h4>
                    <p className="text-zinc-500 text-base leading-relaxed">{service.desc}</p>
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
