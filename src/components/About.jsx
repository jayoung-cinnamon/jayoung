import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParallax } from "react-scroll-parallax";

const About = () => {
  const { ref } = useParallax({ speed: 10 });
  const [isMouseMove, setIsMouseMove] = useState(false);
  const handleMouseMove = (e) => {
    setIsMouseMove(!isMouseMove);
  };

  useEffect(() => {
    console.log("isMouseMove", isMouseMove);
  }, []);

  return (
    <Container onWheel={handleMouseMove}>
      <ProfileImage />
      <MainText ref={ref}>{`ja++\nyoung.`}</MainText>
      <BubbleContainer>
        <Circle rotate={isMouseMove} />
      </BubbleContainer>
    </Container>
  );
};

export default About;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
  position: relative;
  @media (max-width: 768px) {
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

const ProfileImage = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  background-image: url("https://jayoung-cinnamon.github.io/jayoung/bwWaveProfile.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media (max-width: 768px) {
    width: 100%;
    height: 60vh;
  }
`;

const TitleText = styled.div`
  font-size: 30px;
  line-height: 147%;
  letter-spacing: 1px;
  font-weight: 300;
  text-align: right;
  color: white;
  @media (max-width: 768px) {
    font-size: 20px;
    text-align: left;
    width: 60%;
  }
`;

const BubbleContainer = styled.div`
  position: absolute;
  /* border: 2px solid blue; */
  top: 10%;
  @media (max-width: 768px) {
    top: 13%;
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 7px dotted #0f60d1;
  position: relative;
  animation: none;
  top: 50%;
  right: -500%;
  ${(props) =>
    props.rotate === true &&
    css`
      animation: rotateCircle infinite 5s ease;
    `}

  @keyframes rotateCircle {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    border: 3px dotted #0f60d1;
    top: 0%;
    right: -250%;
  }
`;
