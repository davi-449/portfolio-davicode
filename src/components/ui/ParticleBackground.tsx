import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  r: number;
  alpha: number;
  alphaSpeed: number;
  vx: number;
  vy: number;
  color: string;
}

const STAR_COLORS = [
  'rgba(255,255,255,',  // branco puro
  'rgba(200,190,255,',  // violeta suave (accent)
  'rgba(170,200,255,',  // azul gelo
  'rgba(255,240,180,',  // amarelo estrela
];

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // Gera N estrelas com propriedades aleatórias
    const NUM_STARS = Math.floor((W * H) / 6000); // densidade responsiva
    const stars: Star[] = Array.from({ length: NUM_STARS }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.3,
      alpha: Math.random(),
      alphaSpeed: (Math.random() * 0.005 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    }));

    const draw = () => {
      // Limpa com fundo transparente (deixa o CSS cuidar do gradiente)
      ctx.clearRect(0, 0, W, H);

      for (const s of stars) {
        // Atualiza posição (drift suave)
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around nas bordas
        if (s.x < 0) s.x = W;
        if (s.x > W) s.x = 0;
        if (s.y < 0) s.y = H;
        if (s.y > H) s.y = 0;

        // Twinkling (oscila opacidade)
        s.alpha += s.alphaSpeed;
        if (s.alpha > 1) { s.alpha = 1; s.alphaSpeed *= -1; }
        if (s.alpha < 0.05) { s.alpha = 0.05; s.alphaSpeed *= -1; }

        // Desenha a estrela com glow
        const alpha = Math.max(0, Math.min(1, s.alpha));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${alpha})`;
        ctx.fill();

        // Glow suave para estrelas maiores
        if (s.r > 1) {
          const glowRadius = s.r * 4;
          const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowRadius);
          grad.addColorStop(0, `${s.color}${alpha * 0.4})`);
          grad.addColorStop(1, `${s.color}0)`);
          ctx.beginPath();
          ctx.arc(s.x, s.y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};
