export interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  category?: string;
  tech?: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  image?: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    role: string;
    bio: string;
    email: string;
  };
  social: SocialLink[];
}
