import React, { forwardRef } from "react";
import styled from "styled-components";
import MainText from "./MainText";

const Contact = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <MainText text={`Contact Me:)`}></MainText>
      <SubText>{`Let's\nmake\nsomething\ncool`}</SubText>
      <SvgContainer>
        <path
          d="m0 100 C 500 100, 400 0, 600 00 S 00 300, 900 100"
          stroke="#eb6e4c"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </SvgContainer>
    </Container>
  );
});
export default Contact;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  min-height: 40vh;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  flex-wrap: wrap;
  overflow: hidden;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;
    min-height: 30vh;
    flex-direction: column;
  }
`;

const SubText = styled.div`
  height: 100%;
  width: 100%;
  font-size: 60px;
  font-weight: 600;
  z-index: 3;
  letter-spacing: 10px;
  text-align: right;
  color: #0f60d1;
  position: relative;
  line-height: 120%;
  white-space: pre-line;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const SvgContainer = styled.svg`
  width: 100%;
  border: 1px solid red;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 80%;
`;
