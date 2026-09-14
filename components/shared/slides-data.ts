import { Slide } from "./AutoRotatingContent";

/**
 * Example slides data for AutoRotatingContent
 *
 * Mix of images and videos showcasing different content types
 */
export const defaultSlides: Slide[] = [
  {
    id: "1",
    type: "image",
    src: "/images/hero/code-editor.jpg",
    alt: "Code editor with React TypeScript",
  },
  {
    id: "2",
    type: "image",
    src: "/images/hero/terminal.jpg",
    alt: "Terminal with build output",
  },
  {
    id: "3",
    type: "image",
    src: "/images/hero/dashboard.jpg",
    alt: "Modern web dashboard interface",
  },
];

/**
 * Placeholder slides for development
 * These use solid colors with text overlays
 */
export const placeholderSlides: Slide[] = [
  {
    id: "placeholder-1",
    type: "image",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23667eea' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='48' fill='white' font-weight='bold'%3EReact + TypeScript%3C/text%3E%3C/svg%3E",
    alt: "React TypeScript development",
  },
  {
    id: "placeholder-2",
    type: "image",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23764ba2' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='48' fill='white' font-weight='bold'%3ETailwind CSS%3C/text%3E%3C/svg%3E",
    alt: "Tailwind CSS styling",
  },
  {
    id: "placeholder-3",
    type: "image",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23f093fb' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='48' fill='white' font-weight='bold'%3EFramer Motion%3C/text%3E%3C/svg%3E",
    alt: "Framer Motion animations",
  },
];

/**
 * Video example slides
 * Replace with actual video URLs when available
 */
export const videoSlides: Slide[] = [
  {
    id: "video-1",
    type: "video",
    src: "/videos/demo-1.mp4",
    alt: "Application demo video",
  },
  {
    id: "video-2",
    type: "video",
    src: "/videos/demo-2.mp4",
    alt: "Feature showcase video",
  },
];

/**
 * Mixed content example
 */
export const mixedSlides: Slide[] = [
  {
    id: "mixed-1",
    type: "image",
    src: "/images/hero/screenshot-1.jpg",
    alt: "Application screenshot",
  },
  {
    id: "mixed-2",
    type: "video",
    src: "/videos/feature-demo.mp4",
    alt: "Feature demonstration",
  },
  {
    id: "mixed-3",
    type: "image",
    src: "/images/hero/screenshot-2.jpg",
    alt: "Dashboard view",
  },
];
