import React, { useState } from "react";
import styled from "styled-components";
import Login from "../pages/Login";

const PopUp = () => {
  const [toggleLoginPage, setToggleLoginPage] = useState(false);
  return (
    <Container>
      <div className="signup">Sign Up</div>
      <div
        className="login"
        onClick={() => setToggleLoginPage(!toggleLoginPage)}
      >
        Log In
      </div>
      {toggleLoginPage && <Login />}
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  width: 200px;
  height: 100px;
  top: 90px;
  background-color: white;
  right: 80px;
  border-radius: 25px;
  box-shadow: 2px 2px 1px #fff;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  box-sizing: border-box;

  .signup {
    font-size: 16px;
    font-weight: bold;
    color: black;
    padding: 0.4rem;
    cursor: pointer;
    &:hover {
      background-color: #dddddd;
    }
    text-align: center;
  }
  .login {
    font-size: 16px;
    font-weight: 100;
    cursor: pointer;
    text-align: center;
    /* margin-left: 1rem; */
    padding: 0.4rem;
    &:hover {
      background-color: #dddddd;
    }
  }
`;
export default PopUp;
