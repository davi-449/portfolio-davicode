# Design e Arquitetura: Stack Layout Fix (spec 006)

## 1. Estratégia de Layout (StackSection.tsx)

Para consertar a anomalia visual com maestria, abandonaremos o atual `grid-cols-1 lg:grid-cols-2` perfeitamente simétrico (50/50) em favor de uma **distribuição assimétrica flexível** focada na imagem.

### Desktop Flex Layout
- Ao invés de `grid-cols-2`, usaremos uma flex container: `flex flex-col lg:flex-row`.
- Lado Esquerdo (Info Panel): Ocupará `lg:w-[40%]` (aproximadamente `max-w-md` ou flex basis fixa).
- Lado Direito (Deck + Dots): Ocupará `lg:w-[60%] flex-1`, permitindo que ele se expanda massivamente para preencher o vazio até o limite dos Dots.

### Mobile Vertical Flow
- Ao invés de deixar a cargo dos `order-x` de CSS Grid que as vezes conflitam no Framer-motion sticky, vamos refatorar a árvore do JSX para dominar as alturas usando `flex-col`.
- **Topo (Order 1):** O Deck de Cartas `h-[45vh] sm:h-[50vh]`.
- **Rodapé (Order 2):** O painel de infos ocupando o resto do espaço flex.

## 2. Refatorando o StackCard (StackCard.tsx) Limitadores
- O container raiz de cada carta no momento deve ter amarras que não deixam ele crescer.
- Substituiremos larguras fixas por proporções relativas `w-full h-auto` com limitador de largura apenas na classe mãe responsiva, não codado direto no framer-motion box para permitir fluidez.
- Manter o CSS `aspect-video` na caixa da imagem (screenshot) para garantir sempre o aspect-ratio 16:9 perfeito do mockup do browser, seja o browser encolhendo no mobilezinho ou gigante no monitor 4K.

## 3. Stitch MCP Integration Note
Como a UI inteira já opera sob o Midnight Forge design system, as cartas contem sombras de vidro (glassmorphism) e efeitos de brilho (glow). A refatoração manterá intactas as tokens do design, afetando puramente a "alavanca" flexbox (`width`, `height`, `gap`, `flex-direction`).
