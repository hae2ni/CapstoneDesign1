import GlobalStyle from "./styles/globalStyle";
import styled from "styled-components";

function App() {
  return (
    <Html>
      <GlobalStyle />
    </Html>
  );
}

export default App;

const Html = styled.html`
  font-size: 62.5%;
`;
