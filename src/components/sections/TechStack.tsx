import { motion } from 'framer-motion';

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Framer Motion", icon: "✨" },
  { name: "Vite", icon: "⚡" },
  { name: "Node.js", icon: "🟢" },
  { name: "Supabase", icon: "🔥" },
  { name: "Figma", icon: "🎨" }
];

export const TechStack = () => {
  return (
    <section className="py-24 px-6 bg-surface-1/50 border-y border-white/[0.06] relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold mb-6 text-glow"
        >
          Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-muted text-lg mb-16 max-w-2xl mx-auto"
        >
          Ferramentas modernas que uso diariamente para construir performance extrema e interfaces esteticamente perfeitas.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-surface-2/50 border border-border backdrop-blur-md shadow-lg"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="font-semibold text-white">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
