/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      gridTemplateColumns: {
        '25/75': '25% 75%',
      },
      keyframes: {
        low_index: {
          '0%, 80%': { zIndex: '12' },
          '100%': { zIndex: '0' },
        },
        layer_down: {
          '0%': { opacity: '0' },
          '80%': { opacity: '0' },
          '100%': { opacity: '1', zIndex: '12' },
        },
      },
      animation: {
        'low-index': 'low_index 3.1s ease-in-out forwards',
        'layer-down': 'layer_down 2.7s ease-in-out forwards',
      },
      fontFamily: {
        'zen': ['Zen Kurenaido'],
        'poppins': ['Poppins'],
        'm-round': ['M PLUS Rounded 1c']
      }
    },
  },
  plugins: [],
}

