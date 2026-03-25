# Tasks — 005: Rich Preview Cards

## Fase 1 — Atualizar `projects.ts`
- [ ] 1.1 Adicionar campo `favicon: string` na interface `Project`
- [ ] 1.2 Adicionar emoji por nicho em cada projeto:
  - Odontologia → `🦷`
  - Mecânica → `🔧`
  - Veterinário → `🐾`
  - Fotografia → `📸`

## Fase 2 — Reescrever `StackCard.tsx`
- [ ] 2.1 Criar **Zona 1 — URL Bar** com traffic lights cosméticos (3 bolinhas coloridas macOS), campo de URL estilizado com `favicon + domínio + ExternalLink icon`
- [ ] 2.2 Extrair o domínio da URL do projeto com `new URL(project.url).hostname`; fallback: `'davicode.me'`
- [ ] 2.3 Criar **Zona 2 — Screenshot** com `aspect-[16/9]`, `object-cover object-top`; manter o sistema de parallax por `positionOffset`
- [ ] 2.4 Criar **Zona 3 — Metadata Footer**: título do site + badge de categoria (sem cor do projeto — apenas `text-text-muted`)
- [ ] 2.5 Aumentar escala base do card: `max-w-[560px]`
- [ ] 2.6 Manter lógica de `positionOffset` (translateY, scale, opacity, zIndex) — apenas o layout interno muda

## Fase 3 — Atualizar `StackSection.tsx`
- [ ] 3.1 **Dots**: mover de onde estão para a DIREITA do deck de cartas
  - Remover dots do info panel (mobile e desktop)
  - Adicionar coluna de dots `flex-col gap-2` à direita do deck
  - Altura animada: ativo=`40px`, vizinhos=`16px`, demais=`8px`; largura fixo `4px`; cor `accent` quando ativo com glow
  - Dots clicáveis: chamar `navigateTo(i)` ao clicar
- [ ] 3.2 **Info panel**: substituir animação atual (slide horizontal) por fade + slide Y vertical:
  - `initial: { opacity: 0, y: 16 }` → `animate: { opacity: 1, y: 0 }` → `exit: { opacity: 0, y: -16 }`
  - `transition: { duration: 0.25, ease: 'easeOut' }`
  - `AnimatePresence mode="wait"` (não "popLayout")
- [ ] 3.3 Remover props `direction` e `slideVariants` que não são mais necessários
- [ ] 3.4 Ajustar o container do deck para ter `flex flex-row items-center gap-3` (deck + dots colados)

## Fase 4 — Build e Deploy
- [ ] 4.1 `npm run build` — zero erros TypeScript
- [ ] 4.2 commit: `feat: 005 rich preview cards — browser-style stack + vertical dots`
- [ ] 4.3 push para `main`
