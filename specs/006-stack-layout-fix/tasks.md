# Plano de Implementação: Stack Layout Fix (006)

O seguinte checklist rigoroso deve ser cumprido para resolver o layout problemático:

## 1. Fase de Estruturação Responsiva (StackSection.tsx)
- [x] Alterar o wrapper principal de `grid col-2` para `flex flex-col lg:flex-row`.
- [x] Trocar a ordem física (ou classes `order-`) para garantir que na tela menor a coluna das Imagens (Deck) venha PRIMEIRO (em cima) e do Texto venha SEGUNDO (em baixo).
- [x] Atribuir flex-basis de `lg:w-2/5` (ou 40%) para a zona do Texto.
- [x] Atribuir flex-basis de `lg:w-3/5` (ou 60%) para a zona do Deck/Imagens.
- [x] Configurar alturas dinâmicas para o Mobile (`vh` base) para garantir que ambos o deck e o texto caibam na tela sem colidir. (Ex: o wrap do painel de texto deve ficar preso na metade debaixo).

## 2. Escalonamento Magnífico das Cartas (StackCard.tsx / Deck Wrap)
- [x] O invólucro (wrapper absolute) do Deck no `StackSection` não deve ficar preso a `max-w-[560px]`. Subir para `max-w-[800px]` em telas `lg` e `xl` para aproveitar monitores largos.
- [x] Centralizar as cartas do deck perfeitamente no novo container grande.
- [x] Conferir se o Title e Topbar do Safari-mock continuam responsivos sob escala gigante.

## 3. Revisão Cirúrgica e Animações
- [x] Checar se a animação do eixo Z e distâncias da carta ativa continuam suaves com cartas super-dimensionadas no Desktop.
- [x] Reduzir text sizing do mock da URL em mobile se a carta apertar demais para o iPhone.

## 4. Build e QA Final
- [x] Rodar `npm run build` para checar falhas de Typescript.
- [x] Testar simuladores de tamanhos (DevTools: Mobile M e Desktop 1440px).
- [x] Confirmar fix e comitar a Spec 006 com push no Master.
