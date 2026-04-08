export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'gestorpulse',
    title: 'GestorPulse CRM/ERP',
    description: 'Sistema Full Stack robusto para gestão de corretoras de seguros. Engenharia de processos, dashboards financeiros e automação de apólices.',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    link: 'https://sgc.gestorpulse.com.br',
    featured: true
  },
  {
    id: 'mecanica-japones',
    title: 'Mecânica Japonês 24h',
    description: 'Landing Page imersiva para socorro automotivo em Diadema. Design Industrial Precision com foco em conversão extrema sob urgência.',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop',
    tags: ['React', 'Tailwind v4', 'Framer Motion'],
    link: 'https://github.com/davi-449/lp-mecanica-japones-diadema',
    featured: true
  },
  {
    id: 'tech-vision',
    title: 'TechVision SaaS',
    description: 'Plataforma de análise de dados com visualização em tempo real e arquitetura modular de alta performance.',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    tags: ['Next.js', 'Vite', 'Clean Architecture'],
    link: '#',
    featured: false
  }
];
