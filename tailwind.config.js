module.exports = {
  content: ['./index.html', './app.vue', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    container: {
      center: true,
      padding: '2rem',
    },

    extend: {
      colors: {
        primary: '#FFCB06',

        gray: {
          100: '#F0F0F0',
          200: '#D4D4D4',
          300: '#555555',
          400: '#333333',
          500: '#222222',
        },
      },

      screens: {
        '4xs': '375px',
        '3xs': '400px',
        '2xs': '480px',
        xs: '560px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mavis: ['Mavis', 'sans-serif'],
      },

      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
};
