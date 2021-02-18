module.exports = {
   purge: [
      './pages/**/*.{ts,tsx,js,jsx}',
      './components/**/*.{ts,tsx,js,jsx}',
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
               light: '#167c51',
               dark: '#167c51',
               DEFAULT: '#167c5a',
            },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
