# 🎬 Slideshow Portfolio Guide

Your portfolio now features a **full-screen slideshow experience** with smooth section transitions, perfect for a software developer portfolio!

---

## ✨ Features Implemented

### 🎨 Visual Design
- **Bubbly pink aesthetic** maintained from the original design
- **Handwritten text elements** for personality
- **Software developer focused** content and sections
- **Clean, modern UI** with cream and pink color scheme

### 🎯 Slideshow Navigation

The portfolio now has **5 full-screen sections** that transition smoothly:

1. **Home** - Hero section with your name in large bubbly text
2. **About** - Your story and background
3. **Projects** - Portfolio of your work with tech stack
4. **Skills** - Your technical skills and expertise
5. **Contact** - Get in touch section

---

## 🎮 How to Navigate

### Keyboard Navigation
- **Arrow Down / Page Down** → Next section
- **Arrow Up / Page Up** → Previous section
- **Home** → Jump to first section
- **End** → Jump to last section

### Mouse Navigation
- **Scroll wheel** → Navigate between sections
- **Right-side navigation dots** → Click to jump to any section
- **Up/Down arrow buttons** → Navigate sequentially

### Touch Navigation (Mobile)
- **Swipe up** → Next section
- **Swipe down** → Previous section

---

## 🎨 Customization

### Update Your Information

Edit `config/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  author: {
    name: "Your Name",
    role: "Full Stack Developer / Software Engineer",
    email: "your@email.com",
  },
  social: [
    { platform: "GitHub", url: "https://github.com/yourusername" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  ],
};
```

### Add Your Projects

Update the `portfolioItems` array:

```typescript
export const portfolioItems = [
  {
    id: "1",
    title: "Your Project Name",
    description: "Brief description of what it does",
    image: "/images/portfolio/project-1.jpg",
    category: "web",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  // Add more projects...
];
```

### Update Your Skills

Customize `skillsData`:

```typescript
export const skillsData = {
  tagline: "it's not just coding, it's crafting experiences.",
  description: "Your approach to development...",
  highlights: [
    "React & Next.js",
    "TypeScript",
    "Your skills here...",
  ],
};
```

---

## 🎬 Animation Details

### Transition Effects
- **Smooth slide transitions** (800ms duration)
- **Fade effects** for section content
- **Throttled scrolling** (1 second between transitions)
- **Easing function**: ease-in-out for natural feel

### Visual Indicators
- **Right-side navigation dots** show current section
- **Progress indicator** at bottom shows section name
- **Active dot** expands to show current position
- **Disabled arrows** when at first/last section

---

## 🛠️ Technical Implementation

### Components Created

1. **SlideshowContainer** (`components/shared/SlideshowContainer.tsx`)
   - Main slideshow logic
   - Handles keyboard, mouse, and touch navigation
   - Manages section transitions

2. **SectionNav** (`components/shared/SectionNav.tsx`)
   - Right-side navigation UI
   - Section dots and arrow buttons
   - Visual feedback for current section

### How It Works

```typescript
// Each section is full-screen
<div className="h-screen w-full">
  <YourSection />
</div>

// Container translates vertically
transform: translateY(-${currentSection * 100}vh)
```

---

## 📱 Responsive Behavior

### Desktop
- Full slideshow experience
- All navigation methods available
- Smooth transitions

### Tablet
- Touch swipe navigation
- On-screen navigation dots
- Optimized spacing

### Mobile
- Touch-first navigation
- Simplified layout
- Bottom progress indicator

---

## 🎯 Developer Portfolio Specifics

### Updated Content Areas

#### Hero Section
- Display your name in large bubbly text
- "let me be your guide" handwritten text
- Job title: "Full Stack Developer / Software Engineer"

#### About Section
- Developer-focused bio
- Journey from curiosity to professional
- Tech philosophy and approach

#### Projects Section
- 6 project cards with hover effects
- Tech stack badges (React, Node.js, etc.)
- Project descriptions
- Category tags (web, mobile, ai, etc.)

#### Skills Section
- "it's not just coding, it's crafting experiences"
- Technical skills list
- Development philosophy

#### Contact Section
- Email, GitHub, LinkedIn links
- Social media integration
- "and that's a wrap" closing

---

## 🔧 Troubleshooting

### Scrolling feels too fast/slow?

Adjust the throttle in `SlideshowContainer.tsx`:

```typescript
// Line ~60
if (now - lastScrollTime.current < 1000 || isTransitioning) return;
// Change 1000 to higher (slower) or lower (faster)
```

### Want different transition speed?

Update the duration in `SlideshowContainer.tsx`:

```typescript
// Line ~136
className="h-full transition-transform duration-800 ease-in-out"
// Change duration-800 to duration-500 (faster) or duration-1000 (slower)
```

### Navigation dots too small on mobile?

Update `SectionNav.tsx`:

```typescript
// Change dot size
className="w-2 h-2 rounded-full" // Make larger: w-3 h-3
```

---

## 🎨 Design Philosophy

This portfolio combines:

✅ **Retro aesthetic** - Bubbly pink typography from original design
✅ **Professional content** - Software developer focused
✅ **Modern UX** - Slideshow navigation for engaging experience
✅ **Personality** - Handwritten elements maintain warmth
✅ **Performance** - Optimized transitions and lazy loading

---

## 🚀 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Run dev server: `npm run dev`
3. 📝 Update `config/site.ts` with your info
4. 🖼️ Add your project images to `public/images/portfolio/`
5. 🎨 Customize colors in `tailwind.config.ts` (optional)
6. 🚀 Deploy to Vercel or your preferred platform

---

## 💡 Tips for Best Experience

- **High-quality project screenshots** make a big impact
- **Keep descriptions concise** - people navigate quickly
- **Update tech stack** to match your actual skills
- **Test on mobile** to ensure smooth touch navigation
- **Use real project data** - authenticity matters

---

**Enjoy your new slideshow portfolio! 🎉**

Built with Next.js, TypeScript, and Tailwind CSS.
