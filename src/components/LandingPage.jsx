import React from "react";
import styled from "styled-components";
const LandingPage = () => {
  return (
    <Container>
      <MainText>{"CREATIVE FRONTEND DEVELOPER.\nBASED IN SEOUL."}</MainText>
      <Arrow />
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  /* max-width: 768px; */
  min-width: 320px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rebeccapurple;
  position: relative;

  @media (max-width: 768px) {
     {
      font-size: 45px;
      text-align: left;
      width: 100%;
      justify-content: flex-start;
    }
    & > div {
      margin-top: 70px;
    }
  }
`;

const MainText = styled.div`
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  white-space: pre-line;
  /* color: #252F83; */
  color: #0f60d1;
  line-height: 147%;
  letter-spacing: 10px;
  width: 70%;
  border: 1px solid purple;
  @media (max-width: 768px) {
     {
      font-size: 30px;
      text-align: left;
      width: 100%;
      border: 1px solid green;
    }
  }
`;

const Arrow = styled.div`
  width: 20px;
  height: 56px;
  background-image: url("/images/curlyArrow.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 30px;
`;
