export const COLORS = {
  white: '0 0 100%',
  offWhite: '200 37.5% 96.9%',
  black: '0 0 20%',
  gray: {
    400: '0 0 83.1%',
    500: '0 0 52.5%',
  },
  primary: {
    light: '196.7 75% 90.6%',
    main: '225 69.3% 29.4%', // Blue - Brand color
  },
  accent: {
    light: '51.7 99.2% 51.2%', // Yellow
  },
};

export const FAMILES = {
  sansSerif:
    '"Metropolis", Helvetica, "Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", sans-serif',
};

export const WEIGHTS = {
  normal: 400,
  medium: 500,
  bold: 600,
};

export const BREAKPOINTS = {
  tabletMin: 820,
  laptopMin: 1200,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  noReduceMotionPreference: `(prefers-reduced-motion: no-preference)`,
};
