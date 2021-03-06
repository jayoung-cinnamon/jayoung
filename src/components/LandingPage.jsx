import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useParallax } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";
const LandingPage = () => {
  const eyesRef = useRef(null);
  const { ref } = useParallax({ speed: -20 });
  useEffect(() => {
    if (!eyesRef.current) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (e) => {
    let balls = document.getElementsByClassName("ball");
    let x = (e.clientX * 100) / window.innerWidth + "%";
    let y = (e.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < 2; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
    }
  };

  const { t } = useTranslation();
  return (
    <>
      <Container>
        <EyeContainer ref={eyesRef}>
          <Eye>
            <BlackEye className="ball" />
          </Eye>
          <Eye>
            <BlackEye className="ball" />
          </Eye>
        </EyeContainer>

        <MainText>
          <Text> {t("creative")}</Text>
          <p ref={ref}>{t("frontend developer")}</p>
          <Text>{t("based in seoul")}</Text>
        </MainText>
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
  height: 100vh;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
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
    align-items: start;
    margin-top: 40px;
  }
`;

const MainText = styled.div`
white-space:nowrap;
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  white-space: pre-line;
  color: #0f60d1;
  line-height: 147%;
  letter-spacing: 10px;
  width: 90%;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    font-size: 30px;
    text-align: left;
    width: 60%;
    margin-bottom: 25px;
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

  @media (max-width: 768px) {
    ::after 
      animation: spin 9s normal forwards cubic-bezier(0.06, 0.66, 0.29, 0.17);
    
  }
  }

  @keyframes spin2 {
    from {
      transform: translateY(100%) rotate(0);
    }
    to {
      transform: translateY(-200%) rotate(-120deg);
    }
  }

`;

const Text = styled.div`
  white-space: nowrap;
  font-size: 60px;
  font-weight: 700;
  white-space: pre-line;
  color: white;
  text-shadow: -1px -1px 0 #0f60d1, 1px -1px 0 #0f60d1, -1px 1px 0 #0f60d1,
    1px 1px 0 #0f60d1;

  @media (max-width: 768px) {
    font-size: 30px;
    text-align: left;
    width: 70%;
  }
`;

const EyeContainer = styled.div`
  position: absolute;
  top: 60%;
  right: 10%;
  width: 100px;
  height: 100px;
  display: flex;
`;

const Eye = styled.div`
  position: relative;
  width: 50px;
  height: 80px;
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
  height: 40px;
  background: #000;
  border-radius: 50%;
`;
