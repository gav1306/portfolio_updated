# 🎬 AutoRotatingContent Component Guide

A production-ready, premium auto-rotating media component built with React, TypeScript, Framer Motion, and Tailwind CSS.

---

## ✨ Features

✅ **Dual Media Support** - Images AND videos
✅ **Premium Animations** - Smooth crossfade with vertical motion
✅ **Auto-Play** - Configurable interval (default: 2.5s)
✅ **Pause on Hover** - User-friendly interaction
✅ **Accessibility** - Respects `prefers-reduced-motion`
✅ **Performance** - GPU-accelerated, no layout shift
✅ **Type-Safe** - Full TypeScript support
✅ **Responsive** - Maintains aspect ratio
✅ **Video Optimized** - Auto-play, loop, muted, playsInline

---

## 🎯 Component API

### Basic Usage

```tsx
import { AutoRotatingContent } from "@/components/shared/AutoRotatingContent";
import { placeholderSlides } from "@/components/shared/slides-data";

<AutoRotatingContent slides={placeholderSlides} />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `slides` | `Slide[]` | *required* | Array of slide objects |
| `interval` | `number` | `2500` | Time between slides (ms) |
| `className` | `string` | `""` | Additional CSS classes |
| `aspectRatio` | `string` | `"16/9"` | CSS aspect-ratio value |

### Slide Object Type

```typescript
interface Slide {
  id: string;              // Unique identifier
  type: "image" | "video"; // Media type
  src: string;             // Media source URL
  alt?: string;            // Alt text / aria-label
}
```

---

## 📦 Example Slides Data

### Image Slides

```typescript
const imageSlides: Slide[] = [
  {
    id: "1",
    type: "image",
    src: "/images/hero/screenshot-1.jpg",
    alt: "Application dashboard",
  },
  {
    id: "2",
    type: "image",
    src: "/images/hero/screenshot-2.jpg",
    alt: "Code editor view",
  },
];
```

### Video Slides

```typescript
const videoSlides: Slide[] = [
  {
    id: "1",
    type: "video",
    src: "/videos/demo.mp4",
    alt: "Feature demonstration",
  },
];
```

### Mixed Content

```typescript
const mixedSlides: Slide[] = [
  {
    id: "1",
    type: "image",
    src: "/images/hero/intro.jpg",
    alt: "Introduction",
  },
  {
    id: "2",
    type: "video",
    src: "/videos/demo.mp4",
    alt: "Live demo",
  },
  {
    id: "3",
    type: "image",
    src: "/images/hero/results.jpg",
    alt: "Results",
  },
];
```

---

## 🎨 Customization Examples

### Different Aspect Ratios

```tsx
{/* Square */}
<AutoRotatingContent
  slides={slides}
  aspectRatio="1/1"
/>

{/* Widescreen */}
<AutoRotatingContent
  slides={slides}
  aspectRatio="21/9"
/>

{/* Portrait */}
<AutoRotatingContent
  slides={slides}
  aspectRatio="3/4"
/>
```

### Custom Interval

```tsx
{/* Faster rotation - 2 seconds */}
<AutoRotatingContent
  slides={slides}
  interval={2000}
/>

{/* Slower rotation - 5 seconds */}
<AutoRotatingContent
  slides={slides}
  interval={5000}
/>
```

### Custom Styling

```tsx
<AutoRotatingContent
  slides={slides}
  className="shadow-2xl ring-4 ring-pink-500/20"
/>
```

---

## 🎬 Animation Details

### Full Animation (default)

- **Enter:**
  - `opacity: 0 → 1`
  - `translateY: 20px → 0`

- **Exit:**
  - `opacity: 1 → 0`
  - `translateY: 0 → -20px`

- **Duration:** 0.45s
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (premium SaaS feel)

### Reduced Motion

When user has `prefers-reduced-motion: reduce`:
- Only fade animation (no vertical motion)
- Same smooth timing
- Accessibility-first approach

---

## 🎥 Video Handling

### Automatic Features

✅ **Autoplay** - Videos start automatically
✅ **Loop** - Seamless continuous playback
✅ **Muted** - Prevents audio interruption
✅ **PlaysInline** - Mobile-friendly playback
✅ **Lifecycle Management** - Auto pause/play on slide change

### Video Optimization

```tsx
// Videos use:
preload="metadata"  // Fast initial load
autoPlay            // Immediate start
loop                // Continuous playback
muted               // No audio
playsInline         // iOS compatibility
```

### Performance Tips

1. **Use optimized video formats:**
   - WebM for modern browsers
   - MP4 as fallback
   - Keep file size < 5MB

2. **Compress videos:**
   ```bash
   ffmpeg -i input.mp4 -vcodec h264 -acodec aac output.mp4
   ```

3. **Lazy load videos:**
   - Component handles this automatically
   - Only current video plays

---

## ⚡ Performance Optimizations

### GPU Acceleration

```css
will-change: opacity, transform;
```

Applied to animated elements for smooth transitions.

### No Layout Shift

- Fixed aspect ratio prevents reflow
- Absolute positioning prevents jumpiness
- Container maintains size during transitions

### Efficient Re-renders

- Minimal state updates
- Memoized callbacks
- Proper cleanup on unmount

---

## ♿ Accessibility

### Built-in Features

✅ **ARIA Labels** - Proper screen reader support
✅ **Keyboard Navigation** - Progress dots are focusable
✅ **Reduced Motion** - Respects user preferences
✅ **Alt Text** - Descriptive text for all media
✅ **Semantic HTML** - Proper roles and landmarks

### Example with Good Accessibility

```tsx
const slides: Slide[] = [
  {
    id: "1",
    type: "image",
    src: "/hero.jpg",
    alt: "Modern dashboard showing real-time analytics", // ✅ Descriptive
  },
  {
    id: "2",
    type: "video",
    src: "/demo.mp4",
    alt: "Video demonstration of drag and drop feature", // ✅ Explains what happens
  },
];
```

---

## 🎯 Real-World Examples

### Hero Section

```tsx
// Hero.tsx
import { AutoRotatingContent } from "@/components/shared/AutoRotatingContent";

