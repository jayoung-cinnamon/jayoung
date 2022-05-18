import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import GlobalStyle from "./styles/GlobalStyle";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <GlobalStyle />
        <Main />
      </ParallaxProvider>
    </>
  );
}

export default App;
