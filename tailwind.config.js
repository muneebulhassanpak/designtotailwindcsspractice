/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,css,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern-m": "url('../images/mobile/image-header.jpg')",
        "hero-pattern-d": "url('../images/desktop/image-header.jpg')",
        "image-graphic-design-m":
          "url('../images/mobile/image-graphic-design.jpg')",
        "image-graphic-design-d":
          "url('../images/desktop/image-graphic-design.jpg')",
        "image-photography-m": "url('../images/mobile/image-photography.jpg')",
        "image-photography-d": "url('../images/desktop/image-photography.jpg')",
      },
      minHeight: {
        halfMobile: "80vh",
        halfDesktop: "50vh",
      },
      height: {
        halfDesktop: "80vh",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        myGray: "hsl(232, 10%, 55%)",
        myVGray: "hsl(213, 9%, 39%)",
        myYellow: "hsl(51, 100%, 49%)",
        myDMCyanText: "hsl(168, 34%, 41%)",
        myFooterBg: "#9BDACF",
        myDarkGrayBlue: "hsl(232, 10%, 55%)",
        contactButtonHover: "#62CCFE",
        learnMoreRed: "#FF7364",
      },
      dropShadow: {
        myShadow: "0 35px 35px hsl(51, 100%, 49%)",
      },
    },
  },
  plugins: [],
};
