import { motion } from 'framer-motion';

export const StatsStrip = () => {
  return (
    <section className="py-12 bg-surface-1/50 border-t border-b border-white/[0.06] relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "11+", label: "Projetos Entregues" },
            { value: "5.0", label: "Estrelas Média" },
            { value: "5", label: "Segmentos" },
            { value: "Mobile", label: "First Approach" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-display text-3xl font-bold text-white mb-1">{stat.value}</span>
              <span className="text-sm text-text-muted font-mono uppercase tracking-wider text-center">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
