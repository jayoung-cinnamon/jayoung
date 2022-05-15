import React from "react";
import styled from "styled-components";
import Header from "./Header";
import LandingPage from "./LandingPage";
const Main = () => {
  return (
    <MainContainer>
      <Header />
      <LandingPage />
    </MainContainer>
  );
};
export default Main;

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  min-width: 320px;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  display: grid;
  padding-right: 80px;
  padding-left: 80px;
  /* justify-content: center;
  align-items: center; */
  /* padding: 10px; */
  border: 1px solid blue; ;
`;
