import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

export const Email = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service", "template", "user_").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <InputContainer>
        <Label>Name</Label>
        <Input type="text" name="user_name" />
      </InputContainer>
      <InputContainer>
        <Label>Email</Label>
        <Input type="email" name="user_email" />
      </InputContainer>

      <InputContainer>
        <Label>Company</Label>
        <Input type="text" name="user_company" />
      </InputContainer>

      <Label>Message</Label>
      <MailInput name="message" />
      <Btn className="button" type="submit" value="Send" />
    </Form>
  );
};

export default Email;

const Input = styled.input`
  font-size: 15px;
  width: 250px;
  color: black;
  font-weight: 300;
  border: none;
  border-bottom: 1px solid gray;
  padding: 3px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.input`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 9999;
  position: absolute;
  bottom: -30px;
  right: 0px;
  cursor: pointer;
  color: #209fac;

  min-width: 100px;
  padding: 10px 8px;
  text-align: center;
  font-size: 15px;
  color: #5e5e5e;
  border: 1px solid #8f8f8f;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  transition: all 0.3s;

  :hover {
    background: #209eac40;
    color: black;
    /* padding-right: 35px; */
  }
`;

const Label = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 15px;
  color: black;
  font-weight: bold;
`;

const Form = styled.form`
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid red;
  z-index: 1;
  background-color: #ededed;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MailInput = styled.textarea`
  font-size: 15px;
  width: 370px;
  height: 100px;
  border: none;
  border: 1px solid gray;
  resize: none;
  margin-top: 15px;
  padding: 5px;
  color: black;
  font-weight: 300;
`;
