import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import WorkExperienceSection from '@/components/WorkExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import PortfolioLinksSection from '@/components/PortfolioLinksSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { usePortfolioContent } from '@/hooks/useQueries';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function Portfolio() {
  const { data: portfolio, isLoading, isError, error, refetch } = usePortfolioContent();
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'projects', 'portfolio', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-accent/10">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-accent/10 p-4">
        <div className="flex max-w-md flex-col items-center gap-6 rounded-lg border border-destructive/50 bg-card p-8 text-center shadow-lg">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <AlertCircle className="h-8 w-8 text-destructive" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Failed to Load Portfolio</h2>
            <p className="text-sm text-muted-foreground">
              {error instanceof Error ? error.message : 'An unexpected error occurred while loading the portfolio content.'}
            </p>
          </div>
          <Button
            onClick={() => refetch()}
            className="gap-2"
            size="lg"
          >
            <RefreshCw className="h-4 w-4" />
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background to-accent/5" />
      
      <Header activeSection={activeSection} />
      
      <main>
        <AboutSection data={portfolio?.about} />
        <WorkExperienceSection data={portfolio?.experiences} />
        <SkillsSection />
        <ProjectsSection data={portfolio?.projects} />
        <PortfolioLinksSection links={portfolio?.portfolioLinks} />
        <BlogSection data={portfolio?.blogPosts} />
        <ContactSection 
          contactInfo={portfolio?.contact} 
          socialLinks={portfolio?.socialLinks} 
        />
      </main>

      <Footer />
    </div>
  );
}
