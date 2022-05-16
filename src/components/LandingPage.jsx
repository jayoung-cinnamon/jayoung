import React from "react";
import styled from "styled-components";
const LandingPage = () => {
  return (
    <Container>
      <MainText>
        <h1>{"CREATIVE FRONTEND DEVELOPER.\nBASED IN SEOUL."}</h1>
      </MainText>
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
  justify-content: center;
  align-items: center;
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
