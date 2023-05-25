/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    fontFamily: {
      'roboto': [],
    },

    extend: {

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      backgroundSize: {
        '150%': '150%',
        '200%': '200%',
        '250%': '250%',
        '300%': '300%',
        '350%': '350%',
        '400%': '400%',
        '450%': '450%',
      },

      margin: {
        '6.5': '1.325rem',
      },

      keyframes: {
        'gradient': {
          '0%': {'background-position': 'left'},
          // '50%': {'background-position': '100% 50%'},
          '100%': {'background-position': 'right'},
        },
        'spin-gradient': {
          '0%': {'--gradient-angle': '0deg'},
          '100%': {'--gradient-angle': '360deg'}
        }
      },

      animation: {
        'gradient': 'gradient 4s infinite alternate',
        'gradient-fast': 'gradient 2s infinite alternate',
        'gradient-spin': 'spin-gradient 5s infinite'
      },

      colors: {
        'orange': '#F15A24',
        'purple': '#2E3192',
      },

    },

  },

  plugins: [],
}
