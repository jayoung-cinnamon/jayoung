import React from "react";
import styled from "styled-components";
const Wave = () => {
  return (
    <Container>
      <section>
        <Wave1 className="wave wave1" />
        <Wave2 className="wave wave2" />
        <Wave3 className="wave wave3" />
        <Wave4 className="wave wave4" />
      </section>
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

  section {
    position: relative;
    width: 100%;
    height: 100vh;
    background: #3586ff;
    overflow: hidden;
  }

  & > section > div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(https://i.postimg.cc/YqcvK11W/wave.png);
    background-size: 1000px 100px;
    border: 1px solid red;
  }
  section .wave1 {
    animation: animate 30s linear infinite;
    z-index: 1000;
    opacity: 1;
    animation-delay: 0s;
    bottom: 0;
  }
  section .wave2 {
    animation: animate2 15s linear infinite;
    z-index: 999;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }
  section .wave3 {
    animation: animate3 30s linear infinite;
    z-index: 998;
    opacity: 0.2;
    animation-delay: 2s;
    bottom: 15px;
  }
  section .wave4 {
    animation: animate2 5s linear infinite;
    z-index: 997;
    opacity: 0.7;
    animation-delay: -5s;
    bottom: 10px;
  }
  @keyframes animate {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 1000px;
    }
  }
  @keyframes animate2 {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: -1000px;
    }
  }
  @media (max-width: 768px) {
     {
      border: 1px solid blue;
    }
  }
`;

const Wave1 = styled.div``;
const Wave2 = styled.div``;
const Wave3 = styled.div``;
const Wave4 = styled.div``;
