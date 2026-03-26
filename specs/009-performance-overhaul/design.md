# Design Document: Performance Overhaul (Spec 009)

## 1. Otimização de Imagem

### Estratégia
Converter todos os 12 arquivos PNG da pasta `/public/mockups/` para **WebP** usando o pacote `sharp` (Node.js).
- Qualidade alvo: 80% (ótimo equilíbrio tamanho/qualidade para screenshots)
- Dimensões: manter as originais porém adicionar `width` e `height` explícitos no JSX para evitar reflow + CLS
- Os arquivos WebP substituem os PNGs → atualizar os imports/caminhos no `data/projects.ts`

### Ferramentas
- `sharp` via script one-off Node.js em `/scripts/convert-to-webp.js`

---

## 2. Otimizações de HTML (`index.html`)

### Preconnects
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://images.unsplash.com" />
```

### Meta Description
```html
<meta name="description" content="DaviCode — Engenharia de frontend premium. Transformo ideias em experiências digitais de alta performance com React, TypeScript e design moderno." />
```

---

## 3. Acessibilidade

### Links do Footer (`FooterEnhancedSection.tsx` + `App.tsx`)
Adicionar `aria-label` em todos os links de ícones sociais:
```tsx
<a aria-label="GitHub de Davi — davi-449" href="https://github.com/davi-449" ...>
<a aria-label="Instagram @davi_r._dev" href="https://www.instagram.com/davi_r._dev/" ...>
<a aria-label="LinkedIn de DaviCode" href="#" ...>
```

### Hierarquia de Heading
No arquivo `FaqSection.tsx`, elevar o `<h4>` para `<h3>` para não pular do `<h2>` para `<h4>`.

---

## 4. Contraste de Texto
A cor `text-text-muted` precisa ser levemente mais clara.
- Atual: `#6b7280` (equivalente a gray-500 aprox.)
- Target: `#8b95a5` (mais legível em fundo `#0a0a0f`)
- Local: `tailwind.config.js` → tokens de cor

---

## 5. Backend (Supabase MCP) — N/A
Feature puramente frontend/asset pipeline.
