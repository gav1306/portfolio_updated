# ⚡ Quick Start

Get your portfolio running in 5 minutes.

## 1. Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 2. Essential Edits

### Your Info (Required)

Edit `config/site.ts`:

```typescript
name: "Your Name",
role: "Your Role",
email: "your@email.com",
```

### Your Images (Required)

Add to `public/images/`:
- `hero-photo.jpg` (your main photo)
- `portfolio/` (your work samples)

Then uncomment Image components in:
- `components/sections/Hero.tsx` (line ~50)
- `components/sections/Portfolio.tsx` (line ~35)

## 3. Deploy

### Vercel (1-click)

```bash
npm run build
# Push to GitHub, then import on vercel.com
```

## That's it! 🎉

For detailed setup: see [SETUP.md](./SETUP.md)

---

## Project Structure at a Glance

```
portfolio_updated/
├── app/                    # Pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Styles
├── components/
│   ├── sections/          # Hero, About, Portfolio, Skills, Contact
│   ├── shared/            # Reusable components
│   └── ui/                # UI primitives
├── config/
│   └── site.ts           # ⚠️ EDIT YOUR INFO HERE
├── public/
│   └── images/           # ⚠️ ADD YOUR IMAGES HERE
└── types/                # TypeScript definitions
```

## Common Tasks

### Change Colors

`tailwind.config.ts`:
```typescript
pink: { 400: "#YOUR_COLOR" }
```

### Add Portfolio Items

`config/site.ts`:
```typescript
portfolioItems = [
  { id: "1", title: "...", image: "..." }
]
```

### Change Fonts

`app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";
```

## Troubleshooting

**Images not showing?**
- Check file paths match exactly
- Images must be in `public/images/`
- File names are case-sensitive

**Fonts look wrong?**
- Install dependencies: `npm install`
- Check browser cache (hard refresh: Cmd+Shift+R)

**Build errors?**
- Run `npm install` again
- Check Node version (18.x or higher)
- Delete `.next` folder and rebuild

## Need Help?

1. Check [SETUP.md](./SETUP.md) - Detailed setup guide
2. Check [README.md](./README.md) - Full documentation
3. Check [DESIGN_NOTES.md](./DESIGN_NOTES.md) - Design system

---

Happy building! 🚀
