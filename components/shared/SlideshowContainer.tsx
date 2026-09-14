"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SlideshowContainerProps {
  children: React.ReactNode[];
  sectionNames?: string[];
}

export function SlideshowContainer({ children, sectionNames }: SlideshowContainerProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsWrapperRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const lastScrollTime = useRef(0);

  const getCurrentSectionEl = () => {
    const sectionWrapper = sectionsWrapperRef.current?.children[currentSection] as HTMLElement | null;
    if (!sectionWrapper) return null;
    // If the section has an inner scrollable element, track that instead
    const inner = sectionWrapper.querySelector("[data-scrollable]") as HTMLElement | null;
    return inner ?? sectionWrapper;
  };

  // Navigate to a specific section
  const navigateToSection = (index: number) => {
    if (index >= 0 && index < children.length && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSection(index);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        if (currentSection < children.length - 1) {
          navigateToSection(currentSection + 1);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        if (currentSection > 0) {
          navigateToSection(currentSection - 1);
        }
      } else if (e.key === "Home") {
        e.preventDefault();
        navigateToSection(0);
      } else if (e.key === "End") {
        e.preventDefault();
        navigateToSection(children.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, children.length, isTransitioning]);

  // Mouse wheel navigation — only navigate sections when at scroll edge
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning) return;

      const sectionEl = getCurrentSectionEl();
      if (sectionEl) {
        const { scrollTop, scrollHeight, clientHeight } = sectionEl;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 2;
        const isAtTop = scrollTop <= 0;

        // If section content overflows and we're not at the edge, let it scroll naturally
        if (e.deltaY > 0 && !isAtBottom) return;
        if (e.deltaY < 0 && !isAtTop) return;
      }

      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime.current < 1000) return;
      lastScrollTime.current = now;

      if (e.deltaY > 0 && currentSection < children.length - 1) {
        navigateToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        navigateToSection(currentSection - 1);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentSection, children.length, isTransitioning]);

  // Touch navigation
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      if (Math.abs(diff) > 50 && !isTransitioning) {
        const sectionEl = getCurrentSectionEl();
        if (sectionEl) {
          const { scrollTop, scrollHeight, clientHeight } = sectionEl;
          const isAtBottom = scrollTop + clientHeight >= scrollHeight - 2;
          const isAtTop = scrollTop <= 0;

          if (diff > 0 && !isAtBottom) return;
          if (diff < 0 && !isAtTop) return;
        }

        if (diff > 0 && currentSection < children.length - 1) {
          navigateToSection(currentSection + 1);
        } else if (diff < 0 && currentSection > 0) {
          navigateToSection(currentSection - 1);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [currentSection, children.length, isTransitioning]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Sections Container */}
      <div
        ref={sectionsWrapperRef}
        className="h-full transition-transform duration-800 ease-in-out"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={cn(
              "h-screen w-full overflow-hidden snap-start",
              "transition-opacity duration-500",
              currentSection === index ? "opacity-100" : "opacity-0"
            )}
          >
            {child}
          </div>
        ))}
      </div>

    </div>
  );
}
