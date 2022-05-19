import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainText from "./MainText";
import Project from "./Project";
import SkillIcon from "./SkillIcon";
import { Parallax, useParallax } from "react-scroll-parallax";
const Work = () => {
  return (
    <Container>
      <MainText text="Work" />
      <ScreenContainer>
        {/* <Screen> */}

        <Parallax speed={10}>
          <Project
            text="Happy Bottle"
            content={`It is an app
            that keeps happy moments in a bottle.
            Notes can be read after 30 days.`}
            imgUrl={"/images/happyBottle2.png"}
            github="https://github.com/jayoung-cinnamon/happybottle"
          />
          <SkillContainer>
            <SkillIcon skill="React" />
            <SkillIcon skill="TypeScript" />
            <SkillIcon skill="Recoil" />
            <SkillIcon skill="Firebase" />
          </SkillContainer>
        </Parallax>
        <Parallax speed={20}>
          <Project
            text="Architect Portfolio"
            content={`A web portfolio site for architects.
             You can actually see the 3dModeling implemented on this site.`}
            imgUrl={"/images/archi2.png"}
            github="https://github.com/jayoung-cinnamon/archi-portfolio"
          />
          <SkillContainer>
            <SkillIcon skill="TypeScript" />
            <SkillIcon skill="React" />
            <SkillIcon skill="WebGL" />
            <SkillIcon skill="Java" />
          </SkillContainer>
        </Parallax>
        <Parallax speed={30}>
          <Project
            text="Agenda"
            content={`This is a project I did at the school I graduated from.
            A website where you can manage your prescriptions.`}
            imgUrl={"/images/agenda.png"}
            github="https://github.com/jayoung-cinnamon/Agenda"
          />
          <SkillContainer>
            <SkillIcon skill="javaScript" />
            <SkillIcon skill="Java" />
            <SkillIcon skill="HTML" />
            <SkillIcon skill="CSS" />
          </SkillContainer>
        </Parallax>
        <Parallax speed={40}>
          <Project
            text="Onsoo"
            content={`This is a project I did at the school I graduated from.
            This is a video-based tutoring site.`}
            imgUrl={"/images/onsoo.png"}
            github="https://github.com/jayoung-cinnamon/onsoo"
          />
          <SkillContainer>
            <SkillIcon skill="javaScript" />
            <SkillIcon skill="Java" />
            <SkillIcon skill="HTML" />
            <SkillIcon skill="CSS" />
          </SkillContainer>
        </Parallax>
        {/* <Parallax speed={20}>
          <Project text="Card maker 💳" imgUrl={"/images/happyBottle2.png"} />
        </Parallax> */}

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
  /* border: 1px solid blue; */
`;

const ScreenContainer = styled.div`
  width: 100%;
  /* height: 80%; */
  /* border: 1px solid green; */
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

const SkillContainer = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  top: 200px;
  left: 30px;
  /* border: 1px solid red; */
  @media (max-width: 768px) {
    top: 120px;
    left: 25px;
    width: 30%;
  }
`;
