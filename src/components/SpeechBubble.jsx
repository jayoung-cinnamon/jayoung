import React from "react";
import styled from "styled-components";

const SpeechBubble = () => {
  return (
    <BubbleContainer>
      <Bubble>Welcome!</Bubble>
      <Triangle />
    </BubbleContainer>
  );
};
export default SpeechBubble;

const Bubble = styled.div`
  background-color: #0f60d1;
  width: 300px;
  height: 100px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  letter-spacing: 10px;
  color: #ededed;
  text-align: center;
  @media (max-width: 768px) {
    width: 150px;
    height: 50px;
    font-size: 15px;
    letter-spacing: 3px;
  }
`;

const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 25px solid #0f60d1;
  transform: rotate(180deg);
  bottom: -15px;
  left: 130px;
  @media (max-width: 768px) {
    left: 50px;
  }
`;

const BubbleContainer = styled.div`
  position: relative;
`;
