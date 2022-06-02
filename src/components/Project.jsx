import React from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
const Project = ({ text, imgUrl, content, github }) => {
  return (
    <ProjectContainer>
      <TextContainer>
        <Title>
          {text}
          <a target="_blank" href={github}>
            <BsGithub className="github" />
          </a>
        </Title>
        <Content>{content}</Content>
      </TextContainer>
      <ImageContainer>
        <img src={imgUrl} />
      </ImageContainer>
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.div`
  max-width: 60vw;
  margin-bottom: 50px;
  height: 350px;
  border-radius: 20px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    max-width: 89vw;
    height: 450px;
    flex-direction: column;
    margin-bottom: 30px;
    border-radius: 0;
  }
`;

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 0;
  }
`;

const Title = styled.div`
  white-space: nowrap;
  font-size: 30px;
  font-weight: 700;
  white-space: pre-line;
  color: #0f60d1;
  line-height: 100%;
  letter-spacing: 5px;
  .github {
    width: 20px;
    @media (max-width: 768px) {
      margin-top: 10px;
    }
  }
  @media (max-width: 768px) {
    font-size: 20px;
    width: 50%;
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 50%;
  background-color: none;
  font-size: 30px;
  font-weight: 700;
  white-space: pre-line;
  color: black;
  line-height: 100%;
  border-radius: 0px 20px 20px 0px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    background-size: cover;
    border-radius: 20px;
    @media (max-width: 768px) {
      width: 89vw;
      border-radius: 0;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
  }
`;

const Content = styled.div`
  width: 100%;
  color: black;
  font-weight: 200;
  margin-top: 20px;
  white-space: pre-line;
  line-height: 1.5;
  font-size: 15px;
  @media (max-width: 768px) {
    margin: 0;
    font-size: 13px;
    text-align: right;
  }
`;
