import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>
        {t("by")} 2022 {t("name")} 🌊
      </h1>
    </Container>
  );
};
export default Footer;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  min-height: 6vh;

  height: 100%;
  color: #0f60d1;
  background-color: #ededed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  font-size: 13px;
  font-weight: 200;
  h1 {
    margin-right: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    min-height: 5vh;
    display: flex;
    justify-content: center;
  }
`;
