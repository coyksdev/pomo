import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#ffeeef',
      100: '#ffddde',
      200: '#ffcdce',
      300: '#ffbcbe',
      400: '#ffabae',
      500: '#ff9a9d',
      600: '#ff898d',
      700: '#ff797d',
      800: '#ff686c',
      900: '#ff575c',
    },
  },
  fontConfig: {
    Urbanist: {
      100: {
        normal: 'Urbanist-Light',
        italic: 'Urbanist-LightItalic',
      },
      200: {
        normal: 'Urbanist-Light',
        italic: 'Urbanist-LightItalic',
      },
      300: {
        normal: 'Urbanist-Light',
        italic: 'Urbanist-LightItalic',
      },
      400: {
        normal: 'Urbanist',
        italic: 'Urbanist-Italic',
      },
      500: {
        normal: 'Urbanist-Medium',
      },
      600: {
        normal: 'Urbanist-Medium',
        italic: 'Urbanist-MediumItalic',
      },
      700: {
        normal: 'Urbanist-Bold',
      },
      800: {
        normal: 'Urbanist-Bold',
        italic: 'Urbanist-BoldItalic',
      },
      900: {
        normal: 'Urbanist-Bold',
        italic: 'Urbanist-BoldItalic',
      },
    },
  },
  fonts: {
    heading: 'Urbanist',
    body: 'Urbanist',
    mono: 'Urbanist',
  },
});
