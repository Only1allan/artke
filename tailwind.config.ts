import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00afcc",
          secondary: "#00cf00",
          accent: "#6e7a00",
          neutral: "#221903",
          "base-100": "#2d2f24",
          info: "#00aae9",
          success: "#009700",
          warning: "#ff8000",
          error: "#e44968",
          body: {
            bg: "#2d2f24",
            text: "#f1f1f1",
          },
        },
      },
    ],
  },
};
export default config;
