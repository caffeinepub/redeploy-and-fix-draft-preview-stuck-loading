import { User, Briefcase } from 'lucide-react';
import { SiLinkedin } from 'react-icons/si';
import type { About } from '@/types/portfolio';

interface AboutSectionProps {
  data?: About;
}

export default function AboutSection({ data }: AboutSectionProps) {
  const profileImageUrl = data?.profileImage;

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      {/* Hero Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/generated/hero-background.dim_1920x800.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-chart-1 to-chart-2 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                {profileImageUrl ? (
                  <img
                    src={profileImageUrl}
                    alt={data?.name || 'Profile'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-chart-1/20 flex items-center justify-center">
                    <User className="w-32 h-32 text-primary/40" />
                  </div>
                )}
                
                {/* LinkedIn Icon Overlay */}
                <a
                  href="https://www.linkedin.com/in/vikalpsingh10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                  title="LinkedIn Profile"
                >
                  <SiLinkedin className="w-7 h-7 text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Game Designer</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-chart-1 bg-clip-text text-transparent">
                {data?.name || 'Vikalp Singh'}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {data?.summary}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                View Projects
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all border border-border"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
