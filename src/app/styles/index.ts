import { createGlobalStyle } from "styled-components";

import colors from "./utils/colors";
// import media from "./utils/media";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0px;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 20px;
  color: ${colors.BLACK};
  scroll-behavior: smooth;
}
body, input, textarea, button {
  font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

button {
  cursor: pointer;
}

.body {
  height: 100%;
  /* width: 1440px; */
  max-width: 100%;
  margin: 0 auto;
  overflow-x: hidden;

  & > section, & > footer {
    content-visibility: auto;
    contain-intrinsic-size: 1000px;
  }
}

.main-loader {
  height: 100vh;
  width: 100%;
}

.text-14 {
  font-size: 0.7rem;
}
.text-16 {
  font-size: 0.8rem;
}
.text-18 {
  font-size: 0.9rem;
}
.text-22 {
  font-size: 1.1rem;
}
.text-24 {
  font-size: 1.2rem;
}
.text-28 {
  font-size: 1.4rem;
}
.text-36 {
  font-size: 1.8rem;
}
.text-38 {
  font-size: 1.9rem;
}
.text-48 {
  font-size: 2.4rem;
}
.text-56 {
  font-size: 2.8rem;
}

.semi-bold {
  font-weight: 500;
}
`;

export default GlobalStyle;
