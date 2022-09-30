module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/constants/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFmaily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
      center: true
    },
  },
  variants: {},
  plugins: [],
};
