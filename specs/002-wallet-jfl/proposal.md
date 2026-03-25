# Proposal — 002: Seção Apple Wallet + JFL Fotos

## Contexto
O portfólio DaviCode Premium (`portfolio-davicode`) exibe 10 landing pages em `ProjectCard` alternados L/R. O cliente quer substituir essa seção por uma experiência muito mais imersiva e interativa, inspirada no Apple Wallet, e incluir o 11º projeto (JFL Fotos).

## Requisitos Funcionais

### RF01 — Seção Apple Wallet
- A seção deve exibir todos os projetos como "cartões empilháveis"
- Um cartão por vez é destacado como "ativo"
- O card ativo exibe as informações completas (título, categoria, descrição, tags, link/CTA)
- Ao scrollar, o próximo card se torna ativo

### RF02 — Painel Informativo Fixo (Sticky)
- Lado esquerdo (desktop): painel sticky que exibe as infos do projeto ativo
- As informações devem trocar com animação suave (fade + slide) via `AnimatePresence`
- O painel deve permanecer visível durante toda a navegação da seção

### RF03 — Cards Stack (Scrollable)
- Lado direito (desktop): coluna com todos os cards em miniatura
- Card ativo tem brilho/glow com a cor da marca do projeto
- Cards não ativos têm leve opacidade reduzida e empilhamento visual estilo "fan"
- Hover num card o destaca e o torna ativo

### RF04 — Mobile First
- Em mobile: cards empilhados verticalmente com leve efeito fan (rotate em cascata)
- Tap num card o expande como "ativo" exibindo suas infos abaixo
- Animação de troca suave ao selecionar outro card

### RF05 — JFL Fotos (11º Projeto)
- Novo projeto adicionado ao array em `projects.ts`
- Screenshot capturado em `/public/mockups/jfl-fotos.png`

## User Stories

| ID | Story |
|---|---|
| US01 | Como visitante, quero scrollar e ver os projetos trocando de forma fluida sem perder o contexto |
| US02 | Como visitante em mobile, quero tocar nos cards para ver os detalhes de cada projeto |
| US03 | Como cliente potencial, quero saber sobre cada projeto com seus tags e link de acesso direto |

## Critérios de Aceite

- [ ] 11 projetos visíveis na seção (incluindo JFL Fotos)
- [ ] Card sticky atualiza ao entrar em viewport na coluna direita (useInView/scroll)
- [ ] Animação `AnimatePresence` funcionando na troca de projetos do painel fixo
- [ ] Hover num card miniatura muda o card ativo
- [ ] Responsividade: funciona em 375px (mobile) e 1440px (desktop)
- [ ] Build de produção sem erros (`npm run build`)
