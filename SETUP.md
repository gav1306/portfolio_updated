# Quick Setup Guide

Follow these steps to get your portfolio up and running.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Configure Your Content

### Update Personal Information

Edit `config/site.ts`:

```typescript
export const siteConfig: SiteConfig = {
  name: "Your Name",
  title: "Your Name - Your Role",
  description: "Your portfolio description",
  url: "https://yoursite.com",
  author: {
    name: "Your Name",
    role: "Your Role",
    bio: "Your bio...",
    email: "your@email.com",
  },
  social: [
    {
      platform: "Instagram",
      url: "https://instagram.com/yourhandle",
      icon: "instagram",
    },
    {
      platform: "Email",
      url: "mailto:your@email.com",
      icon: "mail",
    },
  ],
};
```

### Add Portfolio Items

In the same file, update `portfolioItems`:

```typescript
export const portfolioItems = [
  {
    id: "1",
    title: "Project Name",
    image: "/images/portfolio/project-1.jpg",
    category: "design", // or "photography", "video", etc.
  },
  // Add more items...
];
```

### Customize Skills Section

Update `skillsData` in `config/site.ts`:

```typescript
export const skillsData = {
  tagline: "Your tagline here",
  description: "Your description...",
  highlights: [
    "Skill 1",
    "Skill 2",
    // Add more...
  ],
};
```

## Step 3: Add Your Images

### Required Images

1. **Hero Image**: `public/images/hero-photo.jpg`
   - Recommended size: 800x1000px
   - Format: JPG or PNG

2. **Portfolio Images**: `public/images/portfolio/`
   - Multiple images
   - Recommended size: 800x800px minimum

3. **About Section Images**: `public/images/about/`
   - 2-3 photos for the timeline
   - Recommended size: 400x400px

### Update Image References

Once images are added, uncomment the Image components in the section files:

**In `components/sections/Hero.tsx`:**

```typescript
<Image
  src="/images/hero-photo.jpg"
  alt={siteConfig.author.name}
  fill
  priority
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

**In `components/sections/Portfolio.tsx`:**

```typescript
<Image
  src={item.image}
  alt={item.title}
  fill
  className="object-cover transition-transform duration-500 group-hover:scale-105"
  sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
/>
```

## Step 4: Customize Typography (Optional)

### Using Google Fonts

The project uses **Inter** for body text and **Caveat** for handwriting by default.

To use a different bubbly display font:

1. Visit [Google Fonts](https://fonts.google.com)
2. Find a rounded/bubbly font (examples: Fredoka, Righteous, Bungee)
3. Update `app/layout.tsx`:

```typescript
import { Fredoka } from "next/font/google";

const displayFont = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
});
```

### Using Custom Fonts

1. Add font files (`.woff2` format recommended) to `public/fonts/`
2. The project is already configured to load:
   - `display-regular.woff2`
   - `display-bold.woff2`

## Step 5: Customize Colors (Optional)

Edit `tailwind.config.ts` to match your brand:

```typescript
colors: {
  cream: {
    DEFAULT: "#F5F1E8", // Change background color
  },
  pink: {
    400: "#E89AC7", // Change primary color
    // Add more shades as needed
  },
}
```

## Step 6: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Step 7: Build for Production

When ready to deploy:

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

- **Netlify**: Works out of the box
- **AWS Amplify**: Compatible
- **Custom Server**: Use `npm run build && npm run start`

## Checklist

- [ ] Install dependencies
- [ ] Update `config/site.ts` with your info
- [ ] Add hero image
- [ ] Add portfolio images
- [ ] Add about section images
- [ ] Uncomment Image components in sections
- [ ] Customize colors (optional)
- [ ] Add custom fonts (optional)
- [ ] Test on mobile devices
- [ ] Build and deploy

## Need Help?

Check the main [README.md](./README.md) for detailed documentation.

---

Happy building! 🚀
