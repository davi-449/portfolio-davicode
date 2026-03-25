import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { TextRevealByWord } from '../ui/TextRevealByWord';
import { Sparkles } from 'lucide-react';

export const AboutRevealSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Monitora o progresso do scroll do usuário cruzando este contêiner de 200vh
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="relative w-full bg-transparent z-10" // transparente para enxergar as estrelas
      style={{ height: '200vh' }} 
    >
      {/* Container Sticky que prende o conteúdo no centro da tela enquanto o scroll ocorre */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center">
          
          <div className="flex items-center gap-4 mb-8 md:mb-12 opacity-80">
            <span className="w-12 md:w-20 h-[1px] bg-accent" />
            <span className="text-accent tracking-[0.2em] text-xs md:text-sm font-bold uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 " /> Sublime Philosophy
            </span>
          </div>

          <TextRevealByWord 
            progress={scrollYProgress}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[5.5rem] text-white leading-[1.15] md:leading-[1.1] tracking-tight max-w-[95%]"
            text="Transformo a complexidade digital em uma experiência puramente fluida. Programar não é apenas sobre digitar linhas de código, é sobre arquitetar soluções duradouras que conectam o design moderno à engenharia impecável. A alta performance não é um bônus, é a minha fundação."
          />
        </div>
      </div>
    </section>
  );
};
