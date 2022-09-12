import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Card = ({ id, src, title, description, price, location }) => {
  return (
    <Container>
      <Link to={`/property/${id}`}>
        <img src={src} alt="" />
        <div className="card__info">
          <h2>{location}</h2>
          <h2>{title}</h2>
          <h4>{description}</h4>
          <h3>{price}</h3>
        </div>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
  transition: transform 100ms ease-in;
  a {
    text-decoration: none;
    color: #7d8ea1;
  }
  cursor: pointer;
  &:hover {
    transform: scale(1.07);
  }
  img {
    object-fit: fill;
    min-width: 300px;
    min-height: 200px;
    width: 100%;
  }
  .card__info {
    margin-top: -9px;
    border-radius: 10px;
    padding: 20px;
    padding-top: 20px;
    border: 1;
    h2 {
      font-size: 18px;
      font-weight: 600;
      color: black;
    }
    h4 {
      font-size: 14px;
      font-weight: 300;
      margin-top: 8px;
      margin-bottom: 8px;
    }
    h3 {
      color: black;
    }
  }
`;

export default Card;
