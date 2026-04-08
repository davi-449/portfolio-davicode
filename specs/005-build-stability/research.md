# Research: Build Stability — DaviCode Portfolio (2026)

## 1. Causa Raiz do Erro
O build do Netlify falhou por causa de `selection:bg-primary/30` no `src/index.css`.
- **Problema 1:** A cor `primary` não está definida no `tailwind.config.js`. Ela só existia como variável CSS local no `:root`.
- **Problema 2:** O Tailwind v3 tem dificuldades em aplicar opacidade (`/30`) em cores de variáveis CSS dentro do `@apply` quando não estão mapeadas no tema.

## 2. Estratégia de Correção
- **Configuração:** Mover `primary` (Emerald Cyber) e `zinc-950` para o `tailwind.config.js`.
- **CSS:** Evitar `@apply` para pseudo-classes como `selection` se causarem instabilidade. Usar CSS puro no `:root` ou `body` para garantir que o build passe.
- **Acessibilidade:** Re-validar o contraste com a nova cor Emerald.

## 3. Prevenção de Regressões
- Rodar `npm run build` localmente com `npx vite build` antes de qualquer push.
- Testar se o `tsc` está pegando as novas definições.
