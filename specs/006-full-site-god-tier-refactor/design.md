# Design: The God-Tier System (2026)

## 1. Grid & Layout (Asymmetric Precision)
A página será organizada em **Blocos Assimétricos** para quebrar a previsibilidade.
- **Section Headers:** Sempre à esquerda, com uma linha fina de 0.5px e tipografia `font-mono text-[10px]`.
- **White Space:** Generoso e intencional (`py-32` a `py-48`).

## 2. Materials (The Cyber-Emerald Palette)
A estética é inspirada em equipamentos de precisão japonesa e painéis de carros esporte.
- **Primary:** `emerald-500` (#10b981).
- **Secondary:** `white` (para textos de alta visibilidade).
- **Base:** `zinc-950` (#09090b).
- **Material:** `Liquid Glass` (Refraction: 24-40px blur, opacity: 2-5%).

## 3. Motion (The Elastic UI)
A interface deve parecer viva e elástica.
- **Entry Animations:** `staggerChildren` com `delayChildren`.
- **Hover Transitions:** `duration-500` com `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Scroll Parallax:** `useTransform` do Framer Motion para criar o efeito de camadas.
