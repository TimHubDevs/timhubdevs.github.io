module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        fadeIn : 'fadeIn  0.3s ease-out forwards',
        scaleIn : 'scaleIn  0.3s ease-out forwards',
        ellipsis: 'ellipsis 2s ease-in-out infinite alternate-reverse',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        ellipsis: {
          '0%': { transform: 'scale(1, 1) translate3d(0px, 0px, 0px)' },
          '100%': { transform: 'scale(1.05, 1) translate3d(0px, -15px, 0px)' },
        },
      },
    },
  },
  plugins: [],
};
