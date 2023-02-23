import {extendTheme} from 'native-base';

export const theme = extendTheme({
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
