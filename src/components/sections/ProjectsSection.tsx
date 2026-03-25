import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export const ProjectsSection = () => {
  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      
      <div className="mb-20 text-center md:text-left">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Portfólio <span className="text-accent">DaviCode</span>
        </h2>
        <p className="text-xl text-text-muted max-w-2xl">
          Exploração imersiva de landing pages reais de alta performance, desenhadas meticulosamente para dominar o nicho local de serviços.
        </p>
      </div>

      <div className="flex flex-col gap-12 md:gap-24">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
          />
        ))}
      </div>

    </section>
  );
};
