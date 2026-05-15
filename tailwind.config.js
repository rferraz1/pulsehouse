/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        pulse: {
          black: '#030809',
          ink: '#071315',
          deep: '#0b1f22',
          teal: '#12393a',
          mint: '#52ffbd',
          green: '#1fe68e',
          fog: '#d7e5e2',
        },
      },
      boxShadow: {
        glow: '0 0 45px rgba(82, 255, 189, 0.18)',
        glass: '0 24px 80px rgba(0, 0, 0, 0.34)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 20% 15%, rgba(82,255,189,.16), transparent 28%), radial-gradient(circle at 82% 20%, rgba(31,230,142,.11), transparent 26%), linear-gradient(135deg, #030809 0%, #071315 44%, #0b1f22 100%)',
      },
    },
  },
  plugins: [],
};
