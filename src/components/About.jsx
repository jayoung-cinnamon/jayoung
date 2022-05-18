import React from "react";
import styled from "styled-components";
import SpeechBubble from "./SpeechBubble";

const About = () => {
  return (
    <Container>
      <ProfileImage />
      <MainText>{`ja++\nyoung.`}</MainText>
      <BubbleContainer>
        <SpeechBubble />
      </BubbleContainer>
    </Container>
  );
};

export default About;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  /* max-width: 768px; */
  min-width: 320px;
  /* min-height: 100vh; */
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-end;
  padding-bottom: 20px;
  /* padding-right: 80px;
  padding-left: 80px; */
  /* border: 1px solid green; */
  position: relative;
  @media (max-width: 768px) {
     {
    }
  }
`;

const MainText = styled.div`
  width: 100%;
  font-size: 100px;
  line-height: 147%;
  letter-spacing: 10px;
  font-weight: 700;
  white-space: pre-line;
  white-space: pre-line;
  /* border: 1px solid red; */
  color: white;
  text-shadow: -2px -2px 0 #0f60d1, 2px -2px 0 #0f60d1, -2px 2px 0 #0f60d1,
    2px 2px 0 #0f60d1;
  position: absolute;
  padding-left: 30px;
  @media (max-width: 768px) {
    font-size: 30px;
    padding-left: 10px;
    padding-bottom: 10px;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  /* border: 2px solid orange; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* text-align: right; */

  @media (max-width: 768px) {
     {
      width: 100%;
      flex-direction: column;
      justify-content: flex-start;
      /* border: 1px solid blue; */
    }
  }
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  background-image: url("/images/bwWaveProfile.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media (max-width: 768px) {
     {
      width: 100%;
      height: 60vh;
    }
  }
`;
const TextContainer = styled.div`
  /* border: 1px solid red; */
  color: white;
  background-color: #0f60d1;
  width: 50%;
  height: 100%;
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid black; */
  @media (max-width: 768px) {
     {
      width: 100%;
      /* flex-direction: column; */
      align-items: flex-start;
      margin-top: 10px;
    }
  }
`;

const NameContainer = styled.div`
  width: 100%;
  /* border: 1px solid gold; */
`;

const TitleText = styled.div`
  font-size: 30px;
  line-height: 147%;
  letter-spacing: 1px;
  font-weight: 300;
  text-align: right;
  /* color: #0f60d1; */
  color: white;

  /* text-shadow: -1px -1px 0 #0f60d1, 1px -1px 0 #0f60d1, -1px 1px 0 #0f60d1, */
  /* 1px 1px 0 #0f60d1; */
  @media (max-width: 768px) {
     {
      font-size: 20px;
      text-align: left;
      width: 60%;
    }
  }
`;

const NameText = styled(TitleText)`
  font-size: 50px;
  letter-spacing: 10px;
  font-weight: 300;
  @media (max-width: 768px) {
     {
      font-size: 35px;
      text-align: left;
    }
  }
`;

const SubText = styled.div`
  width: 100%;
  height: 100%;
  font-size: 20px;
  line-height: 200%;
  letter-spacing: 3px;
  padding: 40px 0 20px 40px;
  font-weight: 300;
  text-align: right;
  /* border: 1px solid red; */

  @media (max-width: 768px) {
     {
      font-size: 15px;
      text-align: left;
      width: 100%;
      height: 80%;
      padding: 10px 10px 10px 0px;
    }
  }
  & . p {
    cursor: pointer;
  }
`;

const KeyWordContainer = styled.div`
  width: 100%;
  height: 200px;
  /* border: 1px solid blue; */
`;

const Creative = styled.div`
  background-color: black;
  :hover {
    background-color: white;
  }
`;

const BubbleContainer = styled.div`
  position: absolute;
  /* border: 2px solid blue; */
  top: 10%;
  @media (max-width: 768px) {
     {
      top: 13%;
    }
  }
`;
