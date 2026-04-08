import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/[0.05]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-white/[0.03] flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-white tracking-tight">
              DaviCode
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      active ? 'text-white' : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/[0.05] border border-white/5 rounded-lg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href="https://wa.me/5511956076123"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white text-black text-sm font-bold transition-all duration-300 hover:bg-zinc-200"
          >
            Falar comigo
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-background border-t border-white/[0.05]"
            >
              <div className="px-6 py-6 flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      location.pathname === link.to
                        ? 'text-white bg-white/[0.05]'
                        : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://wa.me/5511956076123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-4 rounded-lg bg-white text-black text-center font-bold"
                >
                  Falar comigo
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
