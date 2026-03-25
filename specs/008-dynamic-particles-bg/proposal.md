# Proposal: Fundo Dinâmico de Partículas (Spec 008)

## 1. Visão Geral
Conforme solicitado pelo usuário, a landing page receberá um fundo dinâmico e interativo no `HeroSection` (ou globalmente), inspirado no site `angelocicchiello.dev`. O objetivo é substituir o fundo estático atual por um canvas de "céu estrelado" ou "partículas espaciais" em tons de deep-space, contendo pequenos nós orbitando/cintilando.

## 2. Requisitos de Negócio
- Aumentar a retenção visual nos primeiros segundos do acesso (Wow-effect).
- Manter uma estética premium "Awwwards-tier" sem pesar o carregamento (alta performance).
- Assegurar que as partículas não interfiram na leitura do texto principal (contraste correto) e nem recebam cliques (pointer-events-none).

## 3. User Stories
- **Como visitante geral**, eu quero entrar no site do DaviCode e ver um fundo noturno/vibrante, com pequenas partículas cintilando e flutuando no ar, para me sentir imerso em um ambiente digital moderno e inovador.

## 4. Critérios de Aceite
1. O site deve exibir um background com gradiente espacial de alta qualidade (mistura de azul-escuro profundo e roxo).
2. O background deve possuir partículas (círculos minúsculos brancos/amarelos/glow) geradas de forma dinâmica.
3. A animação deve ser sutil e não consumir 100% de CPU.
4. O background deve ser visível no Hero e acompanhar harmoniosamente o scroll (ou ser `fixed` e afetar outras áreas que forem transparentes).
