module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: "Poppins, sans-serif",
      "open-snas": "Open Sans, sans-serif",
    },
    extend: {
      spacing: {
        7: "31px",
        13: "52px",
        15: "54px",
        26: "104px",
        38: "152px",
        39: "120px",
        41: "165px",
        49: "194px",
        51: "200px",
        57: "229px",
        59: "236px",
        60: "240px",
        61: "248px",
        71: "280px",
        76: "304px",
        83: "335px",
        82: "344px",
        84: "379px",
        85: "482px",
        86: "680px",
        122: "488px",
        150: "672px",
        180: "721px",
        200: "800px",
        308: "1232px",
      },
      backgroundImage: (theme) => ({
        "hero-mobile": "url('./images/bg-hero-mobile.svg')",
        "hero-desktop": "url('./images/bg-hero-desktop.svg')",
      }),
      colors: {
        "hover-pink": "#FF9ADB",
        Pink: "hsl(322, 100%, 66%)",
        "very-pale-cyan": "hsl(193, 100%, 96%)",
        "very-dark-cyan": "hsl(192, 100%, 9%)",
        "grayish-blue": "hsl(208, 11%, 55%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
