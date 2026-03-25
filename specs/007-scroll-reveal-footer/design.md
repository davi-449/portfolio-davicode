# Spec 007 - Design Constraints & Architecture

## Visão Geral da UI Modular
Para garantir um código limpo e permitir o uso fácil pelo Stitch MCP/Antigravity, as novidades serão fragmentadas em três camadas de componentes baseados em React + Framer Motion + Tailwind CSS.

### 1. `AboutScrollSection.tsx`
- **Posição:** Imediatamente após `StackSection`.
- **Layout:** Um box gigantesco (`min-h-[150vh]`), para que haja espaço de scroll de sobra, permitindo acoplar o hook `useScroll` com tranquilidade.
- **Micro-interação:** O nó central é fixado (sticky) no meio da tela e o texto vai "acendendo".
- **Design Tokens:** Texto base em `text-white/20`, texto iluminado em `text-white` com acentos ocasionais em `text-accent`.

### 2. `WordReveal.tsx` (Componente Utilitário)
- Componente especializado que recebe uma `String`, faz o split por palavras/caracteres, mapeia ranges de progresso e repassa opacidades de 0.2 a 1 calculadas individualmente via `useTransform`.

### 3. `FooterSection.tsx`
- **Layout:** Ficará na estaca final do DOM. Inclui a camada sobreposta do **CTA Card** (flutuando meta-a-meio via margem negativa ou posicionamento absoluto) seguido do contêiner do rodapé.
- **Marquee Element:** Uma faixa infinita usando flex duplo animado com CSS `@keyframes` `translateX` puro para melhor performance em vez do Framer motion (ou `useAnimationFrame` se quisermos amarrar na inércia, mas CSS animation linear resolve bem e é mais fluido pra marquee contínuo). Tipografia massiva (`text-[10vw]` a `text-[20vw]`), opacidade bem baixa (`text-white/5` ou *text stroke transparent*).
- **Foreground:** Grid com links: Github, LinkedIn, Email.

## Considerações de Banco de Dados (Supabase)
- **N/A.** Esta é uma atualização estritamente visual/Front-end. Nenhuma modelagem de dados no Supabase é requerida para esta Spec. 

## Regras de Estilo
- **Fontes:** Usar a fonte `font-display` para a headline de Reveal e Marquee, e `font-sans`/`font-mono` para metadados/links no footer.
- **Dark Elegance:** Manter os cards com `bg-surface-1/80 border border-white/[0.05] shadow-2xl backdrop-blur-md` como é o padrão Midnight Forge.
