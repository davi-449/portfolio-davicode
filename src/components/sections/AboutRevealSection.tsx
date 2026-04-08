import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const AboutRevealSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <section ref={targetRef} className="py-48 bg-zinc-950 relative overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        <motion.div 
          style={{ opacity, scale, rotate }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-12 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.5em]">The Philosophy</span>
            <div className="w-12 h-[1px] bg-primary" />
          </div>

          <h2 className="text-[10vw] sm:text-[8vw] font-display font-black text-white uppercase leading-[0.8] mb-12 tracking-tighter">
            Design é<br />
            <span className="text-gradient-cyber">Performance.</span>
          </h2>

          <p className="max-w-3xl text-xl md:text-3xl text-zinc-400 font-sans leading-tight tracking-tight text-balance">
            Eu não crio apenas sites. Eu projeto <span className="text-white">sistemas de conversão de alta precisão</span>. Cada pixel é uma decisão estratégica para guiar o usuário até a ação desejada.
          </p>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              { title: "Arquitetura Clean", desc: "Código modular e escalável usando as melhores práticas de engenharia." },
              { title: "Visual Impact", desc: "Interfaces que param o scroll e impõe autoridade visual imediata." },
              { title: "Data Driven", desc: "Decisões baseadas em métricas de UX e psicologia de conversão." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-8 liquid-glass border-white/5"
              >
                <h4 className="font-display font-black text-white text-xl uppercase mb-4 tracking-tight">{item.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};
