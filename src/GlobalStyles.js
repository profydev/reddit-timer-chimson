import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    /** Montserrat Regular **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/Montserrat-Regular.woff2") format("woff2"),
 url("/fonts/Montserrat-Regular.woff") format("woff");
  }

  /** Bitter Regular **/
  @font-face {
    font-family: "Bitter";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/Bitter-Regular.woff2") format("woff2"),
 url("/fonts/Bitter-Regular.woff") format("woff");
  }

  body {
    font-family: ${(props) => props.theme.font.family.default};
    font-size: ${(props) => props.theme.font.size.default};
    line-height: ${(props) => props.theme.font.lineHeight.default};
    color: ${(props) => props.theme.color.text};
  }
  a {
    text-decoration:none;
  }
`;

export default GlobalStyles;
