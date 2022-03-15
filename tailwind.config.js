module.exports = {
  
  purge: [
    './public/*.html',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      'nunito': ['Nunito Sans', 'sans-serif']
    },

    fontSize: {
      'xxxs': '12px',
      'xxs': '14px',
      'xs': '16px',
      'sm': '18px',
      'md': '20px',
      'lg': '22px',
      'xl': '26px',
      '2xl': '28px',
      '3xl': '32px',
      '7xl': '48px',
    },

    inset: {
      '0': '0',
      'auto': 'auto',
      '10': '10px',
      '20': '20px',
      '30': '30px',
      '-40': '-40px',
      '80': '80px',
      '120': '120px',
    },

    boxShadow: {
      'sm': '0px 3px 10px rgba(212, 215, 238, 0.87)',
      'lg': '0px 0px 14px rgba(212, 215, 238, 0.87)',
    },

    extend: {
      height: {
        '70': '350px',
        '80': '450px',
        '100': '550px',
      },

      width: {
        '1/7': '15%',
        '6/7': '85%',
      },

      backgroundImage: {
        'news-1' : 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(https://picsum.photos/200)',
        'news-2' : 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(https://picsum.photos/id/1002/200)',
        'news-3' : 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(https://picsum.photos/id/1003/200)',
        'ad': 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5)), url(https://picsum.photos/seed/picsum/200/300)',
        
        // 'login': 'url(https://picsum.photos/id/1/200/300)',
      },

      colors: {
        'maroon': '#b40043',
        'pink': '#FFEFF5',
        'semi-black': '#413D3D',
        'gray': '#9E9A9A',
        'yellow': '#FFC107',
        'dark-blue': '#101130',
        'light-gray': '#F5F6FC',
        'dark-gray': '#A9B1BF',
        'fb': '#3B5998',
        'insta': '#e95950',
        'twitter': '#1da1f2',
        'yt': '#ff0000',
        'light-black': '#666',
      },
    },
    screens: {
      'xs': '400px',
      // => @media (min-width: 400px) 

      'sm': '640px',
      // => @media (min-width: 640px)

      'md': '768px',
      // => @media (min-width: 768px)

      'md-sm': '850px',

      'm-lg': '992px',
      // => @media (min-width: 850px)

      'lg': '1024px',
    }
  },
  variants: {
    textColor: ['hover', 'group-hover'],
  },
  plugins: [
   
  ],
}
