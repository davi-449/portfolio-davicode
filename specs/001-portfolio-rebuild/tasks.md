# ✅ Tasks — Portfolio DaviCode Rebuild (001-portfolio-rebuild)

## Fase 0: Preparação
- [x] Instalar `react-router-dom` v7
- [x] Criar estrutura de pastas: `src/pages/`, `src/components/layout/`
- [x] Gerar screenshots dos projetos live via Firecrawl e salvar em `public/mockups/`
- [x] Gerar screenshots dos projetos locais com `npm run dev` e captura e salvar em `public/mockups/`

## Fase 1: Layout Global & Routing
- [x] Criar `src/components/layout/Navbar.tsx` (glass navbar fixo com links para 4 páginas)
- [x] Criar `src/components/layout/Footer.tsx` (footer global com links e redes sociais)
- [x] Criar `src/components/layout/FloatingWhatsApp.tsx` (botão flutuante em todas as páginas)
- [x] Criar `src/components/layout/PageTransition.tsx` (AnimatePresence wrapper para transições)
- [x] Configurar React Router em `App.tsx` com 4 rotas: `/`, `/projetos`, `/sobre`, `/contato`
- [x] Atualizar `index.html` com meta tags SEO completas (title, description, OG tags, favicon)

## Fase 2: Home Page (`/`)
- [x] Refatorar `HeroSection.tsx` — manter partículas/aurora, atualizar para "Desenvolvedor No-Code"
- [x] Corrigir WhatsApp link (substituir placeholder pelo `5511956076123`)
- [x] Criar `HighlightsSection.tsx` — exibir top 3 projetos com cards glassmórficos e link para `/projetos`
- [x] Manter `ServicesSection.tsx` com StickyCards (já está bom)
- [x] Criar `StatsStrip.tsx` — strip de métricas animadas (projetos, segmentos, avaliação)
- [x] Criar `src/pages/HomePage.tsx` montando: Hero → Stats → Highlights → Services

## Fase 3: Projetos Page (`/projetos`)
- [x] Criar `FilterBar.tsx` — filtro por categoria: Todos, Mecânica, Veterinária, Odontologia, Fotografia
- [x] Refatorar `ProjectCard.tsx` — adicionar screenshot em CSS device mockup frame
- [x] Criar `ProjectsGallery.tsx` — grid/lista de projetos com filtro e animação staggered
- [x] Criar `src/pages/ProjectsPage.tsx` montando: Title → Filters → Gallery
- [x] Atualizar `data/projects.ts` — adicionar campo `image` com paths reais

## Fase 4: Sobre Page (`/sobre`)
- [x] Criar `AboutTimeline.tsx` — timeline de experiência com scroll reveal
- [x] Criar `TechStack.tsx` — grid visual de tecnologias com ícones/logos
- [x] Criar `src/pages/AboutPage.tsx` montando: Bio → Timeline → Stack → Métricas

## Fase 5: Contato Page (`/contato`)
- [x] Criar componente com links (E-mail e WhatsApp) e redes (Instagram, GitHub)
- [x] Criar `src/pages/ContactPage.tsx` montando essas sections diretas, sem Form por enquanto

## Fase 6: Quality Gate (UX/UI 2026)
- [x] Revisar TODAS as páginas contra a skill `ux-ui-architect-2026`:
  - [x] Apple Liquid Glass: superfícies glassmórficas em cards, navbar e modals
  - [x] Maximalismo Tátil: tipografia 7xl+ no hero, cores dopamínicas, alto contraste
  - [x] WCAG 2.2: `:focus-visible` em todos os interativos, alvos ≥ 44px, contraste ≥ 4.5:1
  - [x] Microinterações: hover effects, scroll triggers, page transitions, CTA pulse
  - [x] Sombras multicamadas (não `shadow-lg` genérico)
- [x] Adicionar `prefers-reduced-motion` media query
- [x] Adicionar `skip-to-content` link
- [x] Verificar `aria-label` em todos os ícones sem texto

## Fase 7: Build & Deploy
- [x] Executar `npm run lint` — zero erros
- [x] Executar `npm run build` — zero erros
- [x] Commit: `feat(portfolio): rebuild completo com design 2026 e multi-page`
- [ ] Push para o GitHub (que já fará o deploy automático p/ Netlify / davicode.me)

