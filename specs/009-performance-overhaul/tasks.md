# Tasks: Checklist de Implementação (Spec 009)

## Fase 1 — Asset Pipeline: Imagens WebP
- [ ] 1. Instalar `sharp` como devDependency.
- [ ] 2. Criar `/scripts/convert-to-webp.js` que lê todos `.png` de `public/mockups/` e gera `.webp` na mesma pasta.
- [ ] 3. Rodar o script de conversão (node scripts/convert-to-webp.js).
- [ ] 4. Atualizar `src/data/projects.ts` substituindo referências `.png` por `.webp`.
- [ ] 5. Deletar os PNGs originais de `public/mockups/` após validar as WebPs.

## Fase 2 — HTML Head: Preconnects e Meta
- [ ] 6. Adicionar `<link rel="preconnect">` para `fonts.googleapis.com`, `fonts.gstatic.com` e `images.unsplash.com` no `index.html`.
- [ ] 7. Adicionar `<meta name="description">` no `index.html`.

## Fase 3 — Acessibilidade
- [ ] 8. Adicionar `aria-label` nos 3 links sociais de `FooterEnhancedSection.tsx`.
- [ ] 9. Adicionar `aria-label` nos links sociais do footer global em `App.tsx`.
- [ ] 10. Corrigir hierarquia de `<h4>` → `<h3>` no `FaqSection.tsx`.

## Fase 4 — Contraste
- [ ] 11. Ajustar o valor de `text-muted` no `tailwind.config.js` para `#9199a5` (AA compliant).

## Fase 5 — Validação
- [ ] 12. Rodar `npm run build` sem erros.
- [ ] 13. Fazer push para `main`.
- [ ] 14. Rodar Lighthouse novamente no `davicode.me` e confirmar Performance ≥ 90.
