# Design: Portfolio Premium DaviCode

## Stack
- **React + Vite** (TypeScript)
- **Framer Motion** para animações premium
- **Tailwind CSS** / CSS custom properties para design system
- **Lucide React** para ícones

---

## Paleta "Midnight Forge"

```
Background:   #0a0a0f  (near-black)
Surface-1:    #111118  (cards)
Surface-2:    #1a1a28  (hover)
Accent:       #7c6aff  (violeta elétrico — marca DaviCode)
Accent-Alt:   #ff6b6b  (vermelho coral — contraste)
Gold:         #f0c060  (detalhes premium)

Text-main:    #f0f0f8
Text-muted:   #6b6b8a
Border:       rgba(124,106,255,0.15)
```

---

## Tipografia

| Função | Fonte | Peso |
|---|---|---|
| Headlines | Space Grotesk | 700 (bold) |
| Body | Inter | 400/300 |
| Taglines | Space Mono | 400 (monospace code) |

---

## Estrutura de Páginas

### 1. Hero Section
- **Fullscreen** com `min-h-screen`
- Fundo: gradiente radial `midnight-forge` + grade pontilhada CSS animada
- Conteúdo:
  - `<Space_Mono>` tag: `// criador de experiências digitais`
  - H1 grande: `DaviCode`
  - Subtítulo: "Landing Pages Premium para negócios locais"
  - Métricas animadas: `10+ projetos` · `9 cidades atendidas` · `★ 5.0`
  - Botão CTA: "Ver Projetos ↓" + "Falar no WhatsApp"
- Background: partículas/estrelas CSS sutis + blobs gradiente animados

### 2. Projects Grid
- Título seção: "Portfólio"
- **Layout alternado**: card esquerda/direita (desktop) ou empilhado (mobile)
- **ProjectCard:**
  - Faixas laterais coloridas por categoria (Mecânica=laranja, Odonto=rose-gold, Veterinária=verde)
  - Mockup screenshot no lado direito (ou esquerdo alternando)
  - Esquerda: número `01`, categoria chip, título, descrição curta, tags de features, botão "Ver Projeto →"
  - Hover: brilho `shine` passando por cima + leve translateY
- **Sem URL pública ainda**: exibir como "Em breve" com badge `🔒 Demo Privada`

### 3. Features/Skills Strip
- Fundo levemente diferente (`surface-1`)
- 4-6 cards horizontais compactos com ícone + título + curta desc
  - `Design Premium` · `Mobile First` · `SEO Otimizado` · `Entrega Rápida` · `Google Maps` · `WhatsApp CTA`

### 4. Testimonials (Opcional)
- 2-3 depoimentos curtos de clientes com estrelas e nome/tipo de negócio.

### 5. CTA Final + Footer
- CTA: "Pronto para sua landing page?" + botão WhatsApp gigante pulsante
- Footer: `DaviCode © 2026` + links: Instagram, GitHub, WhatsApp

---

## ProjectCard — Componente Detalhado

```tsx
interface Project {
  id: number;       // "01", "02"...
  title: string;    // "NKAM Suspensão"
  category: string; // "Mecânica", "Odontologia"
  description: string;
  tags: string[];   // ["Mobile First", "WhatsApp CTA", "Google Maps"]
  url?: string;     // "https://nkam.davicode.me"
  color: string;    // cor do acento da categoria
  image: string;    // import do screenshot ou URL Unsplash
}
```

### Screenshot/Mockup
- Se tiver URL pública: usar `<iframe>` thumbnail com `pointer-events-none` ou screenshot estático.
- Se não tiver URL: usar placeholder dark elegante com nome + categoria.

---

## Animações

| Elemento | Animação |
|---|---|
| Hero H1 | Fade-in + stagger letters |
| Background blobs | Float lento CSS keyframes |
| ProjectCard | `whileInView` slide from bottom |
| Feature cards | Stagger 0.08s |
| CTA WhatsApp button | Pulse suave em loop |
| Card hover | Shine + border glow |
