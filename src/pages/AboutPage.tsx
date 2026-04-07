import { motion } from 'framer-motion';
import { AboutTimeline } from '../components/sections/AboutTimeline';
import { TechStack } from '../components/sections/TechStack';
import { StatsStrip } from '../components/sections/StatsStrip';

export const AboutPage = () => {
  return (
    <>
      <section className="pt-32 pb-20 px-6 relative z-10 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl md:text-7xl font-bold mb-8 text-glow"
        >
          Sobre mim
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6 text-lg md:text-xl text-text-muted leading-relaxed"
        >
          <p>
            Olá! Sou Davi, o criador por trás da DaviCode. 
          </p>
          <p>
            Minha missão é transformar a presença online de negócios locais em experiências premium e conversivas. 
            Não apenas construo sites; crio Landing Pages imersivas que transmitem credibilidade instantânea, 
            usando arquiteturas modernas e um design focado na conversão real (No-Code mindset com código de elite).
          </p>
        </motion.div>
      </section>

      <AboutTimeline />
      <TechStack />
      <StatsStrip />
    </>
  );
};
