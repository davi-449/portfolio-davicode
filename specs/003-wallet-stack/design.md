# Design — 003: Efeito Stack Real (Apple Wallet)

## Arquitetura do Scroll-Driven Stack

### Estrutura DOM

```
<section> ← height: nCards * 100vh (gera o espaço de scroll)
  <div sticky> ← position: sticky; top: 0; height: 100vh; overflow: hidden
    ┌─────────────────┬──────────────────────────────┐
    │  INFO PANEL     │     CARD DECK                │
    │  (sticky left)  │  (centered, cards stacked)   │
    │                 │                              │
    │  ● ID           │    ┌─────────────────┐       │
    │  ● Categoria    │    │   Card Ativo    │ ← z:4 │
    │  ● Título       │   ┌┤─────────────────├┐      │
    │  ● Desc         │  ┌┤│  card abaixo    │├┐     │
    │  ● Tags         │  ││└─────────────────┘││     │
    │  ● CTA          │  └┤ card 3 (peek)     ├┘     │
    └─────────────────┴───┴─────────────────────┴────┘
```

### Lógica de Scroll → ActiveIndex

```
scrollProgress = scrollY / (nCards * 100vh)  →  [0, 1]
activeIndex = Math.min(Math.floor(scrollProgress * nCards), nCards - 1)
```

Usando `useScroll({ target: sectionRef })` + `useTransform` do framer-motion.

---

## Posicionamento dos Cards (deck visual)

Cada card `i` em relação ao `activeIndex`:

| Estado | Transform | Opacity | Z-Index |
|---|---|---|---|
| Card saindo (`i < activeIndex`) | `translateY(-110%)` | 0 | 1 |
| Card ativo (`i === activeIndex`) | `translateY(0)` | 1 | 11 - i |
| Card abaixo + 1 | `translateY(18px) scale(0.96)` | 1 | 10 - i |
| Card abaixo + 2 | `translateY(36px) scale(0.92)` | 0.7 | 9 - i |
| Card abaixo + 3+ | `translateY(54px) scale(0.88)` | 0 | baixo |

---

## Componentes

| Componente | Arquivo | Responsabilidade |
|---|---|---|
| `StackSection` | `sections/StackSection.tsx` | Container scroll-driven + sticky wrapper + lógica activeIndex |
| `StackInfoPanel` | (inline) | AnimatePresence com infos do projeto ativo |
| `StackCard` | `ui/StackCard.tsx` | Card individual com posição calculada, screenshot + glow |

## Animações Framer Motion

- Transições de posição: `spring({ stiffness: 200, damping: 30 })` — suave, sem bounce excessivo
- `AnimatePresence` no Info Panel: `key={active.id}` com fade + slide Y
- Glow: `boxShadow` animado com `active.color` via style prop dinâmico

## Mobile

- Stack centralizado, deck visível verticalmente (apenas os primeiros 4 cards ficam acima da dobra)
- Info Panel vira seção colapsável abaixo do deck
- Mesma lógica de scroll funciona em portrait
