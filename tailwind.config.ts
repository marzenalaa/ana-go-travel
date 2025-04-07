import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FE504F",
        secondary: "#58B366",
        blackDark: "#191A23",
        primaryDark: "#C83A36",
        primaryLight: "#FF9794",
        secondaryBlue: "#0B3D91",
        neutralBeige: "#FCEAE1",
      },
    },
  },
  plugins: [],
} satisfies Config;
