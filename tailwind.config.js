/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Inter-Regular', 'sans'],
        bold: ['Inter-Bold', 'sans'],
        semi: ['Inter-SemiBold', 'sans'],

      },
      colors: {
        green: "hsl(75, 94%, 57%)",
        grey: "hsl(0, 0%, 20%)",
        darkGrey: " hsl(0, 0%, 12%)",
        offBlack: " hsl(0, 0%, 8%)",
        white: "hsl(0, 0%, 100%)",
        offWhite: "hsl(0, 0%, 80%)",
      },
      // screens: {
      //   'sm': '375px',   
      //   'md': '768px',  
      //   'lg': '1024px',  
      //   'xl': '1440px',
      // },
    },
  },
  plugins: [],
}