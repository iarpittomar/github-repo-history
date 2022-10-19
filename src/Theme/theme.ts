import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import theme from '@chakra-ui/theme';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const themeColors = {
  primary: {
    100: '#b3baff',
    200: '#808cff',
    300: '#4d5eff',
    400: '#1a30ff',
    500: '#5465ff',
    600: '#0017e6',
    700: '#0012b3',
    800: '#000d80',
  },

  secondary: {
    100: '#b3e3ff',
    200: '#80d0ff',
    300: '#4dbdff',
    400: '#1aaaff',
    500: '#003554',
    600: '#0091e6',
    700: '#0071b3',
    800: '#005080',
  },
};

const customTheme = extendTheme({
  config: config,
  colors: {
    ...themeColors,
    accents: {
      green: '#3DBE18',
      greenLight: '#E9F8E5',
      red: '#E93435',
      redLight: '#F9E7E7',
      yellow: '#F1AC22',
    },
    transparent: 'transparent',
  },
  styles: {},

  fontSizes: {
    xs: '1rem',
    sm: '1.2rem',
    md: '1.4rem',
    lg: '1.6rem',
    xl: '1.8rem',
    '2xl': '2rem',
    '3xl': '2.2rem',
    '4xl': '2.6rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeight: {
    ...theme.fontWeights,
  },
  fonts: {
    ...theme.fonts,
    heading: 'Helvetica',
    body: 'Helvetica',
  },
  letterSpacings: {
    ...theme.letterSpacings,
  },
  lineHeights: {
    ...theme.lineHeights,
  },
  radii: {
    ...theme.radii,
    small: '0.2rem',
    medium: '0.3rem',
    default: '0.4rem',
    circle: '50%',
  },
  shadows: {
    ...theme.shadows,
  },
  sizes: {
    ...theme.space,
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  space: {
    ...theme.space,
    xsmall: '0.4rem',
    small: '0.8rem',
    medium: '1rem',
    large: '1.4rem',
    xlarge: '1.8rem',
    xxlarge: '2.4rem',
  },
  zIndices: {
    ...theme.zIndices,
  },
  transition: {
    default: '300ms',
  },
  components: {
    NumberInput: {
      baseStyle: {
        field: {
          color: 'primary.500',
          padding: '20px',
          _hover: {
            border: '1px solid !important',
            borderColor: 'primary.500 !important',
          },
          _focus: {
            border: '1px solid !important',
            borderColor: 'primary.500 !important',
          },
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'secondary.500',
        letterSpacing: 'wider',
      },
    },
  },
});

export default customTheme;
