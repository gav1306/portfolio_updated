# 🎬 Animation Implementation Guide

All the animations from the video have been implemented using **Framer Motion**!

---

## ✨ Animations Implemented

### 1. **Hero Text Transition** ✅
**What it does:** Text rotates through different phrases smoothly

**Location:** Hero section - "I'm passionate about..."

**Phrases that rotate:**
- "building digital experiences"
- "crafting clean code"
- "solving complex problems"
- "creating seamless UIs"

**Implementation:**
- Component: `RotatingText.tsx`
- Animation: Fade in/out with Y translation
- Interval: 3 seconds (customizable)
- Effect: `opacity 0 → 1` + `translateY(20px → 0)`

**Customize:**
```typescript
// In Hero.tsx
const rotatingPhrases = [
  "your phrase 1",
  "your phrase 2",
  "your phrase 3",
];

<RotatingText
  texts={rotatingPhrases}
  interval={3000} // Change speed here
/>
```

---

### 2. **Laptop Screen Content Swap** ✅
**What it does:** Code snippets carousel inside laptop mockup

**Location:** Hero section (right side)

**Features:**
- 3 rotating code snippets
- Browser-style chrome with traffic lights
- Syntax-highlighted code
- Blinking cursor effect
- Progress dots indicator

**Code snippets shown:**
1. React Component
2. API Route
3. TypeScript Interface

**Implementation:**
- Component: `LaptopMockup.tsx`
- Animation: Horizontal slide transition
- Auto-play: 4-second interval
- Effect: Crossfade with X translation

**Customize:**
```typescript
// In LaptopMockup.tsx
const codeSnippets = [
  {
    title: "Your Code Title",
    content: `your\ncode\nhere`,
    icon: "code",
  },
];
```

---

### 3. **Entrance Animations** ✅
**What it does:** Elements fade in as you scroll

**Location:** All sections

**Effect:**
- Fade in: `opacity 0 → 1`
- Slide up: `translateY(30px → 0)`
- Staggered delays for sequential appearance

**Implementation:**
- Component: `AnimatedSection.tsx`
- Trigger: Intersection Observer (when 10% visible)
- Duration: 0.6s
- Easing: ease-out

**Used in:**
- About section (timeline points)
- Portfolio section (title, caption)
- Skills section (content blocks)
- Contact section (all elements)

---

### 4. **Card Hover Animations** ✅
**What it does:** Project cards scale and lift on hover

**Location:** Portfolio section

**Effects:**
- Scale: `1 → 1.02`
- Box shadow elevation
- Smooth color transitions on tech badges

**Implementation:**
- Component: `AnimatedCard.tsx`
- Hover state: `whileHover`
- Duration: 200ms
- Effect: Scale + shadow

**Features:**
- Entrance animation (fade + slide up)
- Viewport detection (animates when in view)
- Staggered delays (0.1s per card)

---

### 5. **Continuous Hero Animations** ✅
**What it does:** Auto-playing sequences in hero

**Animations:**
1. **Name entrance** - Staggered reveal
2. **Rotating text** - Auto-loops every 3s
3. **Laptop carousel** - Auto-loops every 4s
4. **Handwritten text** - Delayed entrance

**Timeline:**
```
0.0s → "This is" appears
0.3s → First name appears (scale)
0.5s → Last name appears (scale)
0.8s → Rotating text starts
1.0s → Role text appears
1.2s → Handwritten overlay appears
```

---

## 🎨 Animation Components

### RotatingText
```typescript
<RotatingText
  texts={["text 1", "text 2"]}
  interval={3000}
  className="custom-class"
/>
```

### LaptopMockup
```typescript
<LaptopMockup />
// Self-contained, auto-plays
```

### AnimatedSection
```typescript
<AnimatedSection delay={0.2}>
  <YourContent />
</AnimatedSection>
```

### AnimatedCard
```typescript
<AnimatedCard delay={0.1}>
  <YourCard />
</AnimatedCard>
```

---

## ⚙️ Customization Options

### Change Animation Speed

**Global duration:**
```typescript
// In any component
transition={{ duration: 0.8 }} // Change to 0.5 (faster) or 1.2 (slower)
```

**Rotation speed:**
```typescript
// RotatingText
interval={3000} // Change to 2000 (faster) or 5000 (slower)
```

**Laptop carousel speed:**
```typescript
// LaptopMockup.tsx line ~28
setInterval(..., 4000) // Change to 3000 (faster) or 6000 (slower)
```

### Change Animation Style

**Entrance effect:**
```typescript
// AnimatedSection.tsx
initial={{ opacity: 0, y: 30 }} // Change y value for different slide distance
```

**Hover scale:**
```typescript
// AnimatedCard.tsx
whileHover={{ scale: 1.02 }} // Change to 1.05 for more dramatic effect
```

### Add More Rotating Phrases

```typescript
// Hero.tsx
const rotatingPhrases = [
  "existing phrase",
  "new phrase 1",
  "new phrase 2",
  "new phrase 3",
];
```

### Add More Code Snippets

```typescript
// LaptopMockup.tsx
const codeSnippets = [
  {
    id: "4",
    title: "Database Query",
    content: `SELECT * FROM users`,
    icon: "terminal",
  },
];
```

---

## 🎯 Animation Principles Used

### 1. **Timing**
- Staggered delays create rhythm
- Sequential animations guide attention
- Auto-play keeps content dynamic

### 2. **Easing**
- `easeOut` for entrances (smooth deceleration)
- `easeInOut` for transitions (smooth both ways)
- Linear for loops (consistent speed)

### 3. **Performance**
- `will-change` CSS for GPU acceleration
- Intersection Observer for scroll animations
- Framer Motion optimizes animations

### 4. **User Experience**
- Reduced motion respected (browser setting)
- Non-blocking animations
- Meaningful motion (not decorative)

---

## 📊 Animation Timeline

### Page Load Sequence:
```
Hero Section:
├─ 0.0s: "Hi. Since you're here" (fade in)
├─ 0.0s: "This is" (fade in)
├─ 0.3s: First name (scale + fade)
├─ 0.5s: Last name (scale + fade)
├─ 0.8s: Rotating text starts
├─ 1.0s: Role text (fade in)
└─ 1.2s: "let me be your guide" (fade + slide up)

Laptop Mockup:
├─ 0.4s: Laptop appears (section delay)
└─ Every 4s: Content swaps
```

### Scroll Sequence:
```
About Section:
├─ Point 1 (delay: 0.2s)
├─ Path (delay: 0.4s)
├─ Point 2 (delay: 0.6s)
└─ Context (delay: 0.8s)

Portfolio:
├─ Title (delay: 0s)
├─ Card 1 (delay: 0.1s)
├─ Card 2 (delay: 0.2s)
├─ Card 3 (delay: 0.3s)
└─ etc...
```

---

## 🐛 Troubleshooting

### Animations not playing?

1. **Check Framer Motion is installed:**
```bash
npm install framer-motion
```

2. **Ensure "use client" is at top:**
```typescript
"use client";
// All animated components must have this
```

3. **Check browser console for errors**

### Animations too fast/slow?

- Adjust `duration` in transition props
- Change `interval` in rotating components
- Modify `delay` values for stagger

### Want to disable animations?

```typescript
// Set to false to disable
const motionConfig = {
  reducedMotion: "always" // Respects user preferences
};
```

---

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Principles](https://www.framer.com/motion/animation/)
- [Variants](https://www.framer.com/motion/animation/##variants)

---

**All animations are production-ready and performant!** 🚀
