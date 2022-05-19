import React from "react";
import styled, { css } from "styled-components";

const SkillIcon = ({ skill }) => {
  return <ButtonContainer skill={skill}>{skill}</ButtonContainer>;
};

export default SkillIcon;

const ButtonContainer = styled.div`
  height: 24px;
  font-size: 13px;
  line-height: 1.3;
  z-index: 5;
  border-radius: 3px;
  margin-right: 5px;
  padding: 3px;
  ${(props) =>
    props.skill === "javaScript" &&
    css`
      background-color: #efdb4f;
    `}
  ${(props) =>
    props.skill === "React" &&
    css`
      background-color: #05b4cf;
    `}
  ${(props) =>
    props.skill === "TypeScript" &&
    css`
      background-color: #2f71bb;
    `}
  ${(props) =>
    props.skill === "Recoil" &&
    css`
      background-color: #4182fa;
    `}
  ${(props) =>
    props.skill === "Firebase" &&
    css`
      background-color: #e87b09;
    `}
  ${(props) =>
    props.skill === "Java" &&
    css`
      background-color: #e01b22;
      color: white;
    `}
  ${(props) =>
    props.skill === "WebGL" &&
    css`
      background-color: #910102;
      color: white;
    `}
  ${(props) =>
    props.skill === "HTML" &&
    css`
      background-color: #d84a23;
    `}
  ${(props) =>
    props.skill === "CSS" &&
    css`
      background-color: #268fc6;
    `}
    @media (max-width: 768px) {
    margin: 5px;
    line-height: 0.9;
    font-size: 11px;
    height: 16px;
  }
`;
