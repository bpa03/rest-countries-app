import { createGlobalStyle } from 'styled-components';
import {
  nunitoSansFont,
  fontSizeDefault,
  fontSizeMobile,
} from 'config/fonts';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

  html {
    box-sizing: border-box;
    font-size: ${fontSizeMobile};
  }

  @media only screen and (min-width: 768px) {
    html {
      font-size: ${fontSizeDefault};
    }
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
    background-color: ${({ theme: { theme } }) => theme.background};
    transition: background .3s;
  }

  h1, h2, h3, h4, h5 {
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyles;
