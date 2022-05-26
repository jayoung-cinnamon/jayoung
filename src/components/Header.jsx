import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import _ from "lodash";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const Header = (props) => {
  const [menuClick, setMenuClick] = useState(false);
  const onClickHamburger = () => {
    setMenuClick(!menuClick);
  };

  return (
    <Container>
      <MenuWrapper>
        <a target="_blank" href="https://github.com/jayoung-cinnamon">
          <Logo>jayoung.</Logo>
        </a>
        <Menu menuClick={menuClick}>
          <Item menuClick={menuClick} onClick={props.scrollToAbout}>
            about
          </Item>
          <Item menuClick={menuClick} onClick={props.scrollToWork}>
            {" "}
            work
          </Item>
          <Item menuClick={menuClick} onClick={props.scrollToContact}>
            contact
          </Item>
          <a target="_blank" href="https://diary-of-lemon.tistory.com/">
            <Item menuClick={menuClick}>blog</Item>
          </a>
        </Menu>
        <Hamburger onClick={onClickHamburger}>
          {menuClick === true ? (
            <GiCancel color={"#0f60d1"} size={25} />
          ) : (
            <GiHamburgerMenu color={"#0f60d1"} size={25} />
          )}
        </Hamburger>
      </MenuWrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div``;

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
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 93%;
    height: 40px;
  }
`;

const Menu = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
    ${(props) =>
      props.menuClick === true &&
      css`
        width: 0%;
        display: block;
        position: relative;
        top: 90px;
        right: 0;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;
        height: 130px;
      `}
  }
`;

const Item = styled.div`
  font-size: 15px;
  margin-left: 50px;
  letter-spacing: 3px;
  font-weight: 400;
  cursor: pointer;

  @media (max-width: 768px) {
    ${(props) =>
      props.menuClick === true &&
      css`
        font-size: 18px;
        background-color: white;
        font-weight: 500;
      `}
  }
`;

const Hamburger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    cursor: pointer;
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0;
    right: 0;
  }
`;

const MenuWrapper = styled.div`
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
    width: 93%;
    height: 40px;
  }
`;
