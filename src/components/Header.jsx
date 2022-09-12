import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { MdExpandMore } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import styled from "styled-components";
import PopUp from "./PopUp";
const Header = () => {
  const [togglePopUp, setTogglePopUp] = useState(false);
  return (
    <Container>
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt="icon"
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <Link to="/search">
          <AiOutlineSearch />
        </Link>
      </div>

      <div className="header__right">
        <div className="host">
          <p>Become a host</p>
        </div>
        <div className="lang">
          <GrLanguage />
        </div>
        {/* <div className="expand">
          <MdExpandMore />
        </div> */}
        <div className="user" onClick={() => setTogglePopUp(!togglePopUp)}>
          <HiOutlineMenu />
          <BsFillPersonFill className="user-fill" />
        </div>
        {togglePopUp && <PopUp />}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid #dddddd;
  .header__icon {
    object-fit: contain;
    height: 100px;
    margin-left: 20px;
  }
  .header__center {
    display: flex;
    flex: 1;
    align-items: center;
    max-width: fit-content;
    padding: 10px;
    height: 30px;
    border: 1px solid lightgray;
    border-radius: 999px;
    input {
      border: none;
      padding: 10px;
      outline-width: 0;
      /* width: 250px; */
    }
    svg {
      background-color: #ff385c;
      color: white;
      padding: 0.4rem;
      border-radius: 20px;
    }
  }

  .header__right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15vw;
    margin-right: 80px;
    .host {
      border: none;
      border-radius: 20px;
      cursor: pointer;
      background-color: #ffffff;
      padding: 0 0.5rem;
      p {
        font-size: 16px;
        font-weight: bold;
      }
      &:hover {
        background-color: whitesmoke;
      }
    }
    .lang {
      border: none;
      border-radius: 50%;
      cursor: pointer;
      background-color: #ffffff;
      padding: 0.8rem;
      &:hover {
        background-color: whitesmoke;
      }
      svg {
        font-size: 16px;
      }
    }
    .user {
      display: flex;
      padding: 0.7rem;
      cursor: pointer;
      border-radius: 20px;
      /* background-color: red; */
      border: 1px solid #dddddd;
      gap: 0.6rem;
      svg {
        font-size: 16px;
      }
      &:hover {
        transform: scale(1.07);
        box-shadow: 2px 2px 5px #727272;
        border: none;
      }
    }
  }
`;
export default Header;
