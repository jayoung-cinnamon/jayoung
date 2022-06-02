import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Translation = () => {
  const { t } = useTranslation();
  const clickHandler = (lang) => {
    i18next.changeLanguage(lang);
  };
  return (
    <Container>
      <Button onClick={() => clickHandler("ko")}>{t("ko")}</Button>
      <Button onClick={() => clickHandler("en")}>{t("en")}</Button>
    </Container>
  );
};

export default Translation;

const Container = styled.div`
  display: flex;
  margin-left: 10px;
`;

const Button = styled.button`
  white-space: nowrap;
  border: none;
  padding: 3px;
  font-size: 10px;
  margin-left: 5px;
  background-color: #0f60d1;
  color: white;
`;
