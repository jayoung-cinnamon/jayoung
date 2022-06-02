import React, { forwardRef } from "react";
import styled from "styled-components";
import MainText from "./MainText";
import Project from "./Project";
import SkillIcon from "./SkillIcon";
import { Parallax } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";
const Work = forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <Container ref={ref}>
      <MainText text={t("work")} />
      <ScreenContainer>
        <Parallax speed={10}>
          <Project
            text={t("happy bottle")}
            content={t("happy content")}
            imgUrl={"images/happyBottle2.png"}
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
            text={t("architect pf")}
            content={t("architect content")}
            imgUrl={"images/archi2.png"}
            github="https://github.com/jayoung-cinnamon/archi-portfolio"
          />
          <SkillContainer>
            <SkillIcon skill="TypeScript" />
            <SkillIcon skill="React" />
            <SkillIcon skill="WebGL" />
          </SkillContainer>
        </Parallax>
        <Parallax speed={30}>
          <Project
            text={t("agenda")}
            content={t("agenda content")}
            imgUrl={"images/agenda.png"}
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
            text={t("onsoo")}
            content={t("onsoo content")}
            imgUrl={"images/onsoo.png"}
            github="https://github.com/jayoung-cinnamon/onsoo"
          />
          <SkillContainer>
            <SkillIcon skill="javaScript" />
            <SkillIcon skill="Java" />
            <SkillIcon skill="HTML" />
            <SkillIcon skill="CSS" />
          </SkillContainer>
        </Parallax>
      </ScreenContainer>
    </Container>
  );
});

export default Work;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding-top: 200px;
  position: relative;
`;

const ScreenContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  top: 200px;
  left: 30px;
  @media (max-width: 768px) {
    top: 120px;
    left: 25px;
    width: 30%;
  }
`;