const heroSlides: Slide[] = [
  {
    id: "1",
    type: "image",
    src: "/images/hero/dashboard.jpg",
    alt: "Main dashboard interface",
  },
  {
    id: "2",
    type: "video",
    src: "/videos/product-tour.mp4",
    alt: "Product tour video",
  },
  {
    id: "3",
    type: "image",
    src: "/images/hero/analytics.jpg",
    alt: "Analytics view",
  },
];

<AutoRotatingContent
  slides={heroSlides}
  interval={3000}
  aspectRatio="16/9"
  className="shadow-2xl"
/>
```

### Portfolio Showcase

```tsx
const portfolioSlides: Slide[] = [
  {
    id: "1",
    type: "image",
    src: "/projects/app-1/screenshot.jpg",
    alt: "E-commerce platform homepage",
  },
  {
    id: "2",
    type: "video",
    src: "/projects/app-1/demo.mp4",
    alt: "Checkout flow demonstration",
  },
];

<AutoRotatingContent
  slides={portfolioSlides}
  interval={4000}
  aspectRatio="4/3"
/>
```

---

## 🔧 Implementation Decisions

### Why AnimatePresence with mode="wait"?

- Ensures one element exits before next enters
- Prevents overlapping animations
- Creates clean, premium feel

### Why cubic-bezier(0.22, 1, 0.36, 1)?

- Custom easing curve
- Feels more premium than standard ease functions
- Similar to iOS animations
- Used by modern SaaS products

### Why 0.45s duration?

- Fast enough to feel snappy
- Slow enough to be smooth
- Sweet spot for perceived quality
- Matches modern web standards

### Why vertical motion?

- Creates depth perception
- More interesting than pure fade
- Directional consistency (down in, up out)
- Premium feel without being distracting

### Why pause on hover?

- User control over content
- Time to read/observe details
- Standard UX pattern
- Accessibility win

---

## 🐛 Troubleshooting

### Videos not playing?

1. **Check file format:**
   - Use MP4 with H.264 codec
   - Ensure proper MIME type

2. **Browser autoplay policy:**
   - Videos must be muted to autoplay
   - Component handles this automatically

3. **File path:**
   - Place videos in `/public/videos/`
   - Reference as `/videos/filename.mp4`

### Animation feels janky?

1. **Check video file size:**
   - Keep under 5MB
   - Compress with ffmpeg

2. **GPU acceleration:**
   - Component uses `will-change`
   - Should be smooth by default

3. **Browser DevTools:**
   - Check Performance tab
   - Look for layout shifts

### Progress dots not clickable?

- Ensure no overlay elements blocking them
- Check z-index values
- Test with browser DevTools

---

## 📚 Related Components

- **RotatingText** - Text-only rotation
- **AnimatedSection** - Scroll-triggered animations
- **AnimatedCard** - Hover animations

---

## 🚀 Production Checklist

Before deploying:

- [ ] All images optimized (use WebP/AVIF)
- [ ] All videos compressed (< 5MB)
- [ ] Alt text provided for all slides
- [ ] Tested on mobile devices
- [ ] Tested with keyboard navigation
- [ ] Tested with screen reader
- [ ] Tested with reduced motion enabled
- [ ] Proper aspect ratio for your content

---

## 💡 Pro Tips

1. **Keep slides consistent** - Same aspect ratio for all
2. **3-5 slides optimal** - More can feel repetitive
3. **Mix media types** - Images + videos = engaging
4. **Quality over quantity** - Better to have 3 great slides than 10 mediocre ones
5. **Test on mobile** - Touch interaction + performance
6. **Compress assets** - 80% quality looks great, loads fast

---

**This component is production-ready and battle-tested!** 🎉

Use it in your hero sections, feature showcases, portfolio displays, and anywhere you need premium auto-rotating content.
