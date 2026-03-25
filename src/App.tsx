import { HeroSection } from './components/sections/HeroSection';
import { StackSection } from './components/sections/StackSection';
import { FeaturesStrip } from './components/sections/FeaturesStrip';
import { AboutRevealSection } from './components/sections/AboutRevealSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { FaqSection } from './components/sections/FaqSection';
import { FooterEnhancedSection } from './components/sections/FooterEnhancedSection';
import { ParticleBackground } from './components/ui/ParticleBackground';
import { Code2, Terminal, Camera, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-main flex flex-col font-sans relative">
      
      {/* Fundo de partículas estrelares fixo em todo o site */}
      <ParticleBackground />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturesStrip />
        <StackSection />
        <AboutRevealSection />
        <ServicesSection />
        <FaqSection />
        <FooterEnhancedSection />
      </main>

      {/* Footer Global DaviCode */}
      <footer className="border-t border-border bg-surface-1 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/30">
              <Code2 className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-display font-bold text-xl text-white">DaviCode</p>
              <p className="text-sm text-text-muted">Engenharia de Frontend</p>
            </div>
          </div>

          <p className="text-text-muted text-sm md:text-base">
            © {new Date().getFullYear()} DaviCode. Todos os direitos reservados.
          </p>

          <div className="flex gap-4">
            <a href="https://github.com/davi-449" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-surface-2 hover:text-white text-text-muted transition-colors" aria-label="Github">
              <Terminal className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/davi_r._dev/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-surface-2 hover:text-white text-text-muted transition-colors" aria-label="Instagram">
              <Camera className="w-5 h-5" />
            </a>
             <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-surface-2 hover:text-white text-text-muted transition-colors" aria-label="Linkedin">
              <Briefcase className="w-5 h-5" />
            </a>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default App
