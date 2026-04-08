import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const AboutRevealSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <section ref={targetRef} className="py-48 bg-zinc-950 relative overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        <motion.div 
          style={{ opacity, scale }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-12 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-zinc-800" />
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.5em]">The Philosophy</span>
            <div className="w-12 h-[1px] bg-zinc-800" />
          </div>

          <h2 className="text-5xl md:text-8xl font-display font-bold text-white uppercase leading-[1.1] mb-12 tracking-tight">
            Design é <br />
            <span className="text-silver">Performance.</span>
          </h2>

          <p className="max-w-3xl text-xl md:text-2xl text-zinc-400 font-sans leading-relaxed text-balance">
            Eu projeto sistemas de conversão de alta precisão. Cada pixel é uma decisão estratégica para guiar o usuário até a ação desejada, unindo <span className="text-white">estética minimalista e engenharia robusta</span>.
          </p>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Arquitetura Clean", desc: "Código modular e escalável usando as melhores práticas de engenharia moderna." },
              { title: "Visual Impact", desc: "Interfaces que transmitem autoridade imediata através do silêncio visual." },
              { title: "Data Driven", desc: "Decisões baseadas em métricas reais de UX e psicologia cognitiva." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-10 liquid-glass border-white/5 rounded-lg"
              >
                <h4 className="font-display font-bold text-white text-xl uppercase mb-4 tracking-tight">{item.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
