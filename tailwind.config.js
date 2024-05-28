/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-1': {
          WebkitTextStrokeWidth: '1px',
          WebkitTextStrokeColor: '#013A67',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

