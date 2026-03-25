# Proposal: Portfolio Premium DaviCode

## Contexto
O DaviCode possui hoje **~10 landing pages** criadas para clientes locais de Diadema/SBC (mecânicas, clínicas, veterinárias). O portfólio atual está desatualizado ou inexistente como projeto no workspace. O usuário precisa de uma página de portfólio que:

1. **Impressione clientes** em potencial assim que aberta — é a vitrine principal.
2. **Mostre os projetos reais** com destaque visual (screenshots/mockups + links).
3. **Transmita credibilidade e expertise** como criador de landing pages premium.
4. **Seja rápida e mobile-first**, pois clientes acessarão pelo celular.

---

## Projetos a Exibir

| # | Projeto | Tipo | URL Demonstração |
|---|---|---|---|
| 1 | NKAM Suspensão | Mecânica | https://nkam.davicode.me |
| 2 | Dra. Ingrid Segatti | Odontologia | https://draingrid.davicode.me |
| 3 | TratoCão Clínica Vet. | Veterinária | https://tratocao.davicode.me |
| 4 | Oficina JAC Motors | Mecânica | — |
| 5 | RECAM Amortecedores | Mecânica | — |
| 6 | Mecânica Índia | Mecânica | — |
| 7 | Mecânica Japonês | Mecânica | — |
| 8 | AmigoVet | Veterinária | — |
| 9 | Suspensão LCAR | Mecânica | — |
| 10 | Centro Automotivo Águia | Mecânica | — |

> Projetos a **remover** do portfólio antigo: os 2 genéricos, manter apenas o **SGC**.

---

## Requisitos Funcionais

1. **Hero Section**: Nome + tagline premium. Fundo escuro com gradiente animado ou partículas sutis.
2. **Grid de Projetos**: Cards horizontais (desktop) empilhados (mobile) com:
   - Screenshot ou mockup device do projeto (tela de celular/laptop animada)
   - Título, tipo de negócio, chips de tecnologia usada
   - Botão "Ver Projeto" → link externo / nova aba
   - Hover: efeito parallax leve no card / shine
3. **Seção Skills/Diferencial**: O que o DaviCode entrega (Landing Pages Premium, Design System, Mobile First, etc).
4. **CTA de Contato**: WhatsApp / link direto para conversa.
5. **Footer**: Links sociais, DaviCode branding.

## Requisitos Não-Funcionais

- **Performance**: Vite + React, otimizado (sem imagens pesadas desnecessárias).
- **Mobile First**: 100% funcional no celular, testado nos breakpoints `sm`, `md`, `lg`.
- **Sem Backend**: portfólio estático puro.
- **Design System**: escuro luxuoso com acentos neon ou dourados.

---

## User Stories

1. Como **potencial cliente**, quero ver rapidamente que tipo de trabalho o DaviCode faz ao abrir o portfólio.
2. Como **potencial cliente**, quero clicar em um projeto e ir direto à landing page real para avaliar a qualidade.
3. Como **potencial cliente mobile**, quero navegar confortavelmente pelos projetos sem precisar fazer zoom.

---

## Critérios de Aceite

- [ ] Todos os projetos da lista acima com card individual.
- [ ] Links funcionais para os 3 projetos com URL pública (nkam, draingrid, tratocao).
- [ ] Design escuro premium — completamente diferente das LPs (virada de visual).
- [ ] Botão WhatsApp para contato direto.
- [ ] Build sem erros, deploy no GitHub.
