# Design Document: Fundo Dinâmico (Spec 008)

## 1. Arquitetura da Interface (Stitch MCP - Frontend)

### 1.1 `ParticleBackground.tsx` (Novo Componente)
Para não inflar o bundle adicionando bibliotecas pesadas de terceiros (`tsparticles` ou `three.js`), o background será implementado inteiramente em **HTML5 Canvas** usando React puro e `requestAnimationFrame`.

**Funcionalidades Específicas:**
- Geração aleatória de N *Star/Particle objects* no momento do monte.
- Função de atualização que mapeia a velocidade de cada partícula movendo levemente para cima e ajustando a `opacity` para simular "twinkling" (piscadas).
- Resize Listener para manter o canvas sincronizado com a tela.
- Posicionamento `fixed inset-0 z-[-1] pointer-events-none` (ou `absolute` caso limitado ao Hero).

### 1.2 Atualização no `App.tsx` / `HeroSection.tsx`
- O componente base da aplicação receberá o `<ParticleBackground />` como seu z-index inferior, cobrindo todo o fundo.
- Remoção do fundo chapado escuro ou modificação das seções subjacentes para `bg-transparent` e adicionando Glassmorphism para permitir que o usuário veja as estrelas pelo vidro do header.
- Cores do app deverão incorporar tons similares ao da referência (ex: gradient Radial central azul).

## 2. Modelagem de Dados (Supabase MCP - Backend)
**N/A**. Esta feature é puramente de Front-End e não envolve leitura/escrita em banco de dados ou autenticação.
