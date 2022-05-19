import React from "react";
import styled from "styled-components";
const Project = ({ text }) => {
  return (
    <ProjectContainer>
      <TextContainer>
        <Title>{text}</Title>
      </TextContainer>
      <ImageContainer></ImageContainer>
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.div`
  min-width: 100vw;
  margin-bottom: 100px;
  height: 350px;
  background-color: #ededed;
  border-radius: 20px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100vw;
    height: 350px;
    margin-bottom: 80px;
    flex-direction: column;
  }

  /* text-align: center; */
  display: flex;
`;

const Title = styled.div`
  /* width: 100px; */
  font-size: 30px;
  font-weight: 700;
  white-space: pre-line;
  color: black;
  line-height: 100%;
  /* letter-spacing: 10px; */

  /* border: 1px solid white; */
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const TextContainer = styled.div`
  background-color: #ededed;
  width: 50%;
  height: 300px;
  border-radius: 20px 0px 0px 20px;
  display: flex;
  /* justify-content: center; */
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageContainer = styled(TextContainer)`
  background-color: #0f60d1;
  border-radius: 0px 20px 20px 0px;
`;
