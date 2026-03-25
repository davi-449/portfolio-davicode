# Design — 002: Seção Apple Wallet + JFL Fotos

## Arquitetura de UI

> Sem uso de Stitch nesta entrega — é um projeto frontend puro (Vite + React + Tailwind + Framer Motion).

---

## Layout Desktop (lg: 1024px+)

```
┌─────────────────────────────────────────────────────────┐
│                  WALLET SECTION                          │
├──────────────────────────┬──────────────────────────────┤
│  [STICKY INFO PANEL]     │  [SCROLLABLE CARDS STACK]   │
│  position: sticky        │  overflow-y: visible        │
│  top: 15vh               │                             │
│                          │  ⬤ Card 01 (ativo, glow)  │
│  ● Número do projeto     │  ⬤ Card 02                │
│  ● Categoria badge       │  ⬤ Card 03                │
│  ● Título (h2 grande)    │  · · ·                      │
│  ● Descrição             │  ⬤ Card 11                │
│  ● Tags (chips)          │                             │
│  ● CTA / Link            │                             │
└──────────────────────────┴──────────────────────────────┘
```

### Sticky Info Panel (esquerda)
- `position: sticky` dentro de `overflow: visible` no container pai
- Usa `AnimatePresence` com `key={activeProject.id}` para trocar todos os textos com `initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }}`
- Cor do badge/título/glow muda para `activeProject.color`

### Cards Stack (direita)
Cada card miniatura:
- Container: `rounded-2xl border border-border overflow-hidden`
- Screenshot ocupa todo o card com `object-cover object-top`
- Overlay gradient na parte inferior com o nome do projeto
- **Card ativo:** `ring-2` e `box-shadow` com `project.color`; `scale: 1.02`  
- **Cards inativos:** `opacity: 0.6`, `scale: 1`
- **Hover:** cursor pointer → `onMouseEnter` → `setActiveIndex(index)`
- **Scroll automático:** `useInView` (framer-motion) no card → ao entrar no viewport muda o `activeIndex`

---

## Layout Mobile (< 1024px)

```
┌────────────────────────────────┐
│  Card Ativo (grande, EXPANDIDO)│
│  ┌────────────────────────┐   │
│  │    screenshot          │   │
│  └────────────────────────┘   │
│  Título, Desc, Tags, CTA       │
├────────────────────────────────┤
│  Card 1 (miniatura, rotate -1°)│
│  Card 2 (miniatura, rotate +1°)│
│  [ver mais ↓]                  │
└────────────────────────────────┘
```
- Cards não ativos: `scale(0.95)`, `rotate(variação por index)`, clicáveis
- Ao clicar → `setActiveIndex` → card sobe com `AnimatePresence`

---

## Componentes a Criar

| Componente | Arquivo | Responsabilidade |
|---|---|---|
| `WalletSection` | `sections/WalletSection.tsx` | Container principal, lógica de estado `activeIndex` |
| `WalletInfoPanel` | (inline ou sub-componente) | Painel sticky com `AnimatePresence` |
| `WalletCard` | `ui/WalletCard.tsx` | Card miniatura com screenshot, hover, glow |

## Dados

- **`projects.ts`**: Adicionar objeto JFL Fotos (id: "11", category: "Fotografia", color: "#f59e0b")
- Imagem `/mockups/jfl-fotos.png` já disponível
