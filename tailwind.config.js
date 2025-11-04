import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: {
          50: '#faf5ff', 
          100: '#f3e8ff', 
          200: '#e9d5ff', 
          300: '#d8b4fe', 
          400: '#c084fc', 
          500: '#a855f7',  
          600: '#9333ea',  
          700: '#7e22ce',  
          800: '#6b21a8',  
          900: '#581c87',  
          950: '#3b0764',  
          DEFAULT: '#a855f7',
          foreground: '#ffffff',
        },
        dark: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1a1a1a',  
          950: '#0a0a0a',  
          DEFAULT: '#1a1a1a',
          foreground: '#ffffff',
        },
      },
      backgroundImage: {
        'gradient-ground-100': 'linear-gradient(135deg, #a855f7 0%, #1a1a1a 100%)',
        'gradient-ground-200': 'linear-gradient(135deg, #a855f7 0%, #ffffff 100%)',
        'gradient-ground-300': 'linear-gradient(135deg, #0a0a0a 0%, #ffffff 100%)',
        'gradient-ground-400': 'linear-gradient(135deg, #9333ea 0%, #581c87 100%)',
        'gradient-ground-500': 'linear-gradient(to bottom, #a855f7, #7e22ce, #1a1a1a)',
        'gradient-ground-600': 'radial-gradient(circle, #a855f7 0%, #1a1a1a 100%)',
        'gradient-ground-700': 'linear-gradient(135deg, #a855f7 0%, #6b21a8 50%, #0a0a0a 100%)',
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#1a1a1a",
            primary: {
              50: '#faf5ff',
              100: '#f3e8ff',
              200: '#e9d5ff',
              300: '#d8b4fe',
              400: '#c084fc',
              500: '#a855f7',
              600: '#9333ea',
              700: '#7e22ce',
              800: '#6b21a8',
              900: '#581c87',
              DEFAULT: '#a855f7',
              foreground: '#ffffff',
            },
            focus: "#a855f7",
          },
        },
        dark: {
          colors: {
            background: "#0a0a0a",
            foreground: "#FFFFFF",
            primary: {
              50: '#faf5ff',
              100: '#f3e8ff',
              200: '#e9d5ff',
              300: '#d8b4fe',
              400: '#c084fc',
              500: '#a855f7',
              600: '#9333ea',
              700: '#7e22ce',
              800: '#6b21a8',
              900: '#581c87',
              DEFAULT: '#a855f7',
              foreground: '#ffffff',
            },
            focus: "#a855f7",
          },
        },
      },
    }),
  ],
}

module.exports = config;