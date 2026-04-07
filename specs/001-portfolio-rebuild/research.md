# 🔬 Research — Portfolio DaviCode Rebuild

## 1. Análise da Versão Atual (GitHub: portfolio-davicode)

### Stack Técnica
- **Framework:** React 19 + Vite 8 + TypeScript 5.9
- **Styling:** Tailwind CSS 3.4 + custom tokens
- **Animações:** Framer Motion 12
- **Icons:** Lucide React
- **Fonts:** Inter + Space Grotesk + Space Mono

### Estrutura de Componentes
| Componente | Função | Status |
|------------|--------|--------|
| `HeroSection` | Hero com partículas, stats, CTA | ✅ Funcional, mas genérico |
| `FeaturesStrip` | Strip de features horizontais | ⚠️ Pouco destaque |
| `StackSection` | Exibição de tech stack | ⚠️ Muito extenso, disperso |
| `AboutRevealSection` | Texto com scroll reveal | ⚠️ Sem impacto visual |
| `ServicesSection` | 4 cards sticky de serviços | ✅ Bom padrão Sticky Card |
| `FaqSection` | FAQ básico | ✅ Funcional |
| `FooterEnhancedSection` | Footer com links | ✅ Funcional |
| **`ProjectsSection`** | Feed de projetos | ❌ **NÃO É RENDERIZADO NO App.tsx!** |

### Problemas Identificados
1. **ProjectsSection NÃO está importada no App.tsx** — seção mais importante está invisível
2. **WhatsApp link é placeholder:** `5511999999999`
3. **Mockups são referenciados mas provavelmente não existem** (`/mockups/*.webp`)
4. **Sem rota `/projetos`** — é uma SPA single-page sem routing
5. **Sem seção de prova social real** (depoimentos de clientes)
6. **Meta description genérica**
7. **Sem Open Graph / social sharing otimizado**

### Design System Atual
- **Cores:** `#0a0a0f` (bg), `#7c6aff` (accent violeta), `#ff6b6b` (coral alt), `#f0c060` (gold)
- **Tipografia:** Inter body, Space Grotesk display, Space Mono code
- **Efeitos:** Glass cards (`backdrop-blur-md`), aurora gradient, grid pattern, text glow
- **Paleta adequada?** Parcialmente. Violeta é bonito mas falta personalidade maximalista

## 2. Análise da Versão Lovable (portifoliodavi.lovable.app)

### Estrutura
- **Multi-page:** Home, Projetos, Sobre, Contato (React Router)
- **Projetos exibidos:** Apenas 3 (SGC GestorPulse, GPS Saúde, Medikran)
- **Posicionamento:** "Desenvolvedor No-Code" ← desalinhado com o trabalho real (código manual, React, TypeScript)

### Pontos Positivos do Lovable
- Multi-page routing (Home + Projetos + Sobre + Contato)
- Layout limpo e organizado na página de projetos
- Navegação clara

### Pontos Negativos do Lovable
- **Projetos errados** — mostra SaaS e não as landing pages que são o core do portfólio
- **Se autodenomina "No-Code"** — contradiz o trabalho de engenharia real
- **Design genérico** — sem personalidade, sem wow factor
- **Repositório perdido** — sem como recuperar o código

## 3. Benchmarking de Concorrentes (Portfólios Dev 2026)

### Padrão Observado em Portfólios de Elite
- Hero statement bold (7xl+) — nome como marca
- Seção de projetos com screenshots reais em mockup devices
- Scroll storytelling (projetos revelados progressivamente)
- Números de impacto (clientes, projetos, conversão)
- Dark mode imersivo com accents vibrantes
- Transições e microinterações em TUDO
- CTA para WhatsApp/contato sempre visível (floating)

## 4. Inventário de Landing Pages para Portfolio

| # | Projeto | Segmento | URL Live | Status |
|---|---------|----------|----------|--------|
| 01 | Dra. Ingrid Segatti | Odontologia | draingrid.davicode.me | ✅ Live |
| 02 | NKAM Suspensão | Mecânica | nkam.davicode.me | ✅ Live |
| 03 | TratoCão Clínica Vet | Veterinária | tratocao.davicode.me | ✅ Live |
| 04 | Oficina JAC Motors | Mecânica | — | 🔨 Repo exists |
| 05 | RECAM Amortecedores | Mecânica | — | 🔨 Repo exists |
| 06 | Mecânica Índia | Mecânica | — | 🔨 Repo exists |
| 07 | Mecânica Japonês | Mecânica | — | 🔨 Repo exists |
| 08 | AmigoVet | Veterinária | — | 🔨 Repo exists |
| 09 | Suspensão LCAR | Mecânica | — | 🔨 Repo exists |
| 10 | Centro Automotivo Águia | Mecânica | — | 🔨 Repo exists |
| 11 | JFL Fotos | Fotografia | jfl.davicode.me | ✅ Live |

**Total: 11 projetos reais para showcase**

## 5. Decisão Estratégica

### O que MANTER do portfolio-davicode atual
- Stack técnica (React 19 + Vite 8 + Tailwind + Framer Motion)
- Design system base (cores violeta, dark mode, fonts)
- Componentes UI (StickyCard, Accordion, ParticleBackground)
- Dados de `projects.ts` (11 projetos catalogados)

### O que INTEGRAR do Lovable
- Multi-page routing (Home + Projetos + Sobre + Contato)
- Separação de conteúdo por páginas

### O que CRIAR DO ZERO (skill ux-ui-architect-2026)
- Hero com tipografia maximalista (7xl statement)
- Galeria de projetos imersiva com screenshots reais em device mockups
- Seção de prova social com depoimentos de clientes reais
- Floating CTA (WhatsApp sempre visível)
- Page transitions suaves (Framer Motion + AnimatePresence)
- Efeitos Liquid Glass nas superfícies
- Microinterações em TUDO
