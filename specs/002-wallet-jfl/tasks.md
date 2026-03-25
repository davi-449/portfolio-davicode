# Tasks — 002: Seção Apple Wallet + JFL Fotos

## Checklist de Implementação

### Fase 0 — Dados
- [ ] 0.1 Adicionar JFL Fotos em `src/data/projects.ts` como 11º item
  - id: "11", title: "JFL Fotos", category: "Fotografia", color: "#f59e0b"
  - url: "https://jfl.davicode.me", image: "/mockups/jfl-fotos.png"

### Fase 1 — WalletCard (UI mínima)
- [ ] 1.1 Criar `src/components/ui/WalletCard.tsx`
  - Props: `project`, `isActive`, `onClick`, `index`
  - Renderiza screenshot com `object-cover object-top`
  - Overlay com nome e categoria no rodapé
  - Ring/glow animado quando `isActive === true` usando `project.color`
  - Transição `motion.div` com `whileHover={{ scale: 1.03 }}`

### Fase 2 — WalletSection (Container + Lógica)
- [ ] 2.1 Criar `src/components/sections/WalletSection.tsx`
- [ ] 2.2 Implementar estado `activeIndex` (useState, inicia em 0)
- [ ] 2.3 Implementar `useInView` nos cards para trocar `activeIndex` automaticamente no scroll
- [ ] 2.4 Layout desktop: `grid grid-cols-2`, coluna esquerda `sticky top-[15vh]`
- [ ] 2.5 Layout mobile: empilhamento vertical, coluna única

### Fase 3 — Info Panel (Sticky/Animated)
- [ ] 3.1 Dentro de `WalletSection`, criar o Info Panel com `AnimatePresence`
- [ ] 3.2 Animar saída/entrada de: número, categoria, título, descrição, tags e CTA
  - Usar `key={projects[activeIndex].id}` no container interno
  - `initial={{ opacity: 0, y: 20 }}` / `animate={{ opacity: 1, y: 0 }}` / `exit={{ opacity: 0, y: -20 }}`
- [ ] 3.3 Cor do badge e bordas do painel muda para `projects[activeIndex].color`

### Fase 4 — Integração
- [ ] 4.1 Em `src/App.tsx`: importar `WalletSection` e substituir `<ProjectsSection>`
- [ ] 4.2 Remover import de `ProjectsSection` (manter arquivo para referência)

### Fase 5 — Polimento Mobile
- [ ] 5.1 Em telas < 1024px: cards miniatura com `rotate` alternado (`index % 2 === 0 ? -1 : 1` graus)
- [ ] 5.2 Card ativo expande para mostrar info panel embaixo (sem painel sticky)
- [ ] 5.3 Scroll automático para o card ativo quando trocar

### Fase 6 — Build e Push
- [ ] 6.1 `npm run build` sem erros
- [ ] 6.2 Commit: `feat: apple wallet section + jfl fotos project`
- [ ] 6.3 Push para a branch `main`
