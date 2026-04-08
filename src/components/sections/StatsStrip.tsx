import { motion } from 'framer-motion';

const stats = [
  { label: 'Projetos Entregues', value: '150+' },
  { label: 'Clientes Felizes', value: '80+' },
  { label: 'Anos de Exp.', value: '05' },
  { label: 'Conversão Média', value: '25%' },
];

export const StatsStrip = () => {
  return (
    <section className="py-24 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="flex flex-col items-start gap-2 group"
            >
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter group-hover:text-zinc-200 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="w-8 h-[1px] bg-zinc-800 group-hover:w-full group-hover:bg-zinc-400 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
