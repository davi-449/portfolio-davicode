# Spec 007 - Design Constraints & Architecture (Full Scope)

## Visão Geral da UI Modular
O escopo foi expandido para cobrir o fluxo completo final da Landing Page, transformando o "Meio e Fim" do site num espetáculo cinético.

### 1. `ScrollRevealSection.tsx` & `TextRevealByWord.tsx`
- Layout de amplo *scroll real estate* (ex: `h-[200vh]`) abrigando um nó filho `sticky top-1/2`.
- O nó envia opacidades condicionais às suas palavras instanciadas via `framer-motion` hooks baseados no scrollYProgress extraído de uma ref ao wrapper estático.

### 2. `ServicesStickySection.tsx` (Stacking Cards)
- Estrutura baseada em CSS purista para as fundações: o contêiner mãe tem altura compatível (ex: `gap-4 flex flex-col padding-bottom`), e os elementos internos utilizam `position: sticky; top: Xrem;`. 
- Alternativa técnica avançada: Controlar `scale` de cada card via tracking de scroll da seção para encolher cards antigos quando os novos surgem por cima.
- Arte: `glass-card`, gradientes sutis, bordas brilhantes.

### 3. `FaqAccordion.tsx`
- Estado React simples: `activeId: string | null`. 
- Ao recriar Height dinâmico, envolver o `children` de resposta em um container `<motion.div animate={{ height: active ? "auto" : 0 }}>` com `overflow: hidden`.
- Header da aba usa CSS grid com ícone que aplica `rotate-45` (ou 180) quando ativado.

### 4. `FooterEnhanced.tsx` & SVG Draw
- **CTA:** Cartão de `max-w-4xl` abrigando textos de conversão.
- **Hand-Drawn Arrow:** `motion.path` com os atributos `initial={{ pathLength: 0 }}` e `whileInView={{ pathLength: 1 }}` (garante que apenas será desenhada quando estiver dentro da tela).
- **Infinite Marquee:** Usar 2 `div` horizontais duplicadas rodando com CSS `@keyframes scroll` (mais barato para GPU que Framer Motion). O Pai aplica `overflow-hidden flex whitespace-nowrap`.

### 5. Retoques em `StackSection.tsx`
- Adicionar `group` no `<StackCard>` envolto. Envolver tag `<img />` com classes: `transition-transform duration-700 group-hover:scale-105`.

## Banco de Dados
- **N/A.** Puro front-end e estado na árvore de componentes. (Stitch MCP driven).
