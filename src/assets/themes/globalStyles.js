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

  --transition: all 0.3s linear;
  --spacing: 0.2rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 700px;

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
    background-color: ${(props) => props.theme.colors.background1};
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

a,
a:hover {
  text-decoration: none;
}
a:hover {
  color: #262833;
}

.aa-pl-link {
  color: #0071e3;
}
.btn {
  display: inline-block;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 0.0625rem solid transparent;
  padding: 0.55rem 0.95rem;
  line-height: 1.5;
  border-radius: 0.55rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn:hover {
  color: ${(props) => props.theme.colors.primary1};
  background: ${(props) => props.theme.colors.primary8};
}

.btn-extradark {
  width: 200px;
  height: 48px;
  background: ${(props) => props.theme.colors.black};
  box-shadow: 1px 12px 8px -7px rgb(0 0 0 / 22%) !important;
  border-radius: 7px;
  font-family: "sf-pro-text-bold";
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.colors.white2};
  text-transform: uppercase;
  padding: 12px 0;
}

.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    
}

.input-group {
  width: auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  transition: all 0.2s ease;
  }

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 1.2625rem);
  padding: 0.6rem 0.75rem;
  font-weight: 300;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.gray};
  background-color: ${(props) => props.theme.colors.white};
  background-clip: padding-box;
  border: 0.0625rem solid ${(props) => props.theme.colors.gray400};
  border-radius: 0.3rem;
  box-shadow: ${(props) => props.theme.shadows.inset};
  transition: all 0.3s ease-in-out;
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:focus {
  color: ${(props) => props.theme.colors.gray};;
  background-color: #e6e7ee;
  border-color: #d1d9e6;
  outline: 0;
  box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff, none;
}

.form-control::-moz-placeholder {
  color: #44476a;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #44476a;
  opacity: 1;
}
.form-control::placeholder {
  color: #44476a;
  opacity: 1;
}
.form-control:disabled,
.form-control[readonly] {
  opacity: 1;
}

.form-group {
  margin-bottom: 1rem;
}
.form-text {
  display: block;
  margin-top: 0.25rem;
}
.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}

.form-row > .col,
.form-row > [class*="col-"] {
  padding-right: 5px;
  padding-left: 5px;
}


/* SHAPES */
.rounded-circle { border-radius: 50%;}
/* MARGINS */
.mb-1 { margin-bottom: .25rem;}
.mb-2 { margin-bottom: .5rem;}
.mt-1 { margin-top: .25rem;}
.mt-2 { margin-top: .5rem;}
.mt-3 { margin-top: 1rem;}
.mt-4 { margin-top: 1.5rem};


@media (min-width: 1200px)
.container { max-width: 1140px;}

@media (min-width: 992px)
h2 {  font-size: 36px;}
.container { max-width: 960px;}

@media (min-width: 768px)
.container { max-width: 720px;}

@media (min-width: 576px)
.container { max-width: 540px;}

`;

export default GlobalStyle;
