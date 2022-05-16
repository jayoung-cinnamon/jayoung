import React from "react";
import styled from "styled-components";
const Wave = () => {
  return (
    <Container>
      <Circle1 />
      <Circle2 />
      <Circle3 />
    </Container>
  );
};

export default Wave;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  height: 12vh;
  overflow: hidden;
  border: 1px solid blue;
  display: flex;
  padding-top: 10px;
  justify-content: space-between;
  bottom: 0;
  position: relative;
  @media (max-width: 768px) {
     {
      border: 1px solid blue;
    }
  }
`;

const Circle1 = styled.div`
  width: 50%;
  height: 280px;
  background-color: #0f60d185;
  /* position: absolute; */
  border-radius: 50%;
  z-index: 1;
  /* left: -200px; */
  animation: wave 2s normal infinite linear;

  @keyframes wave2 {
    0% {
      transform: translateY(3%);
      /* translateZ(0.1px) rotate(0deg); */
    }

    100% {
      transform: translateY(-10%);
      /* translateZ(0.1px) rotate(360deg); */
    }
  }
`;
const Circle2 = styled.div`
  width: 50%;
  height: 300%;
  position: relative;
  background-color: #0f60d1b7;
  border-radius: 50%;
  top: 0;
  z-index: 3;
  animation: wave2 3s normal infinite linear;

  @keyframes wave2 {
    0% {
      transform: translateY(1%);
      /* translateZ(0.1px) rotate(0deg); */
    }

    100% {
      transform: translateY(-10%);
      /* translateZ(0.1px) rotate(360deg); */
    }
  }
`;

const Circle3 = styled.div`
  width: 50%;
  height: 300px;
  background-color: #0f60d139;
  border-radius: 50%;
  z-index: 2;
  animation: wave2 2s normal infinite linear;
  @keyframes wave3 {
    0% {
      transform: translateY(3%);
      /* translateZ(0.1px) rotate(0deg); */
    }

    100% {
      transform: translateY(-10%);
      /* translateZ(0.1px) rotate(360deg); */
    }
  }
`;
