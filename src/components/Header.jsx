import React, { useRef } from "react";
import styled from "styled-components";

const Header = (e) => {
  const focusTarget = useRef([]);
  //구조분해 할당
  const scrollTo = (e) => {
    const name = e.target.name;
    const category = {
      about: 0,
      work: 1,
      contact: 2,
    };
    //category의 name의 키값과 같은 컴포넌트로 이동
    focusTarget.current[category[name]].scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container scrollTo={scrollTo}>
      <a target="_blank" href="https://github.com/jayoung-cinnamon">
        <Logo>jayoung.</Logo>
      </a>
      <Menu>
        <Item ref={(el) => (focusTarget.current[0] = el)}>about</Item>
        <Item ref={(el) => (focusTarget.current[1] = el)}> work</Item>
        <Item ref={(el) => (focusTarget.current[2] = el)}>contact</Item>
        <a target="_blank" href="https://diary-of-lemon.tistory.com/">
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
