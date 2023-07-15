import { createStitches } from '@stitches/react';

const stitches = createStitches({
  theme: {
    colors: {
      bg: '#fff',
      color: '#213547',
      colorNeutral: '#7a8691',
    },
    fontSizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      default: '1.6rem',
      medium: '2.0rem',
      large: '2.6rem',
      xlarge: '3.2rem',
      xxlarge: '4.0rem',
      xxxlarge: '4.8rem',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  }
});

const globalStyle = stitches.globalCss({
  '*': {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: 'border-box',
  },

  html: {
    fontSize: '62.5%',
  },

  'html, body': {
    height: '100vh',
    backgroundColor: '$bg',
    textRendering: 'optimizelegibility',
    '-webkit-font-smoothing': 'antialiased',
  },

  body: {
    backgroundColor: '$bg',
    color: '$color',
    fontSize: '$default',
  },

  'body, input, button': {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontSize: '$default',
  },

  'h1, h2, h3, h4, h5, h6, strong': {
    fontWeight: '$bold',
  },

  button: {
    cursor: 'pointer',
    fontWeight: '$bold',
    border: 'none',
    transition: 'background-color 0.2s',
    borderRadius: '.8rem'
  },
});

globalStyle();

export const { styled } = stitches;
