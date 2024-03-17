/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require("tailwindcss/defaultTheme");

const customColors = require("./config/tailwind/colors");

/** @type {import('tailwindcss').Config} */
(
  module.exports = {
    // tailwindcssのスタイルを適用するファイルを指定(含めてないと特殊なスタイルが効かない)
    content: [
      "src/*.{ts.tsx}",
      "components/*.{ts,tsx}",
      "pages/*.{ts,tsx}",
      "hooks/*.{ts,tsx}",
      "utils/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        // フォント設定
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
        },

        // カラー設定
        ...customColors,

        // shadcn用設定
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },

        // ブレークポイントカスタマイズ設定(デフォルトのsmなどはそのまま使える)
        // 何も指定しない場合がモバイル用のスタイルとなる
        screens: {
          tablet: "640px",
          // => @media (min-width: 640px) { ... } sm

          laptop: "1024px",
          // => @media (min-width: 1024px) { ... } lg

          "sm-desktop": "1120px",
          // => @media (min-width: 1120px) { ... } sm-desktop

          desktop: "1280px",
          // => @media (min-width: 1280px) { ... } xl

          "3xl": "1800px",
          // => @media (min-width: 1800px) { ... } 3xl

          "4xl": "2000px",
          // => @media (min-width: 2100px) { ... } 4xl
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
);
