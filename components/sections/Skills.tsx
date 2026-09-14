"use client";

import { SectionContainer } from "@/components/shared/SectionContainer";
import { BubblyText } from "@/components/shared/BubblyText";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { skillsData } from "@/config/site";

export function Skills() {
  return (
    <SectionContainer
      id="skills"
      variant="cream"
      className="border-y border-slate-200 h-full flex items-center"
    >
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left side - smaller photo collage */}
        <AnimatedSection delay={0.2} className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-3">
            {/* Main image — smaller aspect ratio */}
            <div className="col-span-2 relative aspect-[16/7] rounded-sm overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200">
              <div className="w-full h-full flex items-center justify-center">
                <BubblyText className="text-3xl md:text-4xl opacity-50">
                  vibe
                </BubblyText>
              </div>
            </div>

            <div className="relative aspect-video rounded-sm overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-xs text-slate-400">Photo 1</span>
              </div>
            </div>

            <div className="relative aspect-video rounded-sm overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-xs text-slate-400">Photo 2</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Right side - content + skill badges */}
        <AnimatedSection delay={0.4} className="space-y-6 order-1 lg:order-2">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-300 leading-tight">
              it&apos;s not just coding,
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-300 leading-tight">
              it&apos;s vibing with visuals.
            </h2>
          </div>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            {skillsData.description}
          </p>

          {/* Pill badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {skillsData.highlights.map((skill) => (
              <span
                key={skill}
                className="text-xs md:text-sm text-pink-600 bg-pink-50 border border-pink-200 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <BubblyText className="text-4xl md:text-5xl lg:text-6xl opacity-20">
              skills
            </BubblyText>
          </div>
        </AnimatedSection>
      </div>
    </SectionContainer>
  );
}
