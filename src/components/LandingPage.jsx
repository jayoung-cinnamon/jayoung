import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
const LandingPage = () => {
  // const [mousePosition, setMousePosition] = useState({
  //   mouseLeft: 0,
  //   mouseRight: 0,
  //   mouseRad: 0,
  // });
  const eyesRef = useRef(null);

  useEffect(() => {
    if (!eyesRef.current) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (e) => {
    // const eyesPosition = eyesRef.current.getBoundingClientRect();
    // let mouseX = e.pageX;
    // let mouseY = e.pageY;
    // let left = eyesPosition.left - mouseX;
    // let right = eyesPosition.right - mouseY;
    // let rad = Math.atan2(left, right);
    let balls = document.getElementsByClassName("ball");
    let x = (e.clientX * 100) / window.innerWidth + "%";
    let y = (e.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < 2; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
    }
    // setMousePosition({ mouseLeft: left, mouseRight: right, mouseRad: rad });
  };

  // useEffect(() => {
  //   console.log("mousePosition.mouseLeft", mousePosition.mouseLeft);
  // }, [mousePosition]);

  return (
    <>
      <Container>
        <EyeContainer ref={eyesRef}>
          <LeftEye>
            <BlackEye className="ball" />
          </LeftEye>
          <LeftEye>
            <BlackEye className="ball" />
          </LeftEye>
        </EyeContainer>

        <MainText>
          <Text>CREATIVE</Text>
          {"FRONTEND DEVELOPER."}
          <Text>BASED IN SEOUL.</Text>
        </MainText>
        <ArrowContainer>
          <Arrow />
        </ArrowContainer>
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
    align-items: start;
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
  width: 90%;
  margin-bottom: 120px;
  /* position: relative; */
  @media (max-width: 768px) {
     {
      font-size: 30px;
      text-align: left;
      width: 60%;
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

const ArrowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Text = styled.div`
  font-size: 60px;
  font-weight: 700;
  white-space: pre-line;
  color: white;
  text-shadow: -1px -1px 0 #0f60d1, 1px -1px 0 #0f60d1, -1px 1px 0 #0f60d1,
    1px 1px 0 #0f60d1;

  @media (max-width: 768px) {
     {
      font-size: 30px;
      text-align: left;
      width: 60%;
    }
  }
`;

const Dot = styled.div`
  position: absolute;
  width: 23px;
  height: 23px;
  border-radius: 100%;
  border: 2px dotted #0f60d1;
  /* background-color: #0f60d1; */
  animation: infiniteCircle 4s normal infinite ease-in-out;
  top: 23%;
  left: 30%;
  @keyframes infiniteCircle {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Dot2 = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #0f60d1;
  top: 30%;
  left: 30%;
`;

const Dot3 = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #0f60d1;
  top: 40%;
  right: 10%;
`;
const Dot4 = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #0f60d1;
  top: 80%;
  right: 20%;
`;
const EyeContainer = styled.div`
  position: absolute;
  top: 60%;
  right: 12%;
  width: 100px;
  height: 100px;
  /* border: 1px solid green; */
  display: flex;
`;

const LeftEye = styled.div`
  position: relative;
  width: 60px;
  height: 100px;
  border-radius: 100%;
  border: 1px solid black;
  background-color: white;
  overflow: hidden;
`;

const BlackEye = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 50px;
  background: #000;
  border-radius: 50%;

  /* ${(props) =>
    props.position &&
    css`
      transform: translateX({mousePosition.mouseLeft}),
        translateY({mousePosition.mouseRight});
    `} */
`;
