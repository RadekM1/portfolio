import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
  	extend: {
		keyframes: {
			slidein: {
				from: {
					opacity: "0",
					transform: "translateY(-10px)"
				},
				to: {
					opacity: "100",
					transform: "translateY(0)"
				},
			},
		},
		animation: {
			slidein500: "slidein 1s ease 500ms forwards ",
			slidein1000: "slidein 1s ease 1000ms forwards ",
			slidein1200: "slidein 1s ease 1000ms forwards ",
			slidein1400: "slidein 1s ease 1000ms forwards "
		},
		backgroundImage: {
        'grid-slate': 'linear-gradient(to right, rgba(100, 100, 100, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(100, 100, 100, 0.04) 1px, transparent 1px)',
      },
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		fontFamily: {
  			roboto: [
  				'var(--font-roboto)',
  				'latin'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  	}
  },
} satisfies Config;
