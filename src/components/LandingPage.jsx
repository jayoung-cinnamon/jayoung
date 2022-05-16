import React from "react";
import styled from "styled-components";
const LandingPage = () => {
  return (
    <>
      <Container>
        <MainText>{"CREATIVE FRONTEND DEVELOPER.\nBASED IN SEOUL."}</MainText>
        <Arrow />
      </Container>
    </>
  );
};

export default LandingPage;

const Container = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;
  min-width: 320px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: 100%;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 100%;
    width: 200%;
    height: 200%;
    background-color: #0f60d1;
    animation: spin 4s normal forwards cubic-bezier(0.06, 0.66, 0.29, 0.17);
    z-index: 4;
  }

  @keyframes spin {
    from {
      transform: translateY(0) rotate(0);
    }
    to {
      transform: translateY(-200%) rotate(120deg);
    }
  }

  @media (max-width: 768px) {
    ::after {
      animation: spin 6s normal forwards cubic-bezier(0.06, 0.66, 0.29, 0.17);
    }
  }
`;

const MainText = styled.div`
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  white-space: pre-line;
  color: #0f60d1;
  line-height: 147%;
  letter-spacing: 10px;
  width: 100%;
  margin-bottom: 120px;
  @media (max-width: 768px) {
     {
      font-size: 30px;
      text-align: left;
      width: 100%;
    }
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: 100%;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 60%;
    width: 200%;
    height: 200%;
    background-color: #f4d405;
    animation: spin2 4s normal forwards cubic-bezier(0.06, 0.66, 0.29, 0.17);
    z-index: 4;
  }

  @keyframes spin2 {
    from {
      transform: translateY(100%) rotate(0);
    }
    to {
      transform: translateY(-200%) rotate(-120deg);
    }
  }

  @media (max-width: 768px) {
    ::after {
      animation: spin 9s normal forwards cubic-bezier(0.06, 0.66, 0.29, 0.17);
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
  z-index: 1;
`;
