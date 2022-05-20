import React, { useRef } from "react";
import styled from "styled-components";
import Header from "./Header";
import LandingPage from "./LandingPage";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import About2 from "./About2";
import Footer from "./Footer";
const Main = ({ scrollTo }) => {
  return (
    <>
      <MainContainer>
        <Header />
        <LandingPage />
        <About name="about" onClick={scrollTo} />
        <About2 />
        <Work name="work" onClick={scrollTo} />
        <Contact name="contact" onClick={scrollTo} />
        <Footer />
      </MainContainer>
    </>
  );
};
export default Main;

const MainContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  min-width: 320px;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 93%;
  }
`;
