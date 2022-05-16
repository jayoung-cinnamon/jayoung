import React from "react";
import styled from "styled-components";
const LandingPage = () => {
  return (
    <Container>
      <MainText>
        <h1>{"CREATIVE FRONTEND DEVELOPER.\nBASED IN SEOUL."}</h1>
      </MainText>
      <Arrow />
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  width: 100%;
  min-width: 320px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rebeccapurple;
  position: relative;
`;

const MainText = styled.div`
  text-align: center;
  font-size: 60px;
  font-weight: 600;
  white-space: pre-line;
  color: #0f60d1;
  line-height: 147%;
  letter-spacing: 10px;
  width: 70%;
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
