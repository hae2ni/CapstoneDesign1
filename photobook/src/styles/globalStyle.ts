import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}
#root {
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}


  html, body {
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
   overflow-x: hidden;
   
  }
a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}
button {
  cursor: pointer;
  font: inherit;
  background: none;
  border: none;
}


@font-face {
    font-family: 'SUIT-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-size: 62.5%;

}
`;

export default GlobalStyle;
