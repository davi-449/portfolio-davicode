# 🎨 Design — Portfolio DaviCode Rebuild

## Design System (skill `ux-ui-architect-2026` aplicada)

### Paleta de Cores — "Neon Dopamine" (com base Dark Technical)
```
--bg-primary:     #0a0a0f     /* Fundo ultra-escuro orgânico */
--bg-surface-1:   #111118     /* Cards e superfícies elevadas */
--bg-surface-2:   #1a1a28     /* Superfícies secundárias */
--accent:         #7c6aff     /* Violeta elétrico DaviCode */
--accent-hover:   #9284ff     /* Violeta hover state */
--accent-alt:     #ff6b6b     /* Coral para CTAs secundários */
--gold:           #f0c060     /* Destaques premium */
--text-main:      #f0f0f8     /* Texto principal (alto contraste) */
--text-muted:     #8b95a5     /* Texto secundário (WCAG compliant) */
--border:         rgba(124,106,255,0.15) /* Bordas glassmórficas */
--glass:          rgba(255,255,255,0.05) /* Superfícies glass */
--whatsapp:       #25D366     /* CTA WhatsApp */
```

### Tipografia
```
Font-family display: 'Space Grotesk', sans-serif  (titles, headings)
Font-family body:    'Inter', sans-serif            (body, paragraphs)
Font-family code:    'Space Mono', monospace         (accents técnicos)

Escala:
Hero Title:        text-7xl / text-8xl (72-96px) — Maximalismo Tátil
Section Title:     text-4xl / text-6xl (36-60px)
Card Title:        text-xl / text-2xl (20-24px)
Body:              text-base / text-lg (16-18px)
Labels/Captions:   text-sm (14px)
```

### Efeitos Liquid Glass
```css
/* Card padrão */
.glass-card {
  background: rgba(17, 17, 24, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(124, 106, 255, 0.15);
  box-shadow:
    0 1px 2px rgba(0,0,0,0.07),
    0 4px 8px rgba(0,0,0,0.07),
    0 16px 32px rgba(0,0,0,0.07),
    inset 0 1px 0 rgba(255,255,255,0.05);
}

/* Navbar glass */
.navbar-glass {
  background: rgba(10, 10, 15, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(124, 106, 255, 0.1);
}
```

---

## Arquitetura de Páginas

### Routing (React Router v7)
```
/               → HomePage
/projetos       → ProjectsPage
/sobre          → AboutPage
/contato        → ContactPage
```

