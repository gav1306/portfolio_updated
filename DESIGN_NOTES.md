# Design Analysis & Implementation Notes

This document explains the design decisions and implementation details for the portfolio.

## Design Analysis Summary

### Visual Identity

**Core Aesthetic**: Retro-modern fusion with a playful, confident personality

**Key Characteristics**:
- Large bubbly typography creates visual impact
- Handwritten elements add personal warmth
- Cream and pink color scheme feels approachable yet professional
- Black & white photography provides sophisticated contrast

---

## Color System

### Primary Palette

```css
Cream (Background):    #F5F1E8
Pink (Primary):        #E89AC7
Light Pink (Accent):   #F4D4E5
Dark Text:             #2D2D2D
Muted Text:            #8B8B8B
```

### Usage Guidelines

- **Cream**: Primary background, creates soft warmth
- **Pink**: Display typography, accents, hover states
- **Dark Text**: Body copy, ensures readability
- **Muted Text**: Metadata, captions, secondary info

### Accessibility

- Text contrast ratios meet WCAG AA standards
- Pink used primarily for decorative elements
- Dark text ensures readability on cream background

---

## Typography System

### Font Hierarchy

1. **Display Font** (Bubbly/Retro)
   - Use: Large section headers, name, decorative text
   - Size: 72px - 160px
   - Weight: Bold (700)
   - Letter-spacing: Tight (-0.02em)
   - Examples: "Stacey Wang", "skills", "and that's a wrap"

2. **Handwriting Font** (Casual Script)
   - Use: Personal notes, annotations, greetings
   - Size: 24px - 36px
   - Weight: Regular (400)
   - Examples: "Hi. Since you're here", "let me be your guide"

3. **Sans-serif Font** (Clean Body)
   - Use: Body text, descriptions, metadata
   - Size: 14px - 18px
   - Weight: Regular (400) and Medium (500)
   - Line-height: 1.6 for readability

### Scale

```
Display:    96px / 120px / 160px
H2:         48px / 60px / 72px
H3:         32px / 36px / 42px
Body:       14px / 16px / 18px
Small:      12px / 14px
```

---

## Layout Structure

### Grid System

- **Container max-width**: 1280px (max-w-7xl)
- **Horizontal padding**: 16px (mobile) → 24px (desktop)
- **Section spacing**: 64px (mobile) → 96px (desktop)

### Section Breakdown

#### 1. Hero Section
- **Layout**: Two-column grid (image + text)
- **Image**: 3:4 aspect ratio portrait
- **Text**: Stacked large display type
- **Key Element**: Decorative handwritten overlay

**Responsive Behavior**:
- Mobile: Stack vertically, image first
- Desktop: Side-by-side, text left, image right

#### 2. About Section
- **Layout**: Timeline with connected illustrations
- **Elements**: Circular photo frames, connecting paths
- **Text**: Narrative storytelling format

**Implementation Notes**:
- SVG paths for connecting lines
- Responsive: Vertical on mobile, horizontal on desktop

#### 3. Portfolio Section
- **Layout**: Masonry-style grid
- **Grid**: 2 columns (mobile) → 3 columns (desktop)
- **First item**: Featured (larger, spans 2 rows)
- **Hover**: Scale + overlay with caption

**Image Specs**:
- Aspect ratio: Square (1:1) for consistency
- Featured: 3:4 aspect ratio
- Lazy loading for performance

#### 4. Skills Section
- **Layout**: Two-column split
- **Left**: Photo collage
- **Right**: Text content + decorative typography
- **Bottom**: 4-column showcase grid

**Key Feature**: Large muted text for "vibing with visuals"

#### 5. Contact Section
- **Layout**: Centered single column
- **Elements**: Large bubbly "wrap", handwritten note, contact links
- **Footer**: Copyright and attribution

---

## Component Architecture

### Reusable Components

**BubblyText**
- Props: `children`, `className`, `as` (h1/h2/h3/span/div)
- Handles: Font styling, text shadow, sizing
- Use case: All large decorative pink text

**HandwrittenText**
- Props: `children`, `className`, `as` (p/span/h1/h2/h3)
- Handles: Handwriting font, natural appearance
- Use case: Personal notes and annotations

