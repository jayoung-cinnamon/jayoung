import React from "react";
import styled, { css } from "styled-components";
const Project = ({ text, imgUrl, content }) => {
  return (
    <ProjectContainer>
      <TextContainer>
        <Title>{text}</Title>
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
  margin-bottom: 80px;
  height: 350px;
  background-color: #ededed;
  border-radius: 20px;
  z-index: 1;
  /* text-align: center; */
  display: flex;
  @media (max-width: 768px) {
    max-width: 89vw;
    height: 450px;
    flex-direction: column;
    margin-bottom: 30px;
    border-radius: 0;
  }
`;

const TextContainer = styled.div`
  /* background-color: #ededed; */
  width: 50%;

  /* height: 300px; */
  display: flex;
  padding: 30px;
  /* border: 1px solid red; */
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
  border-radius: 20px 0 0 20px;
  @media (max-width: 768px) {
    /* width: 50vw; */
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 0;
  }
`;

const Title = styled.div`
  /* width: 100px; */
  font-size: 30px;
  font-weight: 700;
  white-space: pre-line;
  color: #0f60d1;
  line-height: 100%;
  letter-spacing: 5px;

  /* border: 1px solid black; */
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
  /* border: 2px solid red; */
  border-radius: 0px 20px 20px 0px;

  img {
    width: 100%;
    height: 100%;
    background-size: contain;
    /* border: 2px solid black; */
    border-radius: 0px 20px 20px 0px;
    /* background-position: center center; */
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
    /* border: 1px solid blue; */
    margin: 0;
    font-size: 13px;
    text-align: right;
  }
`;
