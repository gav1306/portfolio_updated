"use client";

import { BubblyText } from "@/components/shared/BubblyText";
import { HandwrittenText } from "@/components/shared/HandwrittenText";

export function Hero() {
  return (
    <section className="relative h-full bg-cream overflow-hidden">

      {/* Name block — centered */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ top: "30%" }}
      >
        <BubblyText
          as="h1"
          className="leading-none select-none tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 12vw, 14rem)", opacity: 0.85, transform: "rotate(-1deg)" }}
        >
          gayatri
        </BubblyText>
        <BubblyText
          as="h1"
          className="leading-none select-none tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 12vw, 14rem)", opacity: 0.85, transform: "rotate(1deg)" }}
        >
          patil
        </BubblyText>
      </div>

      {/* "Hi. Since you're here," — top-left */}
      <div
        className="absolute z-10"
        style={{ top: "7%", left: "4%", transform: "rotate(-1.5deg)" }}
      >
        <HandwrittenText className="text-xl md:text-2xl text-slate-700">
          Hi. Since you&apos;re new here,
        </HandwrittenText>
      </div>

      {/* "let me be your guide" — top-right */}
      <div
        className="absolute z-10"
        style={{ top: "16%", right: "6%", transform: "rotate(1.5deg)" }}
      >
        <HandwrittenText className="text-lg md:text-xl text-slate-500">
          let me be your guide
        </HandwrittenText>
      </div>

      {/* "This is" — just above the name */}
      <div
        className="absolute z-10"
        style={{ top: "30%", left: "14%", transform: "rotate(1deg)" }}
      >
        <HandwrittenText className="text-xl md:text-2xl text-slate-700">
          This is
        </HandwrittenText>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-5 left-0 right-0 px-6 md:px-10 flex justify-between items-end z-10">
        <p className="text-xs md:text-sm text-slate-500 font-medium">
          Frontend Developer / Frontend Engineer
        </p>
        <HandwrittenText className="text-base md:text-lg text-slate-600">
          By Gayatri Patil
        </HandwrittenText>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent z-10" />
    </section>
  );
}
