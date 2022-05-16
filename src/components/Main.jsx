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
  max-width: 1440px;
  min-width: 320px;
  min-height: 100vh;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-right: 80px;
  padding-left: 80px;
  /* width: 100%; */
  /* position: relative; */
`;
