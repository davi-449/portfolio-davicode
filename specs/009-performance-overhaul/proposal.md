# Proposal: Performance & SEO Overhaul (Spec 009)

## 1. Contexto e Motivação

O relatório do Lighthouse Mobile revelou as seguintes notas:
- **Desempenho: 85** (meta: 90+)
- **Acessibilidade: 88** (meta: 95+)
- **SEO: 91** (meta: 100)

Os problemas foram identificados com precisão e são altamente acionáveis.

---

## 2. Problemas Identificados por Categoria

### 🔴 Performance — Impacto Crítico

| Problema | Impacto | Solução |
|---|---|---|
| Imagens PNG pesadas (12 mockups) | −6.970 KiB | Converter para WebP |
| Sem `preconnect` para Fonts/Unsplash | −300 ms LCP | Adicionar `<link rel="preconnect">` |
| CSS do Google Fonts bloqueando render | −750 ms | Usar `font-display: swap` + `&display=swap` (já na URL) |
| Reflow forçado (offsetWidth) | −95 ms | Reescrever leituras geométricas em RAF |
| JS não usado (48 KiB) | −48 KiB | Revisar tree-shaking (lucide-react tree-shake) |

### 🟡 Acessibilidade — Impacto Médio

| Problema | Solução |
|---|---|
| Links do footer sem aria-label (GitHub, Instagram, LinkedIn) | Adicionar `aria-label` nos tags `<a>` |
| Contraste insuficiente em `text-text-muted` sobre fundo escuro | Clarear um grau a cor `text-muted` |
| Heading hierarchy (h4 sem h2/h3 anterior) | Ajustar hierarquia nos `FaqSection` |

### 🟢 SEO — Impacto Menor

| Problema | Solução |
|---|---|
| `<meta name="description">` ausente | Adicionar meta description no `index.html` |

---

## 3. User Stories

- **Como visitante mobile**, quero que o site carregue abaixo de 3 segundos para não sair antes de ver o conteúdo.
- **Como usuário de leitor de tela**, quero que os links de redes sociais tenham rótulos claros para eu entender para onde vou.
- **Como indexador do Google**, quero encontrar uma meta description relevante para exibir no resultado de busca.

---

## 4. Critérios de Aceite

1. Score de Desempenho no Lighthouse Mobile ≥ 90.
2. Score de Acessibilidade ≥ 95.
3. Score de SEO = 100.
4. Todos os mockups convertidos para WebP com tamanho ≤ 150 KB cada.
5. `<link rel="preconnect">` adicionado para `fonts.googleapis.com`, `fonts.gstatic.com` e `images.unsplash.com`.
6. Meta description presente no `index.html`.
7. Todos os links sociais com `aria-label` descritivo.
