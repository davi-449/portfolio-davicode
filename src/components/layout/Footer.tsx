import { Link } from 'react-router-dom';
import { Code2, Terminal, Camera, Briefcase, Mail } from 'lucide-react';

const SOCIAL_LINKS = [
  { href: 'https://github.com/davi-449', icon: Terminal, label: 'GitHub' },
  { href: 'https://www.instagram.com/davi_r._dev/', icon: Camera, label: 'Instagram' },
  { href: 'mailto:contato@davicode.me', icon: Mail, label: 'Email' },
  { href: 'https://linkedin.com', icon: Briefcase, label: 'LinkedIn' },
];

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0f] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top: Logo + Nav + Social */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/30">
              <Code2 className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-display font-bold text-xl text-white">
                Davi<span className="text-accent">Code</span>
              </p>
              <p className="text-sm text-text-muted">Desenvolvedor No-Code</p>
            </div>
          </div>

          {/* Footer Nav */}
          <nav className="flex flex-wrap gap-6" aria-label="Footer Navigation">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-text-muted text-sm hover:text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-text-muted hover:text-white hover:bg-white/[0.08] hover:border-white/[0.1] hover:scale-110 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-8" />

        {/* Bottom: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} DaviCode. Todos os direitos reservados.
          </p>
          <p className="text-text-muted/50 text-xs">
            Feito com React, TypeScript & ☕
          </p>
        </div>
      </div>
    </footer>
  );
};
