"use client";

import { cn } from "@/lib/utils";

interface SectionNavProps {
  sections: string[];
  currentSection: number;
  onNavigate: (index: number) => void;
}

export function SectionNav({ sections, currentSection, onNavigate }: SectionNavProps) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
      {/* Vertical label */}
      <p
        className="font-handwriting text-[10px] text-slate-400 tracking-widest mb-1 select-none"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        let me be your guide
      </p>

      {/* Dot indicators */}
      <div className="flex flex-col gap-2">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => onNavigate(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentSection === index
                ? "bg-pink-500 h-8"
                : "bg-pink-300/50 hover:bg-pink-400/70"
            )}
            aria-label={`Go to ${section} section`}
            title={section}
          />
        ))}
      </div>
    </div>
  );
}
