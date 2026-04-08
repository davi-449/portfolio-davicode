# Proposal: Monochrome Precision (Black, White & Silver)

## Visão Geral
Redefinir o DaviCode Portfolio para uma estética minimalista de alta performance. Abandonamos o excesso de cores e animações agressivas em favor de uma interface que exala maturidade técnica e precisão industrial.

## Requisitos Funcionais

### RF01 — Unificação Geométrica
- Padrão global de arredondamento: `8px` (`rounded-lg`).
- Bordas fixas de `0.5px` ou `1px` em tons de prata/zinco.

### RF02 — Paleta Silver Monocromática
- **Background:** `zinc-950` (#09090b).
- **Texto:** `white` (headlines), `zinc-400` (body).
- **Acentos:** `zinc-200` (prata) para ícones e bordas interativas.

### RF03 — Hero "The Minimalist"
- Redesign da Hero para ser limpa: Título focado, subtítulo legível e um CTA que não grita, mas convida.
- Animações de fade sutil (opacidade + leve deslocamento Y).

---

## Critérios de Aceite
- [ ] Zero cores (verde, roxo, rosa) visíveis em qualquer seção.
- [ ] Bordas de todos os cards idênticas (sem mistura de redonda com reta).
- [ ] Build de produção sem warnings de CSS.
- [ ] Lighthouse Performance > 95.

---

## BDD Scenarios

### Cenário: Elegância na Primeira Impressão
- **Given:** O usuário acessa o portfólio.
- **When:** A página carrega.
- **Then:** O usuário deve ver uma interface "limpa", onde a tipografia branca sobre o fundo preto gera um contraste perfeito, com detalhes em prata que brilham suavemente ao passar o mouse.
