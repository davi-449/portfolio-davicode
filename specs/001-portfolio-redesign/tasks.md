# Tasks: Portfolio Premium DaviCode

## Fase 0 — Substituição Emergencial (Dra. Ingrid)
- [ ] 0.1 Copiar imagem IA gerada de dentista placeholder para `lp-dra-ingrid-diadema/src/assets/`.
- [ ] 0.2 Atualizar `TrustSection.tsx` para apontar para o novo placeholder.
- [ ] 0.3 Commit + push na `lp-dra-ingrid-diadema`.

## Fase 1 — Scaffold do Projeto
- [ ] 1.1 `npx create-vite@latest portfolio-davicode -- --template react-ts`
- [ ] 1.2 Instalar dependências: `framer-motion`, `lucide-react`
- [ ] 1.3 Configurar `tailwind.config.ts` com tokens "Midnight Forge".
- [ ] 1.4 Atualizar `index.html` com SEO, fonts (Space Grotesk + Space Mono + Inter).
- [ ] 1.5 Atualizar `src/index.css` com design system (tokens, grid, animações base).

## Fase 2 — Hero Section
- [ ] 2.1 Criar `src/components/sections/HeroSection.tsx`.
- [ ] 2.2 Tag monoespacada animada `// criador de experiências digitais`.
- [ ] 2.3 H1 `DaviCode` com animação stagger de letras.
- [ ] 2.4 Subtítulo + métricas animadas (10+ projetos, etc).
- [ ] 2.5 Botões de CTA (Ver Projetos + WhatsApp).
- [ ] 2.6 Background: blobs gradiente CSS `@keyframes float`.

## Fase 3 — Dados dos Projetos
- [ ] 3.1 Criar `src/data/projects.ts` com array dos 10 projetos.
- [ ] 3.2 Incluir: id, title, category, description, tags, url (se tiver), color, image.

## Fase 4 — ProjectCard + Grid
- [ ] 4.1 Criar `src/components/ui/ProjectCard.tsx` com variantes featured e default.
- [ ] 4.2 Criar `src/components/sections/ProjectsSection.tsx` com a grade de projetos.
- [ ] 4.3 Faixas laterais coloridas por categoria.
- [ ] 4.4 Tags/chips de features.
- [ ] 4.5 Hover: shine + border glow + translate.
- [ ] 4.6 Botão "Ver Projeto →" / "Demo em breve" com links condicionais.

## Fase 5 — Features Strip
- [ ] 5.1 Criar `src/components/sections/FeaturesStrip.tsx`.
- [ ] 5.2 6 cards: Design Premium, Mobile First, SEO, Entrega Rápida, Google Maps, WhatsApp CTA.
- [ ] 5.3 Animação stagger 0.08s `.

## Fase 6 — CTA Final + Footer
- [ ] 6.1 Criar `src/components/sections/ContactCTA.tsx`.
- [ ] 6.2 Fundo: gradiente claro do Accent.
- [ ] 6.3 Botão WhatsApp grande pulsante.
- [ ] 6.4 Footer com links sociais + DaviCodeBadge.

## Fase 7 — Polimento
- [ ] 7.1 Scroll behavior smooth, AnimatePresence nas seções.
- [ ] 7.2 Floating WhatsApp button global.
- [ ] 7.3 `prefers-reduced-motion` respeitado.

## Fase 8 — Validação e Deploy
- [ ] 8.1 `npm run lint && npm run build` — 0 erros.
- [ ] 8.2 `git init && git remote add origin ... && git push`.
- [ ] 8.3 Configurar domínio `davicode.me` ou `portfolio.davicode.me`.
