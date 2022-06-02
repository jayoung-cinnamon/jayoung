import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Contact = forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <Container ref={ref}>
      <Text1>
        {t("make something")}
        <p>{t("cool")}</p>
      </Text1>
      <Text2>
        <p>{t("we are")}</p> {t("gonna")}
      </Text2>
      <Text3>
        {t("make")} <p>{t("good team")}</p>:)
      </Text3>
    </Container>
  );
});
export default Contact;

const Container = styled.div`
  background: #0f60d1;
  background-image: radial-gradient(#0f60d1 65%, transparent 0);
  background-position: 100px 0, 100px 100px;
  background-size: 200px 200px;
  margin: 0 auto;
  background-color: white;
  width: 100%;
  min-width: 320px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    min-height: 30vh;
    flex-direction: column;
  }
`;

const Text1 = styled.div`
  border: 5px solid #f4d405;
  border-radius: 10px;
  background-color: white;
  text-align: center;
  width: 30%;
  padding: 15px;
  font-size: 50px;
  font-weight: 700;
  white-space: pre-line;
  color: white;
  position: relative;
  top: 30%;
  left: 10%;
  transform: rotate(-30deg);
  text-shadow: -1px -1px 0 #0f60d1, 1px -1px 0 #0f60d1, -1px 1px 0 #0f60d1,
    1px 1px 0 #0f60d1;
  p {
    color: #0f60d1;
    text-shadow: none;
  }
  @media (max-width: 768px) {
    font-size: 30px;
    width: 50%;
    top: 20%;
    left: 10%;
  }
`;
const Text2 = styled(Text1)`
  top: 40%;
  left: 30%;
  transform: rotate(-10deg);
  @media (max-width: 768px) {
    top: 22%;
    left: 40%;
    transform: rotate(-20deg);
  }
`;
const Text3 = styled(Text1)`
  top: 0%;
  left: 60%;
  transform: rotate(30deg);
  @media (max-width: 768px) {
    top: 30%;
    left: 30%;
    transform: rotate(10deg);
  }
`;
