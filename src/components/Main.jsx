import React from "react";
import styled from "styled-components";
import Header from "./Header";
import LandingPage from "./LandingPage";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import About2 from "./About2";
import Footer from "./Footer";
const Main = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <LandingPage />
        <About />
        <About2 />
        <Work />
        <Contact />
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
  background-color: white;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 93%;
  }
`;
