/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light': 'var(--bg-color-light)',
      'medium': 'var(--bg-color-medium)',
      'dark': 'var(--bg-color-dark)',
      'text-primary': 'var(--text-color-primary)',
      'text-secondary': 'var(--text-color-secondary)',
      'positive': 'var(--color-positive)',
      'negative': 'var(--color-negative)',
    },
    extend: {

    },
  },
  plugins: [],
}