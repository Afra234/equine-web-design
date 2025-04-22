/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // For example:
        primary: '#38bdf8',       // or any hex code
        background: '#1c1c1c',
        foreground: '#f5f5f5',
        border: '#3f3f46',
        card: '#27272a',
        muted: '#9ca3af',
        // etc.
      },
    },
  },
  plugins: [],
};
