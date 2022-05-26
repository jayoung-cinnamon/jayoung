import React, { forwardRef, useRef, useImperativeHandle } from "react";
import styled from "styled-components";
import Header from "./Header";
import LandingPage from "./LandingPage";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import About2 from "./About2";
import Footer from "./Footer";
import _ from "lodash";
const Main = () => {
  const aboutRef = useRef(null);
  //ref :값이 변해도 rerender가 되지않는다!!
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView();
    //current 필수!
  };
  const scrollToWork = () => {
    workRef.current.scrollIntoView();
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView();
  };

  return (
    <>
      <MainContainer>
        <Header
          scrollToAbout={scrollToAbout}
          scrollToWork={scrollToWork}
          scrollToContact={scrollToContact}
        />
        <LandingPage />
        <About ref={aboutRef} />
        <About2 />
        <Work ref={workRef} />
        <Contact ref={contactRef} />
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
