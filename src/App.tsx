import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { PageTransition } from './components/layout/PageTransition';
import { GlobalBackground } from './components/layout/GlobalBackground';

import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-white flex flex-col font-sans relative bg-zinc-950 overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <GlobalBackground />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:p-4 focus:bg-primary focus:text-black top-0 left-0">
        Pular para o conteúdo principal
      </a>
      <Navbar />
      
      <main id="main-content" className="flex-1 flex flex-col pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/projetos" element={<PageTransition><ProjectsPage /></PageTransition>} />
            <Route path="/sobre" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/contato" element={<PageTransition><ContactPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
