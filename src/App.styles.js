import { createGlobalStyle } from 'styled-components';
import { nunitoSansFont, fontSizeDefault, fontSizeMobile } from 'config/fonts';

const GlobalStyles = createGlobalStyle`

  :root {
    --background: ${({ theme: { theme } }) => theme.background};
    --bg-elements: ${({ theme: { theme } }) => theme.backgroundElements};
    --bg-input: ${({ theme: { theme } }) => theme.inputBgColor};
    --font: ${({ theme: { theme } }) => theme.fontColor};
  }

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
    background: var(--background);
    transition: background .3s;
  }
`;

export default GlobalStyles;
