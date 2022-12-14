/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { "noto-sans": "'Noto Sans'", inter: "Inter" } },
    colors: {
      indigo: {
        "100": "#8250df",
        "200": "#0969da",
        "300": "#0550ae",
        "400": "#0a3069",
      },
      gray: {
        "100": "#f6f8fa",
        "200": "#ddf4ff",
        "300": "#d8dee4",
        "400": "#8c959f",
        "500": "#808080",
        "600": "#6e7781",
        "700": "#57606a",
        "800": "#24292f",
        "900": "#111133",
        "1000": "#00000f",
        "1100": "rgba(1, 1, 1, 0.3)",
        "1200": "rgba(175, 184, 193, 0.2)",
        "1300": "rgba(27, 31, 36, 0.08)",
      },
      white: "#fff",
      brown: { "100": "#fd8c73", "200": "#cf222e", "300": "#953800" },
      violet: "#a97bff",
      green: { "100": "#2da44e", "200": "#1a7f37", "300": "#216e39" },
      gold: "#f1e05a",
      turquoise: "#00b4ab",
      purple: "#563d7c",
    },
    fontSize: {
      xs: "8.59px",
      sm: "11px",
      base: "12px",
      lg: "13px",
      xl: "13.75px",
      "2xl": "14px",
      "3xl": "14.32px",
      "4xl": "15px",
      "5xl": "16px",
      "6xl": "20px",
      "7xl": "21.15px",
      "8xl": "21px",
      "9xl": "24px",
    },
  },
  corePlugins: { preflight: false },
};
