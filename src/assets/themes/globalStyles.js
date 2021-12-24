import { createGlobalStyle } from "styled-components";
import SfProTextMedium from "../fonts/sf-pro-text-medium.ttf";
import SfProTextSemibold from "../fonts/sf-pro-text-semibold.ttf";
import SfProTextBold from "../fonts/sf-pro-text-bold.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: sf-pro-text-medium;
  src: url(${SfProTextMedium}) format('truetype');
}
@font-face {
  font-family: sf-pro-text-semibold;
  src: url(${SfProTextSemibold}) format('truetype');
}
@font-face {
  font-family: sf-pro-text-bold;
  src: url(${SfProTextBold}) format('truetype');
}

  *,
::after,
::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}

html {
    font-family: ${(props) => props.theme.fonts.main};
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(38, 40, 51, 0);
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}

body{
    margin: 0;
    font-family: ${(props) => props.theme.fonts.body};
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.black};
    text-align: left;
    background-color: ${(props) => props.theme.colors.primary9};
line-height: 1.5;
}

h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.colors.black};
    font-family: sf-pro-text-semibold;
    font-weight: 400;
}

 h2 {
    font-size: 32px;
    letter-spacing: 1.5px;
  }

h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

ol li, p, ul li {
    font-family: sf-pro-text-regular;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.6;
    letter-spacing: .7px;
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}

 @media screen and (min-width: 992px) {
    h2 {
      font-size: 36px;
    }
  }
`;

export default GlobalStyle;
