import { createGlobalStyle } from 'styled-components';
import nunitoSansFont from 'config/fonts';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${nunitoSansFont};
    font-weight: 300;
  }

  h1, h2, h3, h4, h5 {
    font-weight: bold;
  }

`;

export default GlobalStyles;
