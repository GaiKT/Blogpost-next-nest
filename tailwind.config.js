/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors : {
      green500 : '#243831',
      green300 : '#2B5F44',
      green100 : '#2B5F44',
      golden : '#C5A365',
      textcolor : '#191919',
      grey100 : '#BBC2C0',
      grey300 : '#939494',
      success : '#49A569',
      black : '#000000',
      white : '#FFFFFF'
    },
    extend : {
      fontFamily : {
        inter : ['Inter', 'sans-serif'],
        castoro : ['Castoro' , 'sans-serif']
      }
    }
  },
  plugins: [],
};
