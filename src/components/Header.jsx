import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Logo>jayoung.</Logo>
      <Menu>
        <Item>about</Item>
        <Item>work</Item>
        <Item>blog</Item>
        <Item>contact</Item>
      </Menu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  min-width: 320px;
  padding-right: 80px;
  padding-left: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
`;

const Item = styled.div`
  font-size: 15px;
  margin-left: 50px;
  letter-spacing: 3px;
  font-weight: 400;
  cursor: pointer;
`;
