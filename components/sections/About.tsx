"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <SectionContainer id="about" variant="cream" className="border-y border-slate-200 h-full flex items-center">
      <div className="max-w-5xl mx-auto">
        {/* Timeline illustration area */}
        <div className="relative py-12">
          {/* Story points with connecting path */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Point 1 */}
            <AnimatedSection delay={0.2} className="relative text-center space-y-4">
              <div className="relative w-52 h-52 mx-auto rounded-full overflow-hidden">
                <Image
                  src="/images/about/gav_think.png"
                  alt="Gayatri thinking"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm md:text-base text-slate-800 leading-relaxed">
                  Started coding out of curiosity, now building digital solutions
                </p>
              </div>
            </AnimatedSection>

            {/* Connecting path — animated draw */}
            <div className="hidden md:block relative h-24">
              <svg
                className="w-full h-full"
                viewBox="0 0 200 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M 10 50 Q 100 10, 190 50"
                  stroke="#E89AC7"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  fill="none"
                  animate={{ strokeDashoffset: [0, -24] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>

            {/* Point 2 */}
            <AnimatedSection delay={0.6} className="relative text-center space-y-4">
              <div className="relative w-52 h-52 mx-auto rounded-full overflow-hidden">
                <Image
                  src="/images/about/gav_code.png"
                  alt="Gayatri coding"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm md:text-base text-slate-800 leading-relaxed">
                  From problem solver to full-stack developer, crafting elegant code
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Additional context */}
          <AnimatedSection delay={0.8} className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              {siteConfig.author.bio}
            </p>
            <p className="mt-6 text-sm md:text-base text-slate-600 leading-relaxed italic">
              Clean code. Beautiful UIs. Seamless experiences.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </SectionContainer>
  );
}
