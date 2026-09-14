"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BubblyText } from "@/components/shared/BubblyText";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { portfolioItems } from "@/config/site";

const categoryGradients: Record<string, string> = {
  web: "from-pink-100 to-rose-200",
  ai: "from-violet-100 to-purple-200",
  tool: "from-sky-100 to-blue-200",
  data: "from-emerald-100 to-teal-200",
  mobile: "from-orange-100 to-amber-200",
};

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

interface CarouselProps {
  current: number;
  setCurrent: (i: number) => void;
}

function ProjectCarousel({ current, setCurrent }: CarouselProps) {
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((current + dir + portfolioItems.length) % portfolioItems.length);
  };

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const project = portfolioItems[current];
  const gradient = categoryGradients[project.category] ?? "from-pink-100 to-rose-200";

  return (
    <div className="w-full h-screen flex items-center bg-cream overflow-hidden">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="w-full flex h-[70vh]"
        >
          {/* Left column — fills remaining space equally with right */}
          <div className="flex-1 flex flex-col justify-center px-10 space-y-5">
            <span className="text-xs text-pink-500 bg-pink-50 border border-pink-200 px-3 py-1 rounded-full w-fit capitalize">
              {project.category}
            </span>

            <BubblyText as="h3" className="text-3xl md:text-4xl leading-tight">
              {project.title}
            </BubblyText>

            {/* Navigation */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => paginate(-1)}
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-pink-300 hover:text-pink-500 transition-colors flex items-center justify-center text-slate-500"
              >
                ←
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-pink-300 hover:text-pink-500 transition-colors flex items-center justify-center text-slate-500"
              >
                →
              </button>
              <div className="flex gap-2 ml-1">
                {portfolioItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "w-6 bg-pink-400" : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Center column — 768px wide */}
          <div className={`relative w-[768px] flex-shrink-0 bg-gradient-to-br ${gradient}`}>
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            {/* Counter */}
            <div className="absolute bottom-5 left-5 font-mono text-xs text-white/70 tracking-widest">
              {String(current + 1).padStart(2, "0")} / {String(portfolioItems.length).padStart(2, "0")}
            </div>
          </div>

          {/* Right column — fills remaining space equally with left */}
          <div className="flex-1 flex flex-col justify-center px-10 space-y-5">
            <p className="text-sm md:text-base text-slate-500 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs text-pink-600 bg-pink-50 border border-pink-200 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative h-full bg-cream overflow-hidden">
      {/* Section heading */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-end items-end px-6 md:px-10 pt-6 pointer-events-none">
        <BubblyText as="h2" className="text-4xl md:text-5xl lg:text-6xl">
          things<br />i have<br />built
        </BubblyText>
      </div>

      {/* Scrollable container — drives MacBook animation */}
      <div ref={containerRef} data-scrollable className="h-full overflow-y-auto">
        {/* MacBook — src syncs with current carousel slide */}
        <div className="w-full overflow-hidden bg-cream">
          <MacbookScroll
            src={portfolioItems[current].image}
            showGradient={false}
            containerRef={containerRef}
          />
        </div>

        {/* Full-width carousel — appears after MacBook lid opens */}
        <ProjectCarousel current={current} setCurrent={setCurrent} />
      </div>
    </div>
  );
}
