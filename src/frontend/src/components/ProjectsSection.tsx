import { Layers, ExternalLink } from 'lucide-react';
import type { Project } from '@/types/portfolio';

interface ProjectsSectionProps {
  data?: Project[];
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 px-4 relative bg-accent/5">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work in game design and development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {data && data.length > 0 ? (
            data.map((project) => {
              const firstScreenshot = project.screenshots?.[0];

              return (
                <div
                  key={project.id.toString()}
                  className="group bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:border-primary/50 hover:-translate-y-1"
                >
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-chart-1/10">
                    {firstScreenshot ? (
                      <img
                        src={firstScreenshot}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Layers className="w-16 h-16 text-primary/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium text-primary mb-2">My Role</p>
                      <p className="text-sm text-muted-foreground">
                        {project.roleDetails}
                      </p>
                    </div>

                    {project.screenshots && project.screenshots.length > 1 && (
                      <div className="flex gap-2 pt-2">
                        {project.screenshots.slice(1, 4).map((screenshot, idx) => (
                          <div
                            key={idx}
                            className="w-16 h-16 rounded-lg overflow-hidden border border-border"
                          >
                            <img
                              src={screenshot}
                              alt={`${project.title} screenshot ${idx + 2}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-2 text-center py-12">
              <p className="text-muted-foreground">No projects added yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
