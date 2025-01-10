module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx}", "!./node_modules/**/*"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        muted: "rgb(var(--muted))",
        accent: "rgb(var(--accent))",
      },
    },
  },
  plugins: [],
};