### Estrutura de Componentes

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           (glass navbar fixo)
│   │   ├── Footer.tsx           (footer global)
│   │   ├── FloatingWhatsApp.tsx  (CTA flutuante)
│   │   └── PageTransition.tsx    (AnimatePresence wrapper)
│   ├── sections/
│   │   ├── HeroSection.tsx       (hero maximalista - só Home)
│   │   ├── HighlightsSection.tsx (3-4 projetos destaque - só Home)
│   │   ├── ServicesSection.tsx   (processo de trabalho - só Home)
│   │   ├── StatsStrip.tsx        (números de impacto)
│   │   ├── ProjectsGallery.tsx   (galeria filtrada - /projetos)
│   │   ├── AboutTimeline.tsx     (timeline - /sobre)
│   │   ├── TechStack.tsx         (stack visual - /sobre)
│   │   └── ContactLinks.tsx      (botões diretos de contato - /contato)
│   └── ui/
│       ├── ProjectCard.tsx       (card de projeto com mockup)
│       ├── FilterBar.tsx         (filtros de categoria)
│       ├── ParticleBackground.tsx
│       ├── StickyCard.tsx
│       └── Accordion.tsx
├── data/
│   └── projects.ts              (11 projetos)
├── pages/
│   ├── HomePage.tsx
│   ├── ProjectsPage.tsx
│   ├── AboutPage.tsx
│   └── ContactPage.tsx
├── App.tsx                      (Router + Layout)
├── index.css
└── main.tsx
```

---

## Wireframes por Página

### 📱 Home (`/`)
```
┌─────────────────────────────────────┐
│         NAVBAR (glass, fixo)        │
├─────────────────────────────────────┤
│                                     │
│     // criador de experiências      │
│                                     │
│           DaviCode                  │  ← text-8xl bold, text-glow
│  Desenvolvedor No-Code focado       │
│      em conversão.                  │
│                                     │
│  [Ver Portfólio→]  [WhatsApp]       │
│                                     │
│   10+     5.0     Ultra    Mobile   │  ← Stats strip
│  projets  stars   LCP      First    │
│                                     │
├─────────────────────────────────────┤
│         HIGHLIGHTS (3 cards)        │
│  ┌──────┐ ┌──────┐ ┌──────┐        │
│  │ LP 1 │ │ LP 2 │ │ LP 3 │        │  ← Top 3 projetos destaque
│  └──────┘ └──────┘ └──────┘        │
│        [Ver Todos →]                │
├─────────────────────────────────────┤
│         SERVICES (sticky cards)     │
│  Como eu trabalho:                  │
│  01. Fundações → 02. Design →      │
│  03. Código → 04. Deploy           │
├─────────────────────────────────────┤
│              FOOTER                 │
└─────────────────────────────────────┘
│🟢 WhatsApp│  ← Floating bottom-right
```

### 📱 Projetos (`/projetos`)
```
┌─────────────────────────────────────┐
│         NAVBAR (glass, fixo)        │
├─────────────────────────────────────┤
│   Portfólio DaviCode                │
│   Exploração das landing pages      │
│                                     │
│  [Todos] [Mecânica] [Vet] [Foto]   │  ← FilterBar
│                                     │
│  ┌─────────────────────────────┐    │
│  │  📸 Screenshot em mockup    │    │
│  │  Dra. Ingrid Segatti        │    │
│  │  Odontologia                │    │
│  │  [Premium] [Framer] [CTA]  │    │  ← Tags
│  │  [Ver Live →]               │    │
│  └─────────────────────────────┘    │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  📸 NKAM Suspensão          │    │
│  │  ...                        │    │
│  └─────────────────────────────┘    │
│  ... (11 projetos total)           │
├─────────────────────────────────────┤
│              FOOTER                 │
└─────────────────────────────────────┘
```

### 📱 Sobre (`/sobre`)
```
┌─────────────────────────────────────┐
│   Sobre Mim                         │
│   Mini-bio profissional             │
│                                     │
│   ── Timeline de Experiência ──     │
│   2024: Início DaviCode             │
│   2025: 11+ Landing Pages           │
│   2026: Painel CRM + IA             │
│                                     │
│   ── Tech Stack ──                  │
│   [React] [TS] [Tailwind]          │
│   [Node] [Supabase] [Framer]       │
│                                     │
│   ── Métricas ──                    │
│   11+ projetos | 5 segmentos |     │
│   5.0 avaliação média              │
└─────────────────────────────────────┘
```

### 📱 Contato (`/contato`)
```
┌─────────────────────────────────────┐
│   Vamos Conversar?                  │
│                                     │
│   Entre em contato através dos      │
│   canais abaixo:                    │
│                                     │
│   [ 📞 Falar no WhatsApp ]          │
│   [ 📧 Enviar E-mail     ]          │
│                                     │
│   📸 Instagram  💼 GitHub          │
└─────────────────────────────────────┘
```

---

## Dependências Necessárias

### Já instaladas (manter)
- `react` 19, `react-dom` 19
- `framer-motion` 12
- `lucide-react`
- `tailwindcss` 3.4
- `clsx` + `tailwind-merge`

### Adicionar
- `react-router-dom` v7 — multi-page routing
- A página de contato utilizará links (mailto: e wa.me) sem formulário direto por enquanto.

### Sem Backend
Esta é uma aplicação **100% frontend estática**. Sem banco de dados, sem Supabase. Deploy no repositório existente do GitHub (`davicode.me`) com deploy automático na Netlify.

---

## Screenshots & Mockups

Para cada projeto no portfólio, precisaremos de screenshots reais. Estratégia:
1. **Screenshots via Firecrawl** dos sites live (3 projetos: Ingrid, NKAM, TratoCão, JFL)
2. **Screenshots via `npm run dev`** dos projetos locais (7 restantes)
3. **Mockup frames** serão CSS-only (div com border-radius e sombra simulando device)

---

## Acessibilidade (WCAG 2.2)
- `:focus-visible` em todos os links, botões e inputs
- Contraste mínimo 4.5:1 em todo texto
- Alvos de clique ≥ 44x44px em mobile
- Skip-to-content link para navegação por teclado
- `aria-label` em ícones sem texto
- `prefers-reduced-motion` para desativar animações
