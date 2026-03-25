# Spec 007 - Tarefas de Implementação (Full Scope)

### Fase 1: Atualizações e Micro-interações
- [ ] Adicionar efeito "Image Zoom in no Hover" aos `<StackCard>` no `StackSection.tsx`.
- [ ] Identificar e reforçar glow nos botões principais (`box-shadow` e animações de escala).

### Fase 2: Componentes Core - Scroll Reveal
- [ ] Construir arquivo auxiliar utilitário de animação: `src/components/ui/TextRevealByWord.tsx`.
- [ ] Criar a seção envolvente: `src/components/sections/AboutRevealSection.tsx`.
- [ ] Validar tracking matemático atrelado ao scrollY `useScroll`.

### Fase 3: Componentes Core - Stacking Services
- [ ] Criar arquivo utilitário de estilo: `src/components/ui/StickyCard.tsx`.
- [ ] Criar a seção: `src/components/sections/ServicesSection.tsx`.
- [ ] Construir layout em lista empilhada (`sticky top-X`) e iterar dados das Offers (serviços web, performance, design).

### Fase 4: Componentes Core - FAQ e SVG
- [ ] Criar o componente flexível: `src/components/ui/Accordion.tsx` usando Framer Motion para height fluido.
- [ ] Montar seção: `src/components/sections/FaqSection.tsx`.
- [ ] Desenhar o vetor (Arrow) à mão, incorporar em componente `HandDrawnArrow.tsx`, e animá-lo no trigger `viewport`.

### Fase 5: Componentes Core - Premium Footer
- [ ] Criar Footer wrapper `FooterSection.tsx`.
- [ ] Desmontar layout de CTA box (Cartão de Fim de Funil) posicionado acima das links.
- [ ] Criar container para CSS Marquee Infinite no fundo.
- [ ] Acertar paleta tipográfica colossal.

### Fase 6: Integração Central
- [ ] Embutir tudo no `App.tsx` (Logo abaixo de StackSection -> AboutReveal -> Services -> FAQ -> Footer).
- [ ] Realizar teste extremo de Overflows laterais no viewport mobile causados por letreiros.
- [ ] `npm run build` e validação final.
