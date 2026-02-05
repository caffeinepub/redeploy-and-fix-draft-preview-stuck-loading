import { useState } from 'react';
import { Mail, Send, Loader2 } from 'lucide-react';
import { SiLinkedin, SiX, SiGithub, SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useSubmitContactForm } from '@/hooks/useQueries';
import { toast } from 'sonner';
import type { SocialLink } from '@/backend';

interface ContactSectionProps {
  contactEmail?: string;
  socialLinks?: SocialLink[];
}

export default function ContactSection({ contactEmail, socialLinks }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const submitContactForm = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await submitContactForm.mutateAsync(formData);
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const getSocialIcon = (platform: string) => {
    const platformLower = platform.toLowerCase();
    if (platformLower.includes('linkedin')) return SiLinkedin;
    if (platformLower.includes('twitter') || platformLower.includes('x')) return SiX;
    if (platformLower.includes('github')) return SiGithub;
    if (platformLower.includes('instagram')) return SiInstagram;
    return Mail;
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={submitContactForm.isPending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={submitContactForm.isPending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={submitContactForm.isPending}
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={submitContactForm.isPending}
              >
                {submitContactForm.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/10 to-chart-1/10 border border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              
              {contactEmail && (
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>
              )}

              {socialLinks && socialLinks.length > 0 && (
                <div>
                  <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link, index) => {
                      const Icon = getSocialIcon(link.platform);
                      return (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-all hover:scale-110"
                          title={link.platform}
                        >
                          <Icon className="w-5 h-5 text-primary" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Decorative element */}
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img
                src="/assets/generated/portfolio-banner.dim_1200x300.jpg"
                alt="Contact banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <img
                    src="/assets/generated/game-controller-icon-transparent.dim_64x64.png"
                    alt="Game controller"
                    className="w-16 h-16 mx-auto mb-4 opacity-80"
                  />
                  <p className="text-lg font-semibold">Let's create something epic!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
