/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    screens: {
      xs: '500px',
      sm: '600px',
      md: '840px',
      lg: '1180px',
      xl: '1280px',
    },
  },
};
