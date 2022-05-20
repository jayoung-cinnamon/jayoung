import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useParallax } from "react-scroll-parallax";
import MainText from "./MainText";
const About2 = () => {
  const { ref } = useParallax({ speed: 20 });
  const [clickHeart, setClickHeart] = useState(false);
  const onClickHeart = () => {
    setClickHeart(!clickHeart);
  };

  return (
    <Container>
      <MainText text="About Me" />
      <Screen ref={ref}>
        <Profile>
          <Logo heart={clickHeart} />
          <NameContainer>
            <NameTag>jayoung</NameTag>
            <EmailTag>coffeejayoung@gamil.com</EmailTag>
          </NameContainer>
        </Profile>
        <Content>
          <ContentText>
            {` hello, there! :)
           I am a front-end developer.
           I mainly use JavaScript and React.
           I am also interested in all design and UI/UX design.
           It's always fun to learn new things.
           As slow but Steady is my motto,
           I want to make tomorrow better than yesterday.
           If you would like to work with me,
           please contact me!`}
          </ContentText>

          <IconContainer>
            <Envelope />
            <EmptyHeart onClick={onClickHeart} heart={clickHeart} />
          </IconContainer>
        </Content>
      </Screen>
    </Container>
  );
};

export default About2;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  min-width: 320px;
  min-height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;
  position: relative;
  @media (max-width: 768px) {
  }
`;

const Screen = styled.div`
  width: 80%;
  height: 120%;
  background-color: #0f60d1;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 20px 20px 20px;
  }
`;

const Profile = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 15px;
  border-bottom: 1px solid wheat;
`;

const Logo = styled.div`
  width: 90px;
  height: 90px;
  background-image: url("https://jayoung-cinnamon.github.io/jayoung/public/images/ProfileSmile.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    margin-right: 10px;
  }
  ${(props) =>
    props.heart &&
    css`
      background-image: url("https://jayoung-cinnamon.github.io/jayoung/public/images/smile.png");
      animation: none;
    `}
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const NameTag = styled.div`
  height: 100%;
  font-size: 30px;
  color: #ededed;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const EmailTag = styled(NameTag)`
  font-size: 20px;
  font-weight: 100;
  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: 7px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  position: relative;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const ContentText = styled.div`
  font-size: 25px;
  width: 80%;
  white-space: pre-line;
  line-height: 150%;
  color: #ededed;
  font-weight: 100;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const IconContainer = styled.div`
  height: 40px;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: space-around;
    padding-right: 10px;
    bottom: -10px;
  }
`;

const Envelope = styled.div`
  width: 45px;
  height: 40px;
  background-image: url("https://jayoung-cinnamon.github.io/jayoung/public/images/Envelope.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 5px;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 30px;
    height: 25px;
    margin-left: 0px;
  }
`;
const EmptyHeart = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("https://jayoung-cinnamon.github.io/jayoung/public/images/EmptyHeart.png");
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }

  animation: bigger 0.8s infinite ease-in-out;

  @keyframes bigger {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }
  cursor: pointer;
  ${(props) =>
    props.heart &&
    css`
      background-image: url("https://jayoung-cinnamon.github.io/jayoung/public/images/Heart.png");
      animation: none;
    `}
`;
