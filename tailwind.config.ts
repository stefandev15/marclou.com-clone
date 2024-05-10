import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.tsx", "./src/app/**/*.tsx"],
  theme: {
    extend: {
      backgroundColor: {
        base: {
          100: "#FFFFFF",
          200: "#E6E6E6",
          300: "#CFCFCF",
        },
      },
      colors: {
        "base-color": "#333333",
        "primary-color": "#E0A82F",
        "primary-color-hover": "#BC8A1D",
      },
    },
  },
  plugins: [],
};
export default config;
