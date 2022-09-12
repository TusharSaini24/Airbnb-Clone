import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { properties } from "../properties";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Property = () => {
  const navigate = useNavigate();
  const [activeUser, setActiveUser] = useState(undefined);
  const [property, setProperty] = useState(undefined);
  const { id } = useParams();
  useEffect(() => {
    const run = async () => {
      if (localStorage.getItem("airbnb-user")) {
        setActiveUser(await JSON.parse(localStorage.getItem("airbnb-user")));
      }
    };
    run();
  });
  useEffect(() => {
    const run = () => {
      if (id) {
        const propertyTemp = properties.find((x) => x._id === id);
        setProperty(propertyTemp);
      }
    };
    run();
  }, [id]);

  const handleBuy = (e) => {
    e.preventDefault();
    console.log(activeUser);
    if (activeUser === undefined) {
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      {property && (
        <Container>
          <div>
            <div className="header">
              <div className="header-left">
                <h1>{property.title}</h1>
                <div className="details">
                  <span>
                    <AiFillStar />
                    &nbsp;{property.ratings}&nbsp;rating
                  </span>
                  <span>{property.reviews}&nbsp;reviews</span>
                  <span>{property.location}</span>
                </div>
              </div>
            </div>
            <div className="main">
              <img src={property.image} alt="error" />
              <div className="main-card">
                <div className="head">
                  <h2>{property.description}</h2>
                  <div className="d1">
                    <span>{property.price}</span>
                    {/* <span>{property.ratings}</span> */}
                    <span>{property.reviews}&nbsp;reviews</span>
                  </div>
                </div>
                <div className="mid">
                  <button onClick={(e) => handleBuy(e)}>buy</button>
                </div>
                <div className="foot">
                  <span className="tax">{property.tax}</span>
                  <span className="text">
                    Total charges including all taxes
                  </span>
                  <span className="property-price">{property.price}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  position: relative;
  top: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 2px 2px 5px #727272;
  padding: 5rem;
  overflow: hidden;
  z-index: -1;
  div {
    width: 85%;
    .header {
      display: flex;
      justify-content: space-between;
      .header-left {
        display: flex;
        flex-direction: column;
        h1 {
          font-size: 30px;
          color: black;
        }
        .details {
          display: flex;
          gap: 1rem;
          margin-top: -1rem;
          span {
            color: black;
          }
        }
      }
      .header-right {
        display: flex;
        padding-top: 1.5rem;
        justify-content: flex-end;
      }
    }
    .main {
      margin-top: 1rem;
      display: flex;
      gap: 10rem;
      img {
        border-radius: 15px;
      }
      .main-card {
        display: flex;
        flex-direction: column;
        .head {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          h2 {
            color: black;
            font-weight: bolder;
            font-size: 25px;
          }
          .d1 {
            display: flex;
            gap: 0.6rem;
            span {
              font-size: 20px;
            }
          }
        }
        .mid {
          display: flex;
          flex-direction: column;
          margin-top: 1rem;
          margin-bottom: 1rem;
          button {
            width: 100%;
            background-color: #ff385c;
            padding: 1rem 2rem;
            border: none;
            border-radius: 10px;
            text-align: center;
            cursor: pointer;
            &:hover {
              transform: scale(1.08);
            }
            color: white;
            font-size: 24px;
          }
        }
        .foot {
          display: flex;
          flex-direction: column;
          span {
            font-size: 20px;
          }
          .tax {
            color: black;
          }
          .property-price {
            color: black;
            font-weight: 900;
          }
        }
      }
    }
  }
`;
export default Property;
