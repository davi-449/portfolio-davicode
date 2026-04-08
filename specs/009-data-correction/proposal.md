# Proposal: Correção de Dados e Restauração de Projetos

## Visão Geral
Restaurar os 11 projetos originais que foram removidos acidentalmente e renomear o projeto de CRM para **Tork CRM**. Remover o projeto fictício "TechVision SaaS" e garantir que todos os links e imagens originais estejam corretos.

## Requisitos Funcionais

### RF01 — Restauração de Portfólio
- Re-inserir os 11 projetos originais (Dra. Ingrid, NKAM, TratoCão, JAC Motors, etc.).
- Usar as imagens otimizadas `.webp` em `/mockups/`.

### RF02 — Tork CRM (Destaque Full Stack)
- Renomear "GestorPulse" para **Tork CRM**.
- Manter como projeto `featured: true`.
- Descrição: "Sistema CRM/ERP Full Stack robusto para gestão de corretoras de seguros. Engenharia de processos, dashboards financeiros e automação de apólices."

### RF03 — Limpeza de Dados Fictícios
- Remover "TechVision SaaS".

### RF04 — Mapeamento Técnico
- Garantir que todos os projetos tenham as propriedades `url`, `color` e `favicon` para evitar quebra de build.

---

## Critérios de Aceite
- [ ] A galeria de projetos deve exibir 12 projetos no total (11 originais + Tork CRM).
- [ ] O projeto Tork CRM deve ser o primeiro da lista.
- [ ] O build de produção deve passar sem erros de TypeScript.
