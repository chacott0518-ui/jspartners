export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          800: '#292524',
          900: '#1c1917',
        }
      },
      fontFamily: {
        serif: ['Times New Roman', 'Times', 'serif'],
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      }
    }
  },
  plugins: []
}