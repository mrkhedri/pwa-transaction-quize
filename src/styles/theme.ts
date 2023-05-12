const direction = 'rtl';

const sizes = {
  mobileSmall: '320px',
  mobileMedium: '375px',
  mobileLarge: '425px',
};

const devices = {
  mobileSmall: `(min-width: ${sizes.mobileSmall})`,
  mobileMedium: `(min-width: ${sizes.mobileMedium})`,
  mobileLarge: `(min-width: ${sizes.mobileLarge})`,
};

// default for light theme
const palette = {
  primary: {
    main: '#5439AC',
  },
  secondary: {
    main: '#56596A',
  },
  error: {
    main: '#E54660',
  },
  success: {
    main: '#39AC65'
  },
  common: {
    black: '#000',
    white: '#fff',
  },
  text: {
    main: '#56596A',
  },
  border: {
    main: "#D6D6D6"
  },
  background: {
    main: '#F4F4FA',
    paper: '#ffffff',
  },
};

export const lightTheme = {
  mode: 'light',
  isLight: true,
  isDark: false,
  direction,
  sizes,
  devices,
  palette,
};

export const darkTheme = {
  mode: 'dark',
  isLight: false,
  isDark: true,
  direction,
  sizes,
  devices,
  palette: {
    ...palette,
    primary: {
      main: '#57C5D0',
    },
    secondary: {
      main: '#FFFFFF',
    },
    text: {
      main: '#FFFFFF',
    },
    background: {
      main: '#303030',
      paper: '#202020',
    },
  },
};

