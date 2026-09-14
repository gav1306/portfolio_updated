import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			cream: {
  				'50': '#FDFCFA',
  				'100': '#F5F1E8',
  				DEFAULT: '#F5F1E8'
  			},
  			pink: {
  				'50': '#FCF5F9',
  				'100': '#F9E8F2',
  				'200': '#F4D4E5',
  				'300': '#EEB8D6',
  				'400': '#E89AC7',
  				'500': '#E181B8',
  				'600': '#D55FA1',
  				'700': '#B74482',
  				'800': '#8B3363',
  				'900': '#5F234A',
  				DEFAULT: '#E89AC7'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-inter)',
  				'system-ui',
  				'sans-serif'
  			],
  			display: [
  				'var(--font-display)',
  				'system-ui',
  				'sans-serif'
  			],
  			handwriting: [
  				'var(--font-handwriting)',
  				'cursive'
  			],
  			minebold: [
  				'MineBold',
  				'system-ui',
  				'sans-serif'
  			],
  			giaza: [
  				'Giaza',
  				'system-ui',
  				'sans-serif'
  			],
  			'giaza-stencil': [
  				'GiazaStencil',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
