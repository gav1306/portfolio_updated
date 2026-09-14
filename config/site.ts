import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Gayatri Patil",
  title: "Gayatri Patil - Frontend Developer",
  description:
    "Portfolio of a passionate software developer specializing in building beautiful, performant web applications with modern technologies.",
  url: "https://yoursite.com",
  author: {
    name: "Gayatri Patil",
    role: "Full Stack Developer / Software Engineer",
    bio: "Hey, curious, and deeply passionate about code. Although I started with curiosity, I became a problem solver through technology. I live for those moments when complex problems transform into elegant solutions.",
    email: "gavk30@gmail.com",
  },
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/gav1306",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/gayatri-frontend/",
      icon: "linkedin",
    },
    {
      platform: "Email",
      url: "mailto:gavk30@gmail.com",
      icon: "mail",
    },
  ],
};

export const portfolioItems = [
  {
    id: "1",
    title: "Workflow",
    description: "Add a short description of this project here",
    image: "/images/portfolio/workflow.png",
    category: "web",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "AccuKnox",
    description: "Add a short description of this project here",
    image: "/images/portfolio/accuknox_loginpage.png",
    category: "web",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "3",
    title: "Parametric AI",
    description: "Add a short description of this project here",
    image: "/images/portfolio/parametric_ai.png",
    category: "ai",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "4",
    title: "Nexus",
    description: "Add a short description of this project here",
    image: "/images/portfolio/nexus.png",
    category: "web",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
];

export const skillsData = {
  tagline: "it's not just coding, it's crafting experiences.",
  description:
    "How do you build apps that are both powerful and delightful to use? My approach combines clean code architecture with user-centric design, creating digital products that solve real problems while feeling effortless to use.",
  highlights: [
    "React & Next.js",
    "TypeScript",
    "Node.js & Express",
    "Tailwind CSS",
    "PostgreSQL & MongoDB",
    "AWS & Vercel",
    "REST & GraphQL APIs",
    "Git & CI/CD",
  ],
};
