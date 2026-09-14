"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Slide type definition
export interface Slide {
  id: string;
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface AutoRotatingContentProps {
  slides: Slide[];
  interval?: number;
  className?: string;
  aspectRatio?: string;
}

/**
 * AutoRotatingContent - Premium auto-rotating media component
 *
 * Features:
 * - Supports both images and videos
 * - Smooth crossfade with vertical motion
 * - Auto-play with pause on hover
 * - Respects prefers-reduced-motion
 * - GPU-accelerated animations
 * - Type-safe with TypeScript
 *
 * @param slides - Array of slide objects with type, src, and optional alt
 * @param interval - Time between slides in ms (default: 2500)
 * @param className - Additional CSS classes
 * @param aspectRatio - CSS aspect-ratio value (default: "16/9")
 */
export function AutoRotatingContent({
  slides,
  interval = 2500,
  className,
  aspectRatio = "16/9",
}: AutoRotatingContentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Auto-rotation logic
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval, isPaused]);

  // Video lifecycle management
  useEffect(() => {
    const currentSlide = slides[currentIndex];

    if (currentSlide.type === "video") {
      const video = videoRefs.current.get(currentSlide.id);
      if (video) {
        // Reset and play current video
        video.currentTime = 0;
        video.play().catch(() => {
          // Silently handle autoplay failures
        });
      }
    }

    // Pause all other videos
    videoRefs.current.forEach((video, id) => {
      if (id !== currentSlide.id) {
        video.pause();
      }
    });
  }, [currentIndex, slides]);

  const currentSlide = slides[currentIndex];

  // Animation variants
  const variants = prefersReducedMotion
    ? {
        // Reduced motion: simple fade only
        enter: { opacity: 1 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        // Full animation: fade + vertical motion
        enter: {
          opacity: 0,
          y: 20,
        },
        center: {
          opacity: 1,
          y: 0,
        },
        exit: {
          opacity: 0,
          y: -20,
        },
      };

  const transition = {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1], // Premium cubic-bezier easing
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg bg-slate-900/5",
        className
      )}
      style={{ aspectRatio }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Auto-rotating content carousel"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentSlide.id}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          className="absolute inset-0 will-change-[opacity,transform]"
        >
          {currentSlide.type === "image" ? (
            <img
              src={currentSlide.src}
              alt={currentSlide.alt || `Slide ${currentIndex + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <video
              ref={(el) => {
                if (el) videoRefs.current.set(currentSlide.id, el);
                else videoRefs.current.delete(currentSlide.id);
              }}
              src={currentSlide.src}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label={currentSlide.alt || `Video ${currentIndex + 1}`}
            >
              <track kind="captions" />
            </video>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-1.5 bg-white/50 hover:bg-white/75"
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
