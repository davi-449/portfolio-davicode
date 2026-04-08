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
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em] group-hover:text-primary transition-colors duration-300">
                {stat.label}
              </div>
              <div className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter group-hover:text-primary-dim transition-colors duration-300">
                {stat.value}
              </div>
              <div className="w-8 h-[2px] bg-primary/20 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
    </section>
  );
};
