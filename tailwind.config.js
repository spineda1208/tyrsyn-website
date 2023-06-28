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
        '50%': '50%',
        '100%': '100%',
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

      transitionProperty: {
        'grid-rows': 'grid-template-rows',
      },

      keyframes: {
        'gradient': {
          '0%': {'background-position': 'left'},
          '100%': {'background-position': 'right'},
        },
        'spin-gradient': {
          '0%': {'--gradient-angle': '0deg'},
          '100%': {'--gradient-angle': '360deg'}
        },

        'hero-id-gradient': {
          'from, 16.667%, to': {
            opacity: 1,
          },
          '33.333%, 83.333%': {
            opacity: 0,
          },
        },
        'hero-id-white': {
          'from, 16.667%, to': {
            opacity: 0,
          },
          '33.333%, 83.333%': {
            opacity: 1,
          },
        },
        'hero-track-gradient': {
          'from, to': {
            opacity: 0,
          },
          '33.333%, 50%': {
            opacity: 1,
          },
          '16.667%, 66.667%': {
            opacity: 0,
          },
        },
        'hero-track-white': {
          'from, to': {
            opacity: 1,
          },
          '33.333%, 50%': {
            opacity: 0,
          },
          '16.667%, 66.667%': {
            opacity: 1,
          },
        },
        'hero-eff-gradient': {
          'from, 50%, to': {
            opacity: 0,
          },
          '66.667%, 83.333%': {
            opacity: 1,
          },
        },
        'hero-eff-white': {
          'from, 50%, to': {
            opacity: 1,
          },
          '66.667%, 83.333%': {
            opacity: 0,
          },
        },
        },
        
        animation: {
          'gradient': 'gradient 4s infinite alternate',
          'gradient-fast': 'gradient 2s infinite alternate',
          'gradient-faster': 'gradient 1.5s infinite alternate',

          'hero-id-gradient': 'hero-id-gradient 10s infinite',
          'hero-id-white': 'hero-id-white 10s infinite',

          'hero-track-gradient': 'hero-track-gradient 10s infinite',
          'hero-track-white': 'hero-track-white 10s infinite',

          'hero-eff-gradient': 'hero-eff-gradient 10s infinite',
          'hero-eff-white': 'hero-eff-white 10s infinite',

          'about-id-gradient': 'hero-id-gradient 10s infinite',
          'about-id-white': 'hero-id-white 10s infinite',

          'about-track-gradient': 'hero-track-gradient 10s infinite',
          'hero-track-white': 'hero-track-white 10s infinite',

          'about-eff-gradient': 'hero-eff-gradient 10s infinite',
          'about-eff-white': 'hero-eff-white 10s infinite',
        },
        
        colors: {
          'black-1': '#090909',
          'orange': '#F15A24',
          'orange-1': 'hsl(16, 88%, 40%)',
          'orange-2': 'hsl(16, 88%, 60%)',
          'purple': '#2E3192',
          'purple-1': 'hsl(238, 52%, 30%)',
        },
      },
        
    },

  }