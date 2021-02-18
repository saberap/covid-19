module.exports = {
   purge: [
      './pages/**/*.{ts,tsx,js,jsx}',
      './src/components/**/*.{ts,tsx,js,jsx}',
   ],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            red: {
               light: '#ffd0d0',
               dark: '#fb4c47',
               DEFAULT: '#fb4c47',
            },
            green: {
               light: '#167c5',
               dark: '#167c5',
               DEFAULT: '#167c5',
            },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
