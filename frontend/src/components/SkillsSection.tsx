import { Lightbulb, Code } from 'lucide-react';

export default function SkillsSection() {
  const softSkills = [
    'Project Management',
    'Teamwork',
    'Time Management',
    'Leadership',
    'Effective Communication',
    'Critical Thinking'
  ];

  const hardSkills = [
    'Level Design',
    'Storytelling and Narrative',
    'Scripting and Programming',
    'Game Mechanics Design',
    'Game Monetization',
    'UI & UX',
    'Prototyping and Iteration'
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive blend of technical abilities and interpersonal strengths
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:border-primary/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Soft Skills</h3>
            </div>
            <ul className="space-y-3">
              {softSkills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                  <span className="text-base">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hard Skills */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:border-primary/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-chart-1/10">
                <Code className="w-6 h-6 text-chart-1" />
              </div>
              <h3 className="text-2xl font-bold">Hard Skills</h3>
            </div>
            <ul className="space-y-3">
              {hardSkills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-2 h-2 rounded-full bg-chart-1 group-hover:scale-125 transition-transform" />
                  <span className="text-base">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
