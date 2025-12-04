/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4500', // Sunset Orange
        background: '#1C1C1E', // Dark Charcoal
        card: '#2C2C2E', // Light Grey
        text: '#F2F2F7', // Off-White
        textSecondary: '#8E8E93', // Grey text
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
