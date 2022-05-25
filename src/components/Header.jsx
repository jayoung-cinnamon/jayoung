import React from "react";
import styled from "styled-components";
import _ from "lodash";

const Header = (props) => {
  return (
    <Container>
      <a target="_blank">
        <Logo>jayoung.</Logo>
      </a>
      <Menu>
        <Item onClick={props.scrollToAbout}>about</Item>
        <Item onClick={props.scrollToWork}> work</Item>
        <Item onClick={props.scrollToContact}>contact</Item>
        <a target="_blank">
          <Item>blog</Item>
        </a>
      </Menu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  min-width: 320px;
  border-bottom: 1px solid #ededed;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  @media (max-width: 768px) {
     {
      width: 93%;
      height: 40px;
    }
  }
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  bottom: 13px;
  /* position: absolute; */
  animation: jump 1.5s infinite ease-in;
  @keyframes jump {
    0% {
      bottom: 13px;
    }
    50% {
      bottom: 15px;
    }
    100% {
      bottom: 13px;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.div`
  font-size: 15px;
  margin-left: 50px;
  letter-spacing: 3px;
  font-weight: 400;
  cursor: pointer;
`;
