# Proposal — 004: Portfólio Overhaul Completo

## Problemas Identificados

### P1 — StackSection: Layout assimétrico e mal proporcionado
- O card (deck) está pequeno demais e mal posicionado em relação ao painel de info
- Os dois lados não tem altura equivalente — sem alinhamento vertical verdadeiro
- O painel de info (esquerdo) não está centralizado verticalmente no viewport

### P2 — Mobile: Info Panel acima do deck (errado!)
- No mobile, o `<InfoPanel>` aparece ANTES dos cards, empurrando o deck para baixo
- O comportamento correto: o deck deve aparecer PRIMEIRO, e o info panel expande abaixo ao scrollar
- O scroll do baralho deve subir de baixo para cima (cards sobem)

### P3 — Bordas douradas / glow fora do branding
- O `boxShadow` com a cor de cada projeto (`#f59e0b`, `#f0c060` etc.) rompe a identidade escura do portfólio
- O indicador de "ativo" deve ser sutil: uma linha fina de 1px na cor `accent` (#7c6aff) do design system, sem glow agressivo
- O dot/ring colorido deve ser removido ou muito mais discreto

### P4 — Outras seções ficando para trás
- Hero, FeaturesStrip e ContactCTA foram criadas antes do refinamento da StackSection
- Com o nível de qualidade elevado, as demais seções precisam ser revisadas em qualidade visual e UX

---

## Objetivos

1. **Refatorar completamente o `StackSection`:** proporção correta, layout full-height, simetria
2. **Corrigir ordem mobile:** deck primeiro, info abaixo — nunca ao contrário
3. **Branding coeso:** remover bordas coloridas, substituir por indicador sutil em violeta `#7c6aff`
4. **Elevar demais seções:** Hero com partículas/aurora, Features com ícones premium e ContactCTA modernizado

---

## Requisitos Funcionais

### RF01 — StackSection: Layout Simetrico Full-Height
- Container sticky `height: 100vh`, com dois lados que se dividem em `50/50` do viewport
- O deck de cards deve ter **a mesma altura** do info panel (`min-h-full`, esticado)
- Cards com `aspect-[16/9]` mas container se estende para preencher verticalmente

### RF02 — Proporção do Deck
- O container do deck tem `width: 100%` e altura igual à do wrapper sticky
- Os cards são renderizados com `max-width: 540px, width: 100%`, centralizados
- A âncora de empilhamento é o **centro** do container, não o topo

### RF03 — Mobile: "Cards First"
- Em `< lg`: coluna única, cards aparecem PRIMEIRO (`order-1`), info panel abaixo (`order-2`)
- Info panel no mobile: expandido, sem collapse (scroll é o gatilho de mudança)

### RF04 — Indicador de Card Ativo: Branding Dark
- Remover todos os `boxShadow` com cores de projeto
- Substituir por: borda `1px solid rgba(124,106,255,0.7)` quando ativo (cor do design system `accent`)
- Sombra padrão de todos os cards: `0 8px 32px rgba(0,0,0,0.5)` — sem cor

### RF05 — Hero Section Elevada
- Background: grid de pontos com aurora (gradient blob animado atrás)
- Título com gradiente texto (violeta → branco)
- Subtítulo com typing effect ou simplesmente mais refinado
- CTA principal animado com micro-hover

### RF06 — FeaturesStrip Elevada
- Ícones maiores, em containers `glass-card` individuais com hover state
- Números contadores animados (`0 → N` ao entrar em viewport)

### RF07 — ContactCTA Elevada
- Background com noise texture overlay sutil
- Layout centralizado com card container (`glass-card`)
- CTA buttons com efeito ripple

---

## User Stories

| ID | Story |
|---|---|
| US01 | Quero ver os cards de projetos centralizados visualmente, do mesmo tamanho do painel de info |
| US02 | No celular, quero ver os cards PRIMEIRO e rolar pra baixo pra ler as informações |
| US03 | Quero uma identidade visual coesa — sem bordas coloridas aleatórias |
| US04 | Quero um portfólio que impressione do Hero ao Footer, não só na seção de projetos |

---

## Critérios de Aceite
- [ ] Deck e Info Panel têm a mesma altura visual e estão alinhados ao centro do viewport
- [ ] Mobile: Cards aparecem ACIMA do info panel
- [ ] Nenhum `boxShadow` com cor do projeto — apenas accent violet sutil
- [ ] Hero tem aurora/gradient blob animado
- [ ] FeaturesStrip tem hover states e contadores animados
- [ ] ContactCTA tem layout card-based
- [ ] Build sem erros e push no GitHub
