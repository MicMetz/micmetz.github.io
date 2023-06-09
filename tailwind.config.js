const defaultTheme = require( 'tailwindcss/defaultTheme' );
const colors       = require( 'tailwindcss/colors' );


module.exports = {
  future   : {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault        : false
  },
  purge    : { layers: [] },
  content  : [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode : false, // or 'media' or 'class'
  theme    : {
    extend: {
      leading            : {
        tighter: '1.15rem'
      },
      gridTemplateColumns: {
        wrapper: '1fr min(65ch 100%) 1fr'
      },
      gridColumn         : {
        2         : '2',
        'span-1/4': '1 / 4'
      },
      fontFamily         : {
        sans: [ 'Poppins', ...defaultTheme.fontFamily.sans ],
        body: [ 'Inter', ...defaultTheme.fontFamily.sans ]
      },
      fontSize           : {
        // Set in 1.25 typescle
        micro: '0.88rem',
        small: '1rem',
        base : '1.3rem',
        lg   : '1.6rem',
        xl   : '1.8rem',
        '2xl': '2.441rem',
        '3xl': '3.052rem',
        '4xl': '3.815rem',
        '5xl': '4.8rem',
        '6xl': '5.96rem',
        '7xl': '7.456rem'
      },
      colors             : {
        ...colors,
        lightPink : '#F6E9E2',
        lavender  : '#dadef1',
        darkBlue  : '#230B5A',
        mediumBlue: '#72668D',
        sky : '#9590B7',
        cream     : '#f3f2ef',
        darkCream : '#EBE9E8',
        offWhite  : '#FAFAF8',
        purple    : '#4840BB'
      }
    }
  },
  variants : {
    extend: {}
  },
  plugins  : [ require( 'tailwindcss' ), require( 'precss' ), require( 'autoprefixer' ) ],
  important: true
};

// https://tailwindcss.com/docs/theme

//https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L7
