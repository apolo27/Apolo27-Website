/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '375px',

      'xm': '480px',
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      
      '3xl': '1920px',
    },
    extend: {
      width: {
        '1/8': '12.5%',
        '1/11': '9.090909090909091%'
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 50s linear infinite",
        'infinite-scroll': 'infinite-scroll 12s linear infinite',
        border: 'border 2s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(10)' },
          to: { transform: 'translateX(-100%)' },
        },
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-200px * 11))",
          },
        },
        border: {
          to: { '--border-angle': '360deg' },
        },

      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        "apolo-empty-background": "#0D0F19",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
