# Tasks: Checklist Estrito de Implementação (Spec 008)

- [ ] 1. Criar o arquivo `src/components/ui/ParticleBackground.tsx`.
- [ ] 2. Escrever a lógica em `HTML5 Canvas` puro dentro do `useEffect` para desenhar estrelas randômicas (tamanho, cor e velocidade).
- [ ] 3. Animar o Canvas usando `requestAnimationFrame` atualizando X, Y (posição) e Opacidade para simular brilho flutuante.
- [ ] 4. Injetar o `<ParticleBackground />` no `App.tsx` (ou no `HeroSection.tsx`), limitando-o a um `z-index` -1.
- [ ] 5. Ajustar a paleta local do de background (`index.css` e seções em branco) provendo um gradiente radial *Deep Space Blue/Purple* (inspiração da referência).
- [ ] 6. Garantir que `pointer-events: none` esteja setado no Canvas para não bloquear cliques de botão.
- [ ] 7. Realizar build de homologação (`npm run build`).
