import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap");

@font-face {
  font-family: sf-pro-text-medium;
  src: url("../assets/fonts/sf-pro-text-medium.ttf");
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
    margin-bottom: 0.5rem;
    
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}
`;

export default GlobalStyle;
