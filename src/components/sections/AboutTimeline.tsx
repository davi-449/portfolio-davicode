import { motion } from 'framer-motion';

const experiences = [
  {
    year: "2024 - Presente",
    title: "Especialista em Landing Pages (Freelancer)",
    description: "Desenvolvimento de produtos digitais de alta performance e foco em conversão para mais de 10 negócios locais. Especialização em design premium (glassmorphism, animações fluidas) e arquiteturas modernas (React, TypeScript, Vite)."
  },
  {
    year: "2023 - 2024",
    title: "Desenvolvedor Frontend Sênior",
    description: "Atuação corporativa com foco em Single Page Applications escaláveis. Implementação de Design Systems rigorosos e testes automatizados, melhorando a manutenibilidade do código."
  },
  {
    year: "2021 - 2023",
    title: "Desenvolvedor Fullstack",
    description: "Desenvolvimento end-to-end de soluções web utilizando Node.js no backend e React no frontend. Experiência na otimização de APIs e consultas ao banco de dados."
  }
];

export const AboutTimeline = () => {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold mb-16 text-glow"
        >
          Minha Jornada
        </motion.h2>

        <div className="relative border-l border-border/50 md:ml-6">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="mb-12 ml-6 md:ml-10 relative"
            >
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(124,106,255,0.8)] border-2 border-background" />
              
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-accent border border-accent/20 bg-accent/10 rounded-full">
                {exp.year}
              </span>
              <h3 className="text-2xl font-display font-bold text-white mb-2">{exp.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
