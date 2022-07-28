module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
<<<<<<< HEAD
          primary: "#4338ca", // add your own color
=======
          primary: "#5956e9", // add your own color
>>>>>>> 4a12411db31cc8ff3de43dc15aa5c43acc78d6af
          secondary: "#FFA100", // add your own color
          accent: "#FF8C00", // add your own color
          neutral: "#3d4451", // add your own color
          "base-100": "#ffffff",// add your own color
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui"),
  function ({ addVariant }) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
    addVariant('xs', '@media (max-width: 639px){}');

  }
  ],
}