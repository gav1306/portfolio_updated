import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { SlideshowContainer } from "@/components/shared/SlideshowContainer";

export default function Home() {
  const sections = [
    <Hero key="hero" />,
    <About key="about" />,
    <Portfolio key="portfolio" />,
    <Skills key="skills" />,
    <Contact key="contact" />,
  ];

  const sectionNames = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <main className="min-h-screen">
      <SlideshowContainer sectionNames={sectionNames}>
        {sections}
      </SlideshowContainer>
    </main>
  );
}
