export const COLORS = {
  white: '#FFF',
  black: '#333',
  gray: {
    400: '#D4D4D4',
    500: '#868686',
  },
  primary: {
    light: '#D5EFF9',
    main: '#17317F', // Blue - Brand color
  },
  accent: {
    light: '#FEDC07', // Yellow
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
  tableMin: 820,
};

export const QUERIES = {
  tableAndUp: `(min-width: ${BREAKPOINTS.tableMin / 16}rem)`,
};
