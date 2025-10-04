/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#FFFFFF',
        textPrimary: '#0F172A',
        textMuted: '#6B7280',
        accent: '#06B6D4',
        borderSubtle: '#E5E7EB',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
