import { Briefcase, Calendar } from 'lucide-react';
import type { Experience } from '@/types/portfolio';

interface WorkExperienceSectionProps {
  data?: Experience[];
}

export default function WorkExperienceSection({ data }: WorkExperienceSectionProps) {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-1 to-transparent" />

          <div className="space-y-12">
            {data && data.length > 0 && (
              data.map((experience, index) => (
                <div
                  key={experience.id.toString()}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="ml-20 md:ml-0 group">
                      <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:border-primary/50">
                        <div className="flex items-start gap-3 mb-3">
                          <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-primary">
                              {experience.period}
                            </p>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                        <p className="text-lg text-muted-foreground font-medium mb-4">
                          {experience.company}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
