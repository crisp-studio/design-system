import theme from "./index";
import { createGlobalStyle } from "styled-components";

// TODO: Add better font handeling
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('https://github.com/rsms/inter/raw/master/docs/font-files/Inter-Regular.woff')
        format('woff'),
      url('https://github.com/rsms/inter/raw/master/docs/font-files/Inter-Regular.woff2')
        format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Inter';
    src: url('https://github.com/rsms/inter/raw/master/docs/font-files/Inter-Bold.woff')
        format('woff'),
      url('https://github.com/rsms/inter/raw/master/docs/font-files/Inter-Bold.woff2')
        format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
    font-weight: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  html,
  body {
    min-height: 100%;
    min-width: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: ${theme.fontSizes[2]}px;
    font-family: ${theme.font};
    line-height: 1.375;
    position: relative;
    height: 100%;
    max-height: 100%;
    width: 100%;
  }
  a {
    color: currentColor;
    text-decoration: none;
  }
  textarea {
    resize: none;
  }
  strong {
    font-weight: bold;
  }
`;
