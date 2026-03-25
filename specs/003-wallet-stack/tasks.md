# Tasks — 003: Efeito Stack Real (Apple Wallet)

## Checklist de Implementação

### Fase 0 — Limpeza
- [ ] 0.1 Remover `WalletSection` e `WalletCard` do `App.tsx` (substituir por `StackSection`)
- [ ] 0.2 Não deletar os arquivos antigos — apenas não importá-los

### Fase 1 — StackCard (card individual)
- [ ] 1.1 Criar `src/components/ui/StackCard.tsx`
  - Props: `project`, `positionOffset` (0=ativo, 1=atrás 1, 2=atrás 2, 3=atrás 3, -1=saiu)
  - Usar `motion.div` com `animate` controlado por prop
  - `positionOffset === -1` → `translateY(-110%)`, opacity 0
  - `positionOffset === 0` → `translateY(0)`, scale 1, opacity 1, glow
  - `positionOffset === 1` → `translateY(18px)`, scale 0.96, opacity 1
  - `positionOffset === 2` → `translateY(36px)`, scale 0.92, opacity 0.7
  - `positionOffset >= 3` → `translateY(54px)`, scale 0.88, opacity 0
  - transition: `spring({ stiffness: 200, damping: 28 })`
  - Screenshot `object-cover object-top` com overlay gradient inferior
  - Z-index = `20 - positionOffset` (ativo no topo)

### Fase 2 — StackSection (container principal)
- [ ] 2.1 Criar `src/components/sections/StackSection.tsx`
- [ ] 2.2 Container raiz: `position: relative; height: calc(100vh * N_CARDS + 100vh)`
  - Isso gera o espaço de scroll proporcional ao número de projetos
- [ ] 2.3 Filho sticky: `position: sticky; top: 0; height: 100vh; display: flex`
- [ ] 2.4 Hook `useScroll({ target: sectionRef, offset: ['start start', 'end end'] })`
- [ ] 2.5 Derivar `activeIndex` via `scrollYProgress`:
  ```ts
  const rawIndex = useTransform(scrollYProgress, [0, 1], [0, projects.length - 1]);
  // subscribir e arredondar o valor para int
  ```
- [ ] 2.6 Renderizar todos os `StackCard` com `positionOffset = i - activeIndex`

### Fase 3 — Info Panel (lado esquerdo)
- [ ] 3.1 Dentro do filho sticky, lado esquerdo com largura ~40%
- [ ] 3.2 `AnimatePresence mode="wait"` com `key={activeProject.id}`
  - `initial={{ opacity: 0, y: 20 }}` / `animate={{ opacity: 1, y: 0 }}` / `exit={{ opacity: 0, y: -20 }}`
- [ ] 3.3 Mostrar: número do projeto, categoria badge (cor do projeto), título, descrição, tags, CTA

### Fase 4 — Integração no App.tsx
- [ ] 4.1 Importar `StackSection` em `App.tsx`
- [ ] 4.2 Substituir `<WalletSection />` por `<StackSection />`

### Fase 5 — Mobile
- [ ] 5.1 Em `< lg`: ocultar info panel, exibir abaixo do deck
- [ ] 5.2 Deck em largura total, cards com altura `aspect-[16/9]`
- [ ] 5.3 Manter scroll-driven funcionando (mesma lógica)

### Fase 6 — Build e Push
- [ ] 6.1 `npm run build` sem erros TypeScript
- [ ] 6.2 Commit: `feat: true apple wallet scroll-driven stack`
- [ ] 6.3 Push para `main`
