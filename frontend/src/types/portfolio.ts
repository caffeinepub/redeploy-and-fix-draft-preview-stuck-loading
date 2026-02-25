// Local type definitions for portfolio data (backend no longer provides these)
export interface About {
  name: string;
  summary: string;
  profileImage?: string;
}

export interface Experience {
  id: number;
  company: string;
  title: string;
  period: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  screenshots?: string[];
  roleDetails: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface PortfolioLink {
  title: string;
  url: string;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  externalUrl: string;
}

export interface Portfolio {
  about: About;
  experiences: Experience[];
  projects: Project[];
  contact: ContactInfo;
  socialLinks: SocialLink[];
  portfolioLinks: PortfolioLink[];
  blogPosts?: BlogPost[];
}
