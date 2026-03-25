export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  url?: string;
  color: string;
  image: string;
  favicon: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Dra. Ingrid Segatti",
    category: "Odontologia",
    description: "Landing page luxuosa desenhada para uma clínica de alto padrão. Traz cards bento assimétricos e slider imersivo estilo Apple.",
    tags: ["Estética Premium", "Framer Motion", "Before & After", "WhatsApp CTA"],
    url: "https://draingrid.davicode.me",
    color: "#c9a882", // Rose Gold
    image: "/mockups/dra-ingrid.png",
    favicon: "🦷"
  },
  {
    id: "02",
    title: "NKAM Suspensão",
    category: "Mecânica",
    description: "Página de alta conversão para oficina focada em alinhamento técnico. Traz performance mobile e CTAs estratégicos.",
    tags: ["Mecânica Especializada", "Alta Conversão", "SEO Optimization"],
    url: "https://nkam.davicode.me",
    color: "#f97316", // Laranja mecânica
    image: "/mockups/nkam.png",
    favicon: "🔧"
  },
  {
    id: "03",
    title: "TratoCão Clínica Vet.",
    category: "Veterinária",
    description: "Página de aterrissagem acolhedora conectando pais de pets a veterinários experientes com layout limpo e chamadas empáticas.",
    tags: ["Design Acolhedor", "Emergência Vet", "Mobile First"],
    url: "https://tratocao.davicode.me",
    color: "#10b981", // Emerald
    image: "/mockups/tratocao.png",
    favicon: "🐾"
  },
  {
    id: "04",
    title: "Oficina JAC Motors",
    category: "Mecânica",
    description: "Identidade agressiva e de autoridade para a JAC Motors Diadema. Uso de contornos bold e alto contraste noturno.",
    tags: ["Identidade Global", "Alto Contraste", "Google Maps Dark"],
    color: "#dc2626", // Red JAC
    image: "/mockups/jac-motors.png",
    favicon: "🔧"
  },
  {
    id: "05",
    title: "RECAM Amortecedores",
    category: "Mecânica",
    description: "Foco em peças recondicionadas e garantia prolongada com sections que passam extrema transparência técnica.",
    tags: ["Transparência", "Depoimentos Animados", "Fast Load"],
    color: "#3b82f6", // Blue
    image: "/mockups/recam.png",
    favicon: "🔧"
  },
  {
    id: "06",
    title: "Mecânica Índia",
    category: "Mecânica",
    description: "Visual disruptivo e interativo para a Auto Mecânica com integrações complexas de mapas e menus contextuais.",
    tags: ["Menu Contextual", "Integrações", "Design Disruptivo"],
    color: "#eab308", // Yellow
    image: "/mockups/india.png",
    favicon: "🔧"
  },
  {
    id: "07",
    title: "Mecânica Japonês",
    category: "Mecânica",
    description: "Foco em honestidade e atendimento familiar, com layout convidativo e claro.",
    tags: ["Honestidade", "Acessibilidade", "Clear Layout"],
    color: "#f43f5e", // Rose
    image: "/mockups/japones.png",
    favicon: "🔧"
  },
  {
    id: "08",
    title: "AmigoVet",
    category: "Veterinária",
    description: "Veterinária humanizada no coração de Diadema focada na relação familiar com os pets.",
    tags: ["Humanização", "Agendamento", "Design Limpo"],
    color: "#06b6d4", // Cyan
    image: "/mockups/amigovet.png",
    favicon: "🐾"
  },
  {
    id: "09",
    title: "Suspensão LCAR",
    category: "Mecânica",
    description: "Uma landing page direta ao ponto para serviços de troca de óleo e suspensão.",
    tags: ["Serviço Rápido", "Direto ao Ponto", "WhatsApp Direto"],
    color: "#8b5cf6", // Violet
    image: "/mockups/lcar.png",
    favicon: "🔧"
  },
  {
    id: "10",
    title: "Centro Automotivo Águia",
    category: "Mecânica",
    description: "Autoridade e precisão no diagnóstico veicular computatorizado e auto elétrica.",
    tags: ["Diagnóstico Computadorizado", "Auto Elétrica", "Autoridade"],
    color: "#64748b", // Slate
    image: "/mockups/aguia.png",
    favicon: "🔧"
  },
  {
    id: "11",
    title: "JFL Fotos",
    category: "Fotografia",
    description: "Landing page de alto impacto para estúdio fotográfico profissional, destacando o portfólio do fotógrafo com galeria imersiva e reservas via WhatsApp.",
    tags: ["Galeria Imersiva", "Fotografia Pro", "WhatsApp CTA"],
    url: "https://jfl.davicode.me",
    color: "#f59e0b", // Amber
    image: "/mockups/jfl-fotos.png",
    favicon: "📸"
  }
];
