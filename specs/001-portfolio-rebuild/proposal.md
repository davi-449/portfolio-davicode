# 📋 Proposal — Portfolio DaviCode Rebuild (001-portfolio-rebuild)

## Visão Geral

Reconstruir o portfólio pessoal da DaviCode, atualmente uma SPA single-page sem a seção de projetos renderizada, transformando-o em um portfólio multi-page imersivo de padrão 2026 que:
- Posicione Davi como **Desenvolvedor No-Code**
- Exiba as **11 landing pages reais** como cases de portfólio
- Aplique a estética **Liquid Glass + Maximalismo Tátil** da skill `ux-ui-architect-2026`
- Gere leads via WhatsApp com CTA flutuante e formulário de contato

---

## Requisitos Funcionais

### RF01 — Navegação Multi-Page
O portfólio deve ter 4 páginas com rotas distintas:
- `/` — Home (Hero + Highlights + CTA)
- `/projetos` — Galeria completa de projetos
- `/sobre` — Sobre o Davi, stack, experiência
- `/contato` — Links diretos para Email e WhatsApp

### RF02 — Hero Section Maximalista
- Tipografia statement 7xl+ com o nome "DaviCode"
- Subtítulo de posicionamento (Desenvolvedor No-Code focado em alta conversão)
- Partículas ou aurora animada de fundo
- Stats de impacto: projetos entregues, segmentos atendidos, nota de avaliação
- Dois CTAs: "Ver Portfólio" + "Falar no WhatsApp"

### RF03 — Galeria de Projetos Imersiva
- Cards com screenshots reais dos projetos em device mockups (laptop/mobile frame)
- Filtro por categoria: Todos, Mecânica, Veterinária, Odontologia, Fotografia
- Click abre modal ou página com detalhes do projeto
- Tags de tecnologia, link live, descrição
- Animação de entrada staggered

### RF04 — Seção Sobre
- Timeline ou reveal de experiência
- Stack técnica com ícones visuais (React, TypeScript, Tailwind, Framer Motion, Node, Supabase)
- Mini bio profissional
- Métricas de carreira

### RF05 — Contato + WhatsApp Flutuante
- Links diretos para Email e WhatsApp (sem formulário por enquanto)
- Botão WhatsApp flutuante em TODAS as páginas (canto inferior direito)
- Link correto: `https://wa.me/5511956076123`

### RF06 — SEO & Performance
- Meta tags completas por página (title, description, OG tags)
- Favicon customizado
- Lighthouse Performance > 85
- Lazy loading de imagens
- Semantic HTML em todas as seções

---

## User Stories

### US01 — Visitante Potencial Cliente
> Como um **dono de negócio local** que precisa de uma landing page, eu quero **ver exemplos reais de trabalhos anteriores** para que eu possa **avaliar a qualidade e decidir se esse profissional é bom o suficiente para o meu projeto**.

### US02 — Visitante Técnico / Recrutador
> Como um **recrutador ou dev** que acessa o portfólio, eu quero **entender rapidamente o stack técnico e a experiência profissional** para que eu possa **avaliar se existe fit para uma oportunidade**.

### US03 — Visitante Mobile
> Como um **usuário em celular** que recebeu o link via WhatsApp, eu quero **navegar rapidamente e ver os trabalhos sem travamentos** para que eu possa **entrar em contato imediatamente se gostar**.

---

## Critérios de Aceite

- [ ] As 4 páginas (Home, Projetos, Sobre, Contato) renderizam corretamente
- [ ] A seção de projetos exibe os 11 projetos com imagens e links
- [ ] O filtro de categorias funciona
- [ ] O CTA flutuante de WhatsApp está visível em todas as páginas
- [ ] O site carrega em < 2s no mobile (Lighthouse)
- [ ] Todas as meta tags SEO estão preenchidas
- [ ] `:focus-visible` funciona em todos os elementos interativos
- [ ] Build passa sem erros (`npm run build`)

---

## BDD Scenarios

### Cenário: Navegação entre páginas
- **Given (Dado):** O visitante acessa a página inicial do portfólio
- **When (Quando):** Clica em "Projetos" na navbar
- **Then (Então):** É redirecionado para `/projetos` com transição suave, e a lista de 11 projetos é exibida com animação staggered

### Cenário: Filtro de projetos por categoria
- **Given (Dado):** O visitante está na página `/projetos` com 11 projetos exibidos
- **When (Quando):** Clica no filtro "Mecânica"
- **Then (Então):** Apenas os 7 projetos de mecânica são exibidos, com animação de reflow suave

### Cenário: WhatsApp CTA flutuante
- **Given (Dado):** O visitante está em QUALQUER página do portfólio (Home, Projetos, Sobre ou Contato)
- **When (Quando):** Faz scroll para baixo na página
- **Then (Então):** O botão flutuante de WhatsApp permanece fixo no canto inferior direito, visível e clicável

### Cenário: Acesso mobile com performance
- **Given (Dado):** Um visitante acessa o portfólio em um dispositivo mobile via 4G
- **When (Quando):** A página termina de carregar
- **Then (Então):** O Lighthouse Performance score é ≥ 85, e o LCP (Largest Contentful Paint) é < 2.5s

### Cenário: Acessibilidade de navegação por teclado
- **Given (Dado):** Um usuário navega usando apenas o teclado (Tab)
- **When (Quando):** Pressiona Tab para percorrer os elementos da navbar e CTAs
- **Then (Então):** Cada elemento interativo recebe um `:focus-visible` com outline de alto contraste (2px solid accent), sem obstrução visual

### Cenário: Clique em link de contato
- **Given (Dado):** O visitante está na página `/contato`
- **When (Quando):** Clica no botão de "E-mail" ou "WhatsApp"
- **Then (Então):** É redirecionado para o app de e-mail ou WhatsApp do dispositivo com o contato preenchido
