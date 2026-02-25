import { BookOpen, ExternalLink } from 'lucide-react';
import type { BlogPost } from '@/types/portfolio';

interface BlogSectionProps {
  data?: BlogPost[];
}

export default function BlogSection({ data }: BlogSectionProps) {
  return (
    <section id="blog" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Blog & Articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep dives into game design, behavioral patterns, and industry insights
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data && data.length > 0 ? (
            data.map((post) => (
              <article
                key={post.id}
                className="group bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:border-primary/50 hover:-translate-y-1"
              >
                {/* Blog Post Content */}
                <div className="p-6 space-y-4">
                  {/* Date */}
                  <time className="text-sm text-muted-foreground font-medium">
                    {post.date}
                  </time>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground line-clamp-3">
                    {post.description}
                  </p>

                  {/* Read More Button */}
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group/link"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Decorative Bottom Border */}
                <div className="h-1 bg-gradient-to-r from-primary via-chart-1 to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <BookOpen className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">No blog posts available yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
