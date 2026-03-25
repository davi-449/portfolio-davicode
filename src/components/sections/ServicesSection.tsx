import { Code2, PenTool, Rocket, Zap } from 'lucide-react';
import { StickyCard } from '../ui/StickyCard';

const SERVICES = [
  {
    number: '01',
    title: 'Solide fundamenta.',
    description: 'Começamos arquitetando o banco de dados e as tecnologias core. Sem achismos, apenas engenharia de software aplicada para garantir que seu site suporte milhões de acessos sem pestanejar.',
    icon: <Code2 className="w-8 h-8" />
  },
  {
    number: '02',
    title: 'Um projeto sob medida.',
    description: 'Transformamos os objetivos da sua marca em interfaces imersivas (UI/UX). Nenhum template pronto. Apenas design de ponta criado iterativamente com você.',
    icon: <PenTool className="w-8 h-8" />
  },
  {
    number: '03',
    title: 'Código que brilha.',
    description: 'Escrevemos React e TypeScript focado não apenas em funcionar, mas em entregar micro-interações e animações dinâmicas que fazem o usuário grudar a tela da mesma forma que gigantes como Apple e Stripe fazem.',
    icon: <Zap className="w-8 h-8" />
  },
  {
    number: '04',
    title: 'Entrega para o Futuro.',
    description: 'O lançamento não é o fim. Estruturamos a performance máxima de SEO, análises visuais do comportamento dos seus clientes e hospedagens cloud otimizadas.',
    icon: <Rocket className="w-8 h-8" />
  }
];

export const ServicesSection = () => {
  return (
    <section className="relative w-full bg-background" id="services">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-64">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-40 max-w-2xl">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            A minha oferta,<br />
            <span className="text-accent italic">em key points.</span>
          </h2>
          <p className="text-text-muted text-lg md:text-xl">
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
