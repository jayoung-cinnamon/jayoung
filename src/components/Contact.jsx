import React from "react";
import styled from "styled-components";
import MainText from "./MainText";
const Contact = () => {
  return (
    <Container>
      <MainText text="Let's talk about!"></MainText>
    </Container>
  );
};
export default Contact;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  /* max-width: 768px; */
  min-width: 320px;
  min-height: 100vh;
  height: 100vh;
  background-color: white;
  display: flex;
  position: relative;
  flex-direction: column;
  /* padding-right: 80px;
  padding-left: 80px; */
  border: 1px solid red;
  @media (max-width: 768px) {
    min-height: 50vh;
  }
`;
