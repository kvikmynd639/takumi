import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'sea1': 'url("https://w0.peakpx.com/wallpaper/615/738/HD-wallpaper-initial-d-initial-d-netflix-anime-movies.jpg")',
        'sea2': 'url("https://images6.alphacoders.com/129/thumb-1920-1297693.jpg")',
        'sea3': 'url("https://images6.alphacoders.com/754/754329.jpg")',
        'mako': 'url("https://i.pinimg.com/originals/d6/51/c3/d651c3d19e9827761a75c35ecc25984c.jpg")',
        'keisuke': 'url("https://wallpapercave.com/wp/wp8202385.jpg")',
        'projectD': 'url("https://pbs.twimg.com/media/FUGTWn8X0AE2gOh?format=jpg&name=large")',
        'sidewinder': 'url("https://pbs.twimg.com/media/E8HBjENVEAgRNq7.jpg:large")',
        'impactBlue': 'url("https://preview.redd.it/37dnujxqt8471.png?width=1080&crop=smart&auto=webp&s=93290605b8348695e194a9aa84c744807793bb6f")'
      },
    },
  },
  plugins: [],
};
export default config;
