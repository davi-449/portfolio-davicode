# Design: Pro-Player & GestorPulse Style

## 1. Hero Atmosphere: Silver Mesh Gradient
Usaremos camadas de luz radial móvel:
- **Orb 1:** `radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)` — Posição: 20% 30%.
- **Orb 2:** `radial-gradient(circle, rgba(200,200,255,0.02) 0%, transparent 60%)` — Posição: 80% 70%.
- **Efeito:** Animação de `background-position` lenta (30s).

## 2. Featured Card: The Pro Look
Para projetos como o GestorPulse:
- **Aspect Ratio:** 16:9.
- **Glass Body:** `bg-white/[0.01] backdrop-blur-2xl`.
- **Border:** `1px solid rgba(255,255,255,0.05)` com brilho nos cantos.
- **Micro-Copy:** "Full Stack Engine" ou "Technical Architecture" como tag fixa.

## 3. About Page Hierarchy
- **Headline:** `text-silver` em `font-display font-black`.
- **Focus:** Menos história pessoal, mais **"Soluções de Engenharia"**.
- **Geometry:** Manter o `rounded-lg` (8px).
