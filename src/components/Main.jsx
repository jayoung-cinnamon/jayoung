import React from "react";
import styled from "styled-components";
import Header from "./Header";
import LandingPage from "./LandingPage";
const Main = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <LandingPage />
      </MainContainer>
    </>
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
  display: flex;
  flex-direction: column;
  padding-right: 80px;
  padding-left: 80px;
`;
