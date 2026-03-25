import { useState } from 'react';
import { Accordion } from '../ui/Accordion';

const FAQS = [
  {
    number: '01',
    title: 'Discovery & Escopo',
    content: 'Tudo começa com uma reunião profunda para alinhar expectativas, KPIs do negócio e viabilidade técnica. Montamos o escopo detalhado antes de qualquer linha de código.'
  },
  {
    number: '02',
    title: 'Design UI/UX & Prototipação',
    content: 'Criação de wireframes e design system moderno no Figma. Revisamos juntos cada detalhe da jornada do usuário para garantir máxima conversão antes do desenvolvimento.'
  },
  {
    number: '03',
    title: 'Desenvolvimento Frontend & Backend',
    content: 'Codificação limpa usando React, TypeScript e Next/Vite. Integrações com banco de dados via Supabase se necessário, priorizando carregamentos em milissegundos e SEO impecável.'
  },
  {
    number: '04',
    title: 'Animações & Micro-interações',
    content: 'A mágica acontece: lapidação fina com Framer Motion. Adicionamos comportamentos que impressionam os visitantes, como efeitos de parallax, reveals e hover states cinematográficos.'
  },
  {
    number: '05',
    title: 'Qualidade QA & Lançamento',
    content: 'Testes de stress, checagem cruzada de responsividade em dezenas de resoluções de tela físicas e entrega. Monitoramento intensivo nos primeiros dias no ar.'
  }
];

export const FaqSection = () => {
  const [openId, setOpenId] = useState<number | null>(0); // Primeiro aberto por padrão

  return (
    <section className="relative w-full bg-background/30" id="process">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-32 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Lado Esquerdo - Headline Fixa */}
        <div className="w-full lg:w-[40%] flex-shrink-0 lg:sticky lg:top-40 h-fit">
          <p className="font-mono text-sm tracking-[0.2em] text-accent uppercase font-bold mb-4">
            Step-by-step
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            O seu projeto,<br />
            sem segredos.
          </h2>
          <p className="text-text-muted text-lg max-w-sm mb-8">
            Transparência total do primeiro ao último passo. Um fluxo validado de ponta a ponta.
          </p>
        </div>

        {/* Lado Direito - Sanfona */}
        <div className="w-full lg:w-[60%] flex flex-col">
          {FAQS.map((faq, index) => (
            <Accordion 
              key={index}
              number={faq.number}
              title={faq.title}
              content={faq.content}
              isOpen={openId === index}
              onToggle={() => setOpenId(openId === index ? null : index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
