import React from "react";
import styled from "styled-components";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Image from "./Image";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Wave from "./Wave";
import About2 from "./About2";
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
      </MainContainer>
    </>
  );
};
export default Main;

const MainContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  /* max-width: 768px; */
  min-width: 320px;
  min-height: 100vh;
  background-color: white;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  /* padding-right: 80px;
  padding-left: 80px; */
  @media (max-width: 768px) {
     {
      width: 93%;
      /* border: 1px solid blue; */
    }
  }
`;