**SectionContainer**
- Props: `children`, `variant`, `id`, `className`
- Handles: Consistent padding, max-width, backgrounds
- Variants: default, cream, card

**ImageGrid**
- Props: `images`, `columns`, `gap`
- Handles: Responsive grid, lazy loading, hover states
- Use case: Portfolio galleries

### Section Components

Each section is self-contained with:
- Own data fetching/config
- Responsive layout logic
- Accessibility features
- Optimized images

---

## Responsive Breakpoints

```
sm:   640px  (small tablets)
md:   768px  (tablets)
lg:   1024px (laptops)
xl:   1280px (desktops)
```

### Mobile-First Approach

All components start with mobile layout, then enhance:

```typescript
// Mobile by default
className="text-4xl"

// Tablet and up
className="text-4xl md:text-6xl"

// Desktop
className="text-4xl md:text-6xl lg:text-8xl"
```

---

## Performance Optimizations

### Images

- Next.js Image component for automatic optimization
- Responsive sizing with `sizes` prop
- Priority loading for above-the-fold images
- Lazy loading for portfolio items

### Fonts

- Variable fonts for reduced file size
- `font-display: swap` to prevent invisible text
- Preloading critical fonts
- System font fallbacks

### CSS

- Tailwind's purge removes unused styles
- No runtime CSS-in-JS overhead
- Minimal custom CSS

---

## Accessibility Features

- **Semantic HTML**: `<section>`, `<article>`, `<nav>`
- **Alt text**: All images have descriptive alt text
- **Keyboard navigation**: All interactive elements focusable
- **Focus indicators**: Visible focus states
- **ARIA labels**: Where needed for screen readers
- **Color contrast**: WCAG AA compliant

---

## Animation & Interaction

### Hover States

- Portfolio items: Scale up (105%) + overlay
- Links: Color change + scale icon
- Cards: Subtle shadow increase

### Transitions

```css
transition-duration: 300ms
transition-timing: ease-out
```

### Animations

- Fade in up for initial load (optional)
- Smooth scroll for anchor links
- Stagger animations for grids (optional enhancement)

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ JavaScript features
- CSS Grid and Flexbox
- CSS Custom Properties (CSS variables)

---

## Content Strategy

### Tone of Voice

- **Confident**: Large bold statements
- **Approachable**: Handwritten personal notes
- **Professional**: Clean body copy
- **Playful**: Decorative elements and color

### Copywriting Guidelines

- Keep it conversational
- Focus on storytelling
- Use "I" and "my" for authenticity
- Short paragraphs for readability

---

## Customization Guide

### Changing the Color Scheme

1. Update `tailwind.config.ts` colors
2. Test contrast ratios for accessibility
3. Update hover/active states

### Changing Typography

1. Choose fonts from Google Fonts or local
2. Update `app/layout.tsx` imports
3. Update `tailwind.config.ts` font families
4. Test hierarchy across all sections

### Modifying Layout

1. Each section is independent
2. Adjust grid columns in Tailwind classes
3. Update spacing variables for consistency
4. Test responsiveness at all breakpoints

---

## Future Enhancements

### Phase 1 (MVP - Current)
- ✅ Static content
- ✅ Responsive design
- ✅ Basic animations
- ✅ SEO optimization

### Phase 2 (Enhancements)
- [ ] Contact form with backend
- [ ] Blog/case studies section
- [ ] Filtering for portfolio items
- [ ] Advanced animations (Framer Motion)

### Phase 3 (Advanced)
- [ ] CMS integration (Sanity, Contentful)
- [ ] Dark mode toggle
- [ ] i18n support
- [ ] Analytics integration

---

## Deployment Checklist

- [ ] Replace all placeholder images
- [ ] Update site metadata in `config/site.ts`
- [ ] Add custom fonts (if using)
- [ ] Test all links and CTAs
- [ ] Optimize images (compress, correct formats)
- [ ] Test on real devices
- [ ] Run Lighthouse audit
- [ ] Set up analytics (optional)
- [ ] Configure domain and SSL
- [ ] Submit sitemap to search engines

---

Built with attention to detail and modern best practices.
