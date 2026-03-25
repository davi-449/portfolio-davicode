# Tasks — 004: Portfólio Overhaul Completo

## Fase 1 — Reescrever StackCard (Branding)
- [ ] 1.1 Em `StackCard.tsx`: remover TODOS os boxShadow com `project.color`
- [ ] 1.2 Substituir por:
  - Card ativo (`offset === 0`): `border: 1px solid rgba(124,106,255,0.6)` + shadow dark sem cor
  - Cards abaixo: `border: 1px solid rgba(124,106,255,0.1 / none)`
  - Card saindo: mantém shadow dark
- [ ] 1.3 Remover dot indicator colorido (ou substituir por ponto `accent` único)
- [ ] 1.4 Badge de categoria no rodapé deve usar apenas `text.muted` e `border` - SEM backgroundColor colorido

## Fase 2 — Reescrever StackSection (Layout)
- [ ] 2.1 Container sticky: `h-screen w-full flex items-center` (centralizar verticalmente)
- [ ] 2.2 Grid interno: `grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center`
- [ ] 2.3 **Desktop Info Panel** (col esquerda): `flex flex-col justify-center h-full py-16`
- [ ] 2.4 **Desktop Deck** (col direita): `relative h-full flex items-center justify-center`
  - Inner container: `relative w-full max-w-[500px] mx-auto aspect-[16/9]`
  - Cards absolutamente posicionados dentro desse container
- [ ] 2.5 **Mobile ordem correta:** Info panel recebe `order-2 lg:order-1`, deck recebe `order-1 lg:order-2`
- [ ] 2.6 No Info Panel: remover badge de cor do projeto, usar `accent` como cor de badge único
- [ ] 2.7 Progress dots: apenas bolinhas accent, sem stretch de largura
- [ ] 2.8 Adicionar `lg:` prefixo em todas as classes de layout que só se aplicam no desktop

## Fase 3 — HeroSection (Aurora Upgrade)
- [ ] 3.1 Ler o código atual de `HeroSection.tsx`
- [ ] 3.2 Adicionar 2 blobs aurora com `position: absolute` e `pointer-events-none`:
  - Blob 1: `w-[500px] h-[500px]` centralizdo levemente à esquerda, `radial-gradient(ellipse, #7c6aff18, transparent 70%)`, `blur(80px)`, animação `float`
  - Blob 2: `w-[300px] h-[300px]` à direita inferior, `radial-gradient(ellipse, #ff6b6b10, transparent 70%)`, `blur(60px)`, delay na animação
- [ ] 3.3 Título principal: aplicar classe `text-gradient` (violeta passando pra branco) no span do nome "DaviCode"
- [ ] 3.4 Adicionar stack horizontal de ícones de tech (`Zap`, `Code2`, `Globe`, `Star`) com hover scale

## Fase 4 — FeaturesStrip (Glass Cards)
- [ ] 4.1 Ler o código atual de `FeaturesStrip.tsx`
- [ ] 4.2 Substituir a strip por um grid `grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto`
- [ ] 4.3 Cada feature: `glass-card rounded-2xl p-6 group hover:border-accent/30 transition-all duration-300`
- [ ] 4.4 Ícone Lucide em container `w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4`, cor `text-accent`
- [ ] 4.5 Contador animado: `useMotionValue(0)` + `useInView` → aumenta de 0 até o número ao entrar na tela

## Fase 5 — ContactCTA (Card)
- [ ] 5.1 Ler o código atual de `ContactCTA.tsx`
- [ ] 5.2 Reescrever para: `section > div.aurora-wrapper > div.glass-card.rounded-3xl.p-12.text-center`
- [ ] 5.3 Adicionar aurora blob atrás do card (igual à hero, mas menor)
- [ ] 5.4 Dois CTAs: botão primário WhatsApp (accent solid) e link email (outline subtext)

## Fase 6 — CSS Utilities
- [ ] 6.1 Em `index.css`, adicionar:
  ```css
  .text-gradient {
    @apply bg-gradient-to-r from-accent to-white bg-clip-text text-transparent;
  }
  ```
- [ ] 6.2 Verificar que `.float` keyframe já existe no `tailwind.config.js` (confirmar)

## Fase 7 — Build e Deploy
- [ ] 7.1 `npm run build` — zero erros TypeScript
- [ ] 7.2 Commit: `refactor: 004 portfolio overhaul — stack branding, layout symmetry, section upgrades`
- [ ] 7.3 Push para `main`
