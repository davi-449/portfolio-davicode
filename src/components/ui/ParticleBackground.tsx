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
  'rgba(255,255,255,',     // branco puro
  'rgba(200,190,255,',     // violeta suave (accent)
  'rgba(180,210,255,',     // azul gelo
  'rgba(255,245,200,',     // amarelo quente (estrela)
];

interface ParticleBackgroundProps {
  className?: string;
}

export const ParticleBackground = ({ className = '' }: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.offsetWidth || window.innerWidth;
    let H = canvas.offsetHeight || window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // Mais estrelas, velocidade levemente maior
    const NUM_STARS = Math.floor((W * H) / 3500);
    const stars: Star[] = Array.from({ length: NUM_STARS }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.6 + 0.4,
      alpha: Math.random(),
      alphaSpeed: (Math.random() * 0.012 + 0.003) * (Math.random() > 0.5 ? 1 : -1), // mais rápido
      vx: (Math.random() - 0.5) * 0.25,  // drift mais perceptível
      vy: (Math.random() - 0.5) * 0.25,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around
        if (s.x < 0) s.x = W;
        if (s.x > W) s.x = 0;
        if (s.y < 0) s.y = H;
        if (s.y > H) s.y = 0;

        // Twinkling
        s.alpha += s.alphaSpeed;
        if (s.alpha > 1) { s.alpha = 1; s.alphaSpeed *= -1; }
        if (s.alpha < 0.05) { s.alpha = 0.05; s.alphaSpeed *= -1; }

        const a = Math.max(0, Math.min(1, s.alpha));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${a})`;
        ctx.fill();

        // Glow radial nas maiores
        if (s.r > 1) {
          const gr = s.r * 5;
          const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, gr);
          grad.addColorStop(0, `${s.color}${(a * 0.5).toFixed(2)})`);
          grad.addColorStop(1, `${s.color}0)`);
          ctx.beginPath();
          ctx.arc(s.x, s.y, gr, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      W = canvas.offsetWidth || window.innerWidth;
      H = canvas.offsetHeight || window.innerHeight;
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
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
};
