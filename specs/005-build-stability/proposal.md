# Proposal: Estabilidade de Build (DaviCode Portfolio)

## Visão Geral
Corrigir erros de compilação CSS e mapear corretamente o tema God-Tier no Tailwind para garantir que o deploy no Netlify passe sem falhas, mantendo 100% da estética 2026.

## Requisitos Funcionais

### RF01 — Mapeamento de Tema (Emerald Precision)
Integrar `primary` (#10b981) e `zinc-950` (#09090b) no `tailwind.config.js`.

### RF02 — Estabilização de CSS
Refatorar `src/index.css` para usar propriedades CSS nativas onde o Tailwind @apply falhou (ex: `::selection`).

### RF03 — Validação Rigorosa
Rodar build de produção local (`npx vite build`) antes do commit final.

---

## Critérios de Aceite
- [ ] O comando `npm run build` deve rodar localmente sem erros de PostCSS.
- [ ] O deploy no Netlify deve finalizar em "Complete".
- [ ] A cor de seleção do texto (Emerald) deve funcionar corretamente.
