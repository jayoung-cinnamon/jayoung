import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
const About2 = () => {
  const [clickHeart, setClickHeart] = useState(false);
  const onClickHeart = () => {
    setClickHeart(!clickHeart);
  };

  useEffect(() => {
    console.log("clickHeart", clickHeart);
  }, [clickHeart]);
  return (
    <Container>
      <Screen>
        <Profile>
          <Logo />
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
  /* max-width: 768px; */
  min-width: 320px;
  min-height: 100vh;
  /* height: 100vh; */
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  padding-bottom: 20px;
  /* padding-right: 80px;
  padding-left: 80px; */
  /* border: 1px solid green; */
  position: relative;
  @media (max-width: 768px) {
  }
`;

const Screen = styled.div`
  width: 90%;
  height: 120%;
  background-color: #0f60d1;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 10px 20px 10px;
  }
`;

const Profile = styled.div`
  width: 100%;
  /* height: 100px; */
  display: flex;
  /* border: 1px solid wheat; */
`;

const Logo = styled.div`
  width: 90px;
  height: 90px;
  background-image: url("/images/smile.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    margin-right: 10px;
  }
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-evenly; */
`;

const NameTag = styled.div`
  /* width: 100px; */
  height: 100%;
  font-size: 30px;
  color: #ededed;
  font-weight: 300;
  /* border: 1px solid white; */
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const EmailTag = styled(NameTag)`
  font-size: 20px;
  font-weight: 100;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  /* border: 1px solid yellow; */
  margin-top: 20px;
  position: relative;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const ContentText = styled.div`
  /* border: 1px solid white; */
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
  /* width: 20%; */
  height: 40px;
  /* border: 1px solid red; */
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: space-around;
    padding-right: 10px;
  }
`;

const Envelope = styled.div`
  width: 45px;
  height: 40px;
  background-image: url("/images/Envelope.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 5px;
  /* margin-left: 20px; */
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
  background-image: url("/images/EmptyHeart.png");
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }

  animation: bigger 0.5s infinite ease-in-out;

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
      background-image: url("/images/Heart.png");
      animation: none;
    `}
`;
