import { createGlobalStyle } from 'styled-components';
import '@fontsource/metropolis/400.css';
import '@fontsource/metropolis/500.css';
import '@fontsource/metropolis/600.css';

import { COLORS, FAMILES, WEIGHTS } from '../../constant/design-token';

const GlobalStyles = createGlobalStyle`
/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}

/* DESIGN TOKENS */
html {
  --color-white: ${COLORS.white};
  --color-off-white: ${COLORS.offWhite};
  --color-black: ${COLORS.black};
  --color-gray-400: ${COLORS.gray[400]};
  --color-gray-500: ${COLORS.gray[500]};
  --color-primary-light: ${COLORS.primary.light};
  --color-primary: ${COLORS.primary.main};
  --color-accent-light: ${COLORS.accent.light};

  --font-family-sans-serif: ${FAMILES.sansSerif};

  --font-weight-normal: ${WEIGHTS.normal};
  --font-weight-medium: ${WEIGHTS.medium};
  --font-weight-bold: ${WEIGHTS.bold};
}

/* GLOBAL STYLES */
html, body {
  line-height: 1.4;
  font-family: var(--font-family-sans-serif);
}
`;

export default GlobalStyles;
