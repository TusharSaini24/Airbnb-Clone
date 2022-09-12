import React from "react";
import styled from "styled-components";
import { TbCurrencyRupee } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
const Footer = () => {
  return (
    <Container>
      <div className="left">
        <p>© 2020 Airbnb clone! No rights reserved</p>
        <p>Privacy · Terms · Sitemap · Company Details</p>
      </div>
      <div className="right">
        <div>
          English
          {/* <RiEnglishInput /> */}
        </div>
        <div>
          {/* <TbCurrencyRupee /> */}
          INR
        </div>
        <div>Support &amp; resources</div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 100;
  width: 100%;
  border-top: 1px solid #dddddd;
  .left {
    display: flex;
    gap: 1rem;
    margin-left: 1rem;
  }
  .right {
    display: flex;
    gap: 1rem;
    margin-right: 1rem;
    div {
      font-size: 16;
      font-weight: bold;
      color: black;
      text-align: center;
      svg {
        /* padding-bottom: 0.3rem;
        text-align: center; */
      }
    }
  }
`;
export default Footer;
