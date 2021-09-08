import { createGlobalStyle } from 'styled-components';
import {
  nunitoSansFont,
  fontSizeDefault,
  fontSizeMobile,
} from 'config/fonts';

const GlobalStyles = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: ${fontSizeMobile};
  }

  @media only screen and (min-width: 768px) {
    html {
      font-size: ${fontSizeDefault};
    }
  }

  body {
    font-family: ${nunitoSansFont};
    font-weight: 300;
    background-color: ${({ theme: { theme } }) => theme.background};
    transition: background .3s;
  }
`;

export default GlobalStyles;
