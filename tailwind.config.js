module.exports = {
  content: [
    "./**/*.{html,js,jsx,ts,tsx}",
    "!./node_modules/**/*",
  ],
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
      boxShadow: {
        "glass-inset":
          "inset 0 17px 5px -9px rgba(254,254,91, 0.05)",
        "glass-sm":
          "5px 5px 20px 0px rgba(254,254,91, 0.3)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
