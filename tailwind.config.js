module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  mode: 'jit',
  theme: {
    theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '800px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1200px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1600px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    animation: {
      none: 'none',
      'p-1': 'p 1s linear infinite',
      'p 2': 'p 2s linear infinite',
      'p-3': 'p 3s linear infinite',
      'p-4': 'p 4s linear infinite',
      'p-5': 'p 5s linear infinite',
      'p-6': 'p 6s linear infinite',
      'p-7': 'p 7s linear infinite',
      'p-8': 'p 8s linear infinite',
      'p-9': 'p 9s linear infinite',
      'p-10': 'p 10s linear infinite',
      'p-11': 'p 11s linear infinite',
      'p-12': 'p 12s linear infinite',
      'p-13': 'p 13s linear infinite',
      'p-14': 'p 14s linear infinite',
      'p-15': 'p 15s linear infinite',
      'p-20': 'p 20s linear infinite',
      'p-25': 'p 25s linear infinite',
      'p-30': 'p 30s linear infinite',
      'p-35': 'p 35s linear infinite',
      'p-40': 'p 40s linear infinite',

    },
    keyframes: {
      p: {
        '0%': {
          left: '0%',
        },
        '100%': {
          left: '-200%'
        }
      },
      spin: {
        to: {
          transform: 'rotate(360deg)',
        },
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0',
        },
      },
      pulse: {
        '50%': {
          opacity: '.5',
        },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
