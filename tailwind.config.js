// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0d0a08",    // Warm dark base
          50: "#2a2520",         // Lighter
          100: "#1a1714",        // Cards/containers
          200: "#13110e",        // Slightly darker
          300: "#0d0a08",        // Darkest
        },
        accent: {
          DEFAULT: "#ff6b35",    // Your orange
          light: "#ff8c5a",      // Lighter orange
          dark: "#e55a25",       // Darker orange
        },
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};