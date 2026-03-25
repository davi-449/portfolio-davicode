# Design — 004: Portfólio Overhaul Completo

## Design System: Midnight Forge
**Tokens de referência do `tailwind.config.js`:**
| Token | Valor | Uso |
|---|---|---|
| `background` | `#0a0a0f` | Fundo global |
| `surface.1` | `#111118` | Cards |
| `surface.2` | `#1a1a28` | Tags, inputs |
| `accent` | `#7c6aff` | Highlight ÚNICO — violeta elétrico |
| `text.main` | `#f0f0f8` | Títulos |
| `text.muted` | `#6b6b8a` | Subtle text |
| `border` | `rgba(124,106,255,0.15)` | Bordas |

> **Regra de ouro:** Toda indicação de "ativo" usa **apenas** `accent` (`#7c6aff`, op 60-100%). **Nunca** usar a cor do projeto para bordas ou glows.

---

## Componentes a Reescrever

### 1. StackSection — Refactor Completo

```
Layout desktop (lg+):
┌─────────────────────────────────────────────────────┐
│  sticky h-screen  ← o wrapper                       │
│                                                     │
│   ┌───────────────┐    ┌──────────────────────────┐ │
│   │  INFO PANEL   │    │      DECK CONTAINER      │ │
│   │  (50% width)  │    │  (50% width, full height)│ │
│   │               │    │                          │ │
│   │   h-screen    │    │ ┌──────────────────────┐ │ │
│   │   flex col    │    │ │    CARD ATIVO         │ │ │
│   │   justify-ctr │    │ │   (max-w-[500px])    │ │ │
│   │               │    │ └──────────────────────┘ │ │
│   │               │    │   ▼▼ cards stack ▼▼     │ │
│   └───────────────┘    └──────────────────────────┘ │
└─────────────────────────────────────────────────────┘

Layout mobile (< lg) — "CARDS FIRST":
┌────────────────────────┐
│   DECK CONTAINER       │ ← order-1 (vem primeiro!)
│   (full width, 260px)  │
│   ┌────────────────┐   │
│   │  CARD ATIVO    │   │
│   └────────────────┘   │
│                        │
│   INFO PANEL           │ ← order-2 (vem depois!)
│   (full width)         │
└────────────────────────┘
```

**StackCard — Regras de estilo corretas:**
```
Card ATIVO (offset: 0):
  - border: 1px solid rgba(124,106,255,0.6)   ← ACCENT, nunca cor do projeto
  - box-shadow: 0 20px 60px rgba(0,0,0,0.6)
  - scale: 1, opacity: 1, translateY: 0

Card +1 abaixo:
  - border: 1px solid rgba(124,106,255,0.1)
  - scale: 0.96, translateY: 20px, opacity: 0.85

Card +2 abaixo:
  - border: none
  - scale: 0.92, translateY: 40px, opacity: 0.5

Card +3 abaixo:
  - scale: 0.88, translateY: 60px, opacity: 0

Card SAINDO (offset: -1):
  - translateY: -110%  opacity: 0
```

---

### 2. HeroSection — Aurora Upgrade

**Background:**
- Manter `bg-grid-pattern` existente
- Adicionar `AuroraBlob` component: `div` absolutamente posicionado com:
  ```css
  width: 600px; height: 600px;
  background: radial-gradient(ellipse, #7c6aff22, transparent 70%);
  filter: blur(80px);
  animation: float 8s ease-in-out infinite;
  ```
- Segundo blob menor (offset em posição), cor `#ff6b6b11`

**Tipografia:**
- Linha "DaviCode" → `text-gradient` class (`bg-clip-text` violeta → branco)
- Ícones de tech stack abaixo do CTA (stack horizontal com hover glow)

---

### 3. FeaturesStrip — Glass Cards

**Substituir a strip atual por cards individuais em grid:**
- `grid grid-cols-2 md:grid-cols-4 gap-4`
- Cada feature: `glass-card rounded-2xl p-6 hover:border-accent/40 transition-all`
- Ícone Lucide em container 48x48 com bg `accent/10` e cor `accent`
- Número do contador animado com `framer-motion` (`animate={{ from: 0, to: N }}` ao entrar em view)

---

### 4. ContactCTA — Card Centralizado

**Layout atual:** texto solto com botões
**Novo layout:**
- Container centralizado com `max-w-xl mx-auto`
- `glass-card rounded-3xl p-12 text-center` com border `accent/30`
- Headline grande (`text-5xl`)
- Parágrafo sucinto
- Dois CTAs: WhatsApp (solid accent) + Email (outline)
- Background da seção: `bg-grid-pattern` + Aurora blob

---

## Arquivos a Criar/Modificar

| Arquivo | Ação |
|---|---|
| `StackSection.tsx` | REESCREVER — layout corrigido, mobile corrigido |
| `StackCard.tsx` | REESCREVER — remover cor do projeto, somente accent violet |
| `HeroSection.tsx` | MODIFICAR — adicionar AuroraBlob, text-gradient no título |
| `FeaturesStrip.tsx` | REESCREVER — grid de glass cards com contadores |
| `ContactCTA.tsx` | REESCREVER — card centralizado com background aurora |
| `index.css` | ADICIONAR — `.text-gradient`, `.aurora-blob` utilities |
