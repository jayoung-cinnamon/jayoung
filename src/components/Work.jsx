import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainText from "./MainText";
import Project from "./Project";
import { Parallax, useParallax } from "react-scroll-parallax";
const Work = () => {
  return (
    <Container>
      <MainText text="Work" />
      <ScreenContainer>
        {/* <Screen> */}
        <Parallax speed={10}>
          <Project text="Happy Bottle ☘️" />
        </Parallax>
        <Parallax speed={20}>
          <Project text="Card maker 💳" />
        </Parallax>
        <Parallax speed={30}>
          <Project text="Agenda 💊" />
        </Parallax>
        <Parallax speed={40}>
          <Project text="Onsoo 📚" />
        </Parallax>

        {/* <Parallax speed={10}>
          <Project />
        </Parallax>
        <Parallax speed={20}>
          <Project />
        </Parallax>
        <Parallax speed={30}>
          <Project />
        </Parallax> */}

        {/* <Project /> */}
        {/* </Screen> */}
        {/* <Screen>
          <Project />
        </Screen>
        <Screen>
          <Project />
        </Screen>
        <Screen>
          <Project />
        </Screen> */}

        {/* <Screen className="one" ref={ref}></Screen>
        <Screen className="two"></Screen>
        <Screen className="three"></Screen> */}
      </ScreenContainer>
    </Container>
  );
};

export default Work;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  /* max-width: 768px; */
  min-width: 320px;
  min-height: 100vh;
  height: 100%;
  /* background-color: #0f60d1; */
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  /* padding-right: 80px;
  padding-left: 80px; */
  padding-top: 200px;
  position: relative;
  border: 1px solid blue;
`;

const ScreenContainer = styled.div`
  width: 100%;
  /* height: 80%; */
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Screen = styled.div`
  width: 80%;
  height: 300px;
  background-color: #0f60d1;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 20px 20px 20px;
  }
`;
