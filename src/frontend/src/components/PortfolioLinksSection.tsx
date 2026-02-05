import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { PortfolioLink } from '@/types/portfolio';

interface PortfolioLinksSectionProps {
  links?: PortfolioLink[];
}

export default function PortfolioLinksSection({ links }: PortfolioLinksSectionProps) {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my work across different platforms and mediums
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-2">
                  <span className="text-xl">{link.title}</span>
                  <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </CardTitle>
                <CardDescription>
                  Click to view external content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block w-full rounded-md bg-primary/10 px-4 py-3 text-center font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  Visit {link.title}
                </a>
              </CardContent>
              
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-chart-1/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
