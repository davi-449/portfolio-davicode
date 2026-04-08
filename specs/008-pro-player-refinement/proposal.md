# Proposal: Pro-Player Refinement (DaviCode 2026)

## Visão Geral
Elevar a qualidade do portfólio para o nível "Pro Player", focando em profundidade visual no Hero, redesign da galeria de projetos para incluir o **GestorPulse (CRM ERP)** e uma página "Sobre" mais imersiva e profissional.

## Requisitos Funcionais

### RF01 — Hero Atmosférico (Silver Mesh)
- Implementar um gradiente de malha animado no fundo do `SilverHero`.
- Adicionar um efeito de "Grainy Glass" sobre o fundo para dar textura de papel premium ou metal escovado.

### RF02 — GestorPulse Integration
- Adicionar o projeto **GestorPulse** em `projects.ts` como projeto destaque (Featured).
- Descrição: "Sistema CRM/ERP Full Stack completo para Corretoras de Seguros. Engenharia de processos, gestão de apólices e dashboards financeiros."

### RF03 — Redesign Project Cards
- Implementar o novo componente `ProjectCard` com bordas reflexivas e layout de produto.
- Adicionar tags de tecnologia em `font-mono` com borda prata.

### RF04 — About Page "Pro"
- Redesenhar o cabeçalho da página Sobre.
- Unificar a tipografia `text-silver` em áreas estratégicas.

---

## Critérios de Aceite
- [ ] O fundo do Hero deve se mover suavemente sem afetar a performance.
- [ ] O projeto GestorPulse deve aparecer no topo da galeria.
- [ ] A página Sobre deve transmitir autoridade técnica (menos "olá" e mais "engenharia").
