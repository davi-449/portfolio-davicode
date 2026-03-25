import { Code2, PenTool, Rocket, Zap } from 'lucide-react';
import { StickyCard } from '../ui/StickyCard';

const SERVICES = [
  {
    number: '01',
    title: 'Solide fundamenta.',
    description: 'Começamos arquitetando o banco de dados e as tecnologias core. Sem achismos, apenas engenharia de software aplicada para garantir que seu site suporte milhões de acessos sem pestanejar.',
    icon: <Code2 className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '02',
    title: 'Um projeto sob medida.',
    description: 'Transformamos os objetivos da sua marca em interfaces imersivas (UI/UX). Nenhum template pronto. Apenas design de ponta criado iterativamente com você.',
    icon: <PenTool className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '03',
    title: 'Código que brilha.',
    description: 'Escrevemos React e TypeScript focado não apenas em funcionar, mas em entregar micro-interações e animações dinâmicas que fazem o usuário grudar a tela da mesma forma que gigantes como Apple e Stripe fazem.',
    icon: <Zap className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '04',
    title: 'Entrega para o Futuro.',
    description: 'O lançamento não é o fim. Estruturamos a performance máxima de SEO, análises visuais do comportamento dos seus clientes e hospedagens cloud otimizadas.',
    icon: <Rocket className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  }
];

export const ServicesSection = () => {
  return (
    <section className="relative w-full bg-background/30" id="services">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-64">
        
        {/* Section Header - Agora fixo no topo da seção */}
        <div className="mb-16 md:mb-24 max-w-2xl sticky top-24 z-20 pointer-events-none">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
            A minha oferta,<br />
            <span className="text-accent italic">em key points.</span>
          </h2>
          <p className="text-text-muted text-lg md:text-xl p-4 -ml-4 rounded-2xl bg-background/60 backdrop-blur-md inline-block pointer-events-auto border border-white/5">
            Da fundação crua até o deploy de alta performance, este é o método estruturado para entregar excelência repetitiva.
          </p>
        </div>

        {/* Stacking Cards Container */}
        {/* Usamos flexbox com grande gap e margem extra no final para que todas as cartas possam ter scroll real-estate antes de o rodapé chegar */}
        <div className="relative flex flex-col gap-24 lg:gap-32 w-full pb-[30vh]">
          {SERVICES.map((service, index) => (
            <StickyCard 
              key={index} 
              index={index} 
              {...service} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};
