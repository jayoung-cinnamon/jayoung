import React from "react";
import styled from "styled-components";
import MainText from "./MainText";
import Email from "./Email";
const Contact = () => {
  return (
    <Container>
      {/* <TextContainer>
      </TextContainer> */}
      <MainText text="Contact Me:)"></MainText>
      <Email />
    </Container>
  );
};
export default Contact;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  /* max-width: 768px; */
  min-width: 320px;
  min-height: 60vh;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  /* flex-direction: column; */
  /* padding-right: 80px;
  padding-left: 80px; */
  border: 1px solid red;
  @media (max-width: 768px) {
    min-height: 50vh;
    flex-direction: column;
  }
  margin-bottom: 50px;
`;

const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  border: 2px solid blue;
`;
