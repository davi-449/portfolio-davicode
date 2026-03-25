# Spec 007 - The Premium UI Overhaul (Scroll Reveal, Sticky Cards, FAQ & Footer)

## Contexto
O usuário solicitou uma reformulação visual completa e a adição de novas seções ao portfólio `portfolio-davicode`, elevando-o ao nível de produções "Awwwards-tier" baseadas na referência `angelocicchiello.dev`. Todas as interações descobertas na auditoria visual entraram para o escopo desta feature, garantindo uma experiência contínua obre o background espacial já existente.

## Requisitos Core (Full Scope)
1. **Scroll Reveal Typography (Seção Sobre):**
   - Texto de declaração de impacto onde cada palavra/letra se "acende" de acordo com o progresso do scroll, usando `framer-motion` (`useScroll`, `useTransform`).
2. **Sticky Stacking Cards (Seção de Serviços):**
   - Uma seção detalhando a oferta (ex: Solide fundamenta, Código sob medida) onde os cards sobem e "grudam" no topo (via `position: sticky`), empilhando-se uns sobre os outros com leve redução de escala para criar profundidade geométrica.
3. **FAQ Accordion Fluido:**
   - Uma lista de perguntas "Step-by-step" com comportamento de sanfona (Accordion) premium. Animações de altura rigorosamente controladas com transição de ícones SVG giratórios (Arrow ou Cross).
4. **Enhanced Footer & CTA:**
   - Call to Action ("Il tuo progetto...") em formato de *glass card* robusto sobre as últimas dobras da tela.
   - Setas desenhadas à mão (SVG Draw Animation via `pathLength`) guiando o olhar.
   - **Infinite Marquee Background:** Tipografia gigantesca em loop invisível para fechar a arquitetura do rodapé com estilo.
5. **Micro-interações Globais:**
   - Efeito *Image Zoom In* nos cards do atual `StackSection` (ao passar o mouse por cima).
   - *Glow Buttons* respirantes (Box-shadow pulsante via framer-motion) nas chamadas para ação.
   - Pílulas (Pills) textuais que contêm destaques interativos ou cores flutuantes.

## User Stories
- **Como visitante**, quero uma experiência cinematográfica ao ler o conteúdo, com seções que reagem ao meu scroll (Text Reveal e Stacking Cards) e não apenas blocos estáticos de texto.
- **Como futuro cliente**, quero deslizar até o final da página, entender todo o processo pelo FAQ animado de forma agradável, e ser visualmente puxado para clicar no e-mail de contato pelas setas animadas em SVG.
- **Como recrutador**, a coesão visual, as micro-animações como o Zoom nas imagens do projeto e a navegação suave demonstram altíssimo nível de habilidade técnica e atenção aos detalhes.

## Critérios de Aceite
- Os Stacking Cards na seção de serviços permanecem grudados (`sticky`) na viewport e permitem leitura limpa antes do próximo sobrepor.
- A sanfona do FAQ não tem *jumps* bruscos e oculta o conteúdo suavemente (usar `framer-motion` `AnimatePresence`).
- Setas manuais em SVG têm visivelmente o efeito de animação de ser "desenhado" (`stroke-dashoffset`).
- A seção "Stack" anterior recebe o Hover de Zoom nas imagens.
