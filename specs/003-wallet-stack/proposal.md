# Proposal — 003: Efeito Stack Real (Apple Wallet)

## Problema
A implementação `002-wallet-jfl` exibiu os cards como uma lista vertical comum — não cria a sensação de "baralho" empilhado do Apple Wallet. O visitante não sente que os projetos são cartões que vão sendo revelados um debaixo do outro.

## Objetivo
Implementar um efeito **scroll-driven stack** genuíno:
- Todos os cards ficam sobrepostos (stacked) num container fixo (sticky)
- Conforme o usuário scrolla, o card do topo sai pela parte superior (translateY → -100%)
- O card de baixo sobre para a posição "ativa" com leve scale e glow
- O info panel esquerdo troca de conteúdo com AnimatePresence

## Referência Visual
![Apple Wallet](referência enviada pelo usuário)
- Cards empilhados, mostrando só a borda do cartão inferior
- O scroll empurra o card ativo pra cima, revelando o próximo

---

## Requisitos Funcionais

### RF01 — Container Sticky com área de scroll longa
- O container raiz da seção tem `height: 100vh * (nProjetos + 1)` para gerar scroll
- Dentro, um filho com `position: sticky, top: 0, height: 100vh` mantém tudo visível

### RF02 — Cards Empilhados (Deck)
- Todos os 11 cards são renderizados com `position: absolute`
- A ordem Z vai do último projeto (z mais baixo) ao primeiro (z mais alto)
- O card ativo (`index === activeIndex`) está no topo com glow e scale normal
- Os cards abaixo aparecem com leve `translateY(+N * 14px)` e `scale(1 - N * 0.04)` para criar profundidade

### RF03 — Animação de Saída de Carta
- Quando o scroll avança, o card ativo recebe `translateY(-110%)` com easing suave
- O próximo card sobe para a posição ativa
- A transição é suave (~600ms) sem travar o scroll

### RF04 — Navegação por Scroll
- `useScroll` + `useTransform` (framer-motion) mapeiam o scrollY para o `activeIndex`
- Cada "página" de scroll = um card (ex: scroll de 0-100px → card 0, 100-200px → card 1...)

### RF05 — Info Panel Esquerdo (mantido)
- Igual ao 002: painel sticky com `AnimatePresence` trocando as infos do projeto ativo
- Em mobile: cards empilhados centralizados + info panel abaixo / collapse

## User Stories

| ID | Story |
|---|---|
| US01 | Quero ver os projetos como um baralho de cartas onde o scroll revela um por um |
| US02 | Quero sentir a profundidade visual — ver as cartas "embaixo" esperando sua vez |
| US03 | Quero que a info do lado esquerdo atualize conforme passo pelos projetos |

## Critérios de Aceite
- [ ] Container sticky ocupa tela inteira durante o scroll da seção
- [ ] Cards se empilham visualmente mostrando bordas dos anteriores
- [ ] Scroll contínuo revela os projetos de forma orgânica e fluida
- [ ] Nenhum "salto" visual entre as trocas de card
- [ ] Build de produção sem erros
