# Proposal — 005: Rich Preview Cards

## Contexto
A seção atual de projetos usa um deck de cartas empilhadas com efeito de parallax. O usuário quer elevar a experiência visual com um conceito mais rico e reconhecível: cards que parecem **rich link previews** (estilo Google Search / Notion / Discord) mas num visual premium dark do branding "Midnight Forge".

---

## Conceito Visual

Cada card de projeto deve se parecer com aquele preview que aparece ao passagear um link rico — com:

```
┌─────────────────────────────────────────┐
│  🌐  nkam.davicode.me              ↗   │  ← URL bar (estilizada, dark)
│─────────────────────────────────────────│
│                                         │
│         [SCREENSHOT DO SITE]            │  ← Imagem do site (16:9)
│                                         │
│─────────────────────────────────────────│
│  NKAM Suspensão              Mecânica  │  ← Título + badge de categoria
└─────────────────────────────────────────┘
```

Cards maiores que os atuais, com sombra e borda sutil em `accent/20`.

---

## Requisitos Funcionais

### RF01 — Rich Preview Card
- Cada card tem **3 zonas**: URL bar, Screenshot, Metadata footer
- **URL bar**: favicon (emoji do nicho), domínio limpo (ex: `nkam.davicode.me`), ícone de link externo clicável
- **Screenshot**: `aspect-[16/9]`, `object-cover object-top`, sem overlay escuro
- **Footer**: título do projeto à esquerda, badge da categoria à direita
  - Badge: apenas `text-text-muted`, sem cor de projeto — somente `accent` quando ativo

### RF02 — Dots verticais à DIREITA do deck
- Coluna de dots fica à DIREITA do deck (não no info panel)
- Comportamento de "accordion vertical":
  - Dot ativo: `height: 40px`, `width: 4px`, `bg-accent` — é um pill alongado
  - Dots vizinhos: `height: 16px`
  - Dots distantes: `height: 8px`
  - Todos: `width: 4px`, `rounded-full`, animação spring

### RF03 — Info Panel: Animação Vertical Suave
- Trocar a animação horizontal (que ficou estranha) por um **fade + slide vertical sutil**:
  - `initial: { opacity: 0, y: 16 }` → `animate: { opacity: 1, y: 0 }` → `exit: { opacity: 0, y: -16 }`
  - Sem blur, sem horizontal, sem popLayout — usar `mode="wait"` com `duration: 0.25`
- O card de info deve ficar **sem dots proprios** (os dots ficam só no deck)

### RF04 — Cards Maiores
- Aumentar de `max-w-[500px]` para `max-w-[560px]` no desktop
- No mobile: `100%` da largura disponível, altura proporcional

### RF05 — Scroll ainda controla o deck (animação do deck sem mudança)
- O empilhamento/parallax do deck permanece exatamente igual
- Só o ESTILO do card muda (de "imagem simples" para "rich preview")

---

## User Stories

| ID | Story |
|---|---|
| US01 | Quero que o card pareça um preview rico de um link, igual vejo no Google/Notion |
| US02 | Quero os dots à direita do deck, fora do card de info |
| US03 | Quero que o dot ativo fique alongado (pill) e os outros pequenos |
| US04 | Quero que a troca de info no painel esquerdo seja fluida mas vertical, não horizontal |

---

## Critérios de Aceite
- [ ] Cada card tem URL bar (favicon + domínio + link icon), screenshot 16:9 e metadata footer
- [ ] Dots verticais pill à DIREITA do deck respondem ao activeIndex
- [ ] Painel info usa fade + slide Y vertical (sem blur, sem X)
- [ ] Cards ligeiramente maiores (max-w-[560px])
- [ ] Build sem erros TypeScript
- [ ] Push no GitHub
