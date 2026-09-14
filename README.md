# Stacey Wang Portfolio

A production-grade, visually stunning portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🎨 Design Features

- **Retro aesthetic** with bubbly pink typography
- **Handwritten text elements** for personality
- **Responsive grid layouts** for portfolio showcase
- **Smooth animations** and hover effects
- **Mobile-first approach** for all screen sizes
- **Performance optimized** with Next.js Image component

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **TypeScript** (Strict mode)
- **Tailwind CSS** with custom design tokens
- **Lucide React** for icons
- **Google Fonts** (Inter, Caveat)

## 📦 Project Structure

```
portfolio_updated/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── shared/            # Reusable components
│       ├── BubblyText.tsx
│       ├── HandwrittenText.tsx
│       ├── SectionContainer.tsx
│       └── ImageGrid.tsx
├── config/
│   └── site.ts            # Site configuration & content
├── lib/
│   └── utils.ts           # Utility functions
├── types/
│   └── index.ts           # TypeScript type definitions
└── public/
    ├── images/            # Image assets
    └── fonts/             # Custom fonts (optional)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🖼️ Adding Your Content

### 1. Update Site Configuration

Edit `config/site.ts` to add your personal information:

```typescript
export const siteConfig = {
  name: "Your Name",
  author: {
    name: "Your Name",
    role: "Your Role",
    bio: "Your bio...",
    email: "your@email.com",
  },
  // ... more config
};
```

### 2. Add Images

Place your images in the `public/images/` directory:

- `hero-photo.jpg` - Your main hero image
- `portfolio/` - Portfolio work samples
- `about/` - About section photos

Then update the Image components in the sections to use your images.

### 3. Custom Fonts (Optional)

For the bubbly display font, you have two options:

**Option A: Use Google Fonts**

Find a similar bubbly/rounded font (e.g., Fredoka, Righteous, Bungee) and update `app/layout.tsx`:

```typescript
import { Fredoka } from "next/font/google";

const displayFont = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
});
```

**Option B: Use Custom Local Fonts**

1. Add your font files to `public/fonts/`
2. The layout is already configured to use them

### 4. Portfolio Items

Update the `portfolioItems` array in `config/site.ts`:

```typescript
export const portfolioItems = [
  {
    id: "1",
    title: "Your Project",
    image: "/images/portfolio/project-1.jpg",
    category: "design",
  },
  // ... more items
];
```

## 🎯 Customization

### Colors

Update the color palette in `tailwind.config.ts`:

```typescript
colors: {
  cream: {
    DEFAULT: "#F5F1E8",
  },
  pink: {
    400: "#E89AC7",
    // ... customize shades
  },
}
```

### Typography

Modify font families in `tailwind.config.ts` and `app/layout.tsx`.

### Sections

Each section is a standalone component in `components/sections/`. You can:

- Reorder sections in `app/page.tsx`
- Customize content in each section file
- Add new sections by creating new components

## 📱 Responsive Design

All components are built mobile-first with responsive breakpoints:

- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

## ⚡ Performance

- Images are optimized with `next/image`
- Fonts are preloaded with `display: swap`
- CSS is purged in production
- Static generation for fast page loads

## 🔧 Build for Production

```bash
npm run build
npm run start
```

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Design inspired by creative portfolio aesthetics with a retro twist.

---

Built with ❤️ using Next.js and Tailwind CSS
