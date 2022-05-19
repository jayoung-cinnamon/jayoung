import React from "react";
import styled from "styled-components";
const MainText = ({ text }) => {
  return <TitleText>{text}</TitleText>;
};

export default MainText;

const TitleText = styled.div`
  font-size: 200px;
  line-height: 100%;
  letter-spacing: 90px;
  border: 1px solid red;
  width: 100%;
  font-weight: 400;
  text-align: left;
  position: absolute;
  /* color: #0f60d1; */
  color: white;
  top: 0;
  left: 0;
  text-shadow: -1px -1px 0 #cdcdcd, 1px -1px 0 #cdcdcd, -1px 1px 0 #cdcdcd,
    1px 1px 0 #cdcdcd;
  @media (max-width: 768px) {
     {
      font-size: 60px;
      /* text-align: right; */
      width: 100%;
      letter-spacing: 45px;
      /* height: 20%; */
    }
  }
`;