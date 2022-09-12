import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { properties } from "../properties";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
const Search = () => {
  const location = useLocation();
  const ctry = location.state.country;
  const [propCountry, setPropCountry] = useState(undefined);
  console.log(ctry);
  useEffect(() => {
    const run = () => {
      const temp = [];
      properties.map((p) => {
        if (p.location.includes(ctry)) {
          temp.push(p);
        }
      });
      console.log(temp);
      setPropCountry(temp);
    };
    run();
  }, [ctry]);
  return (
    <Container>
      <Header />
      <div className="home_section2">
        {propCountry &&
          propCountry.map((p, index) => (
            <Card
              key={p._id}
              id={p._id}
              src={p.image}
              title={p.title}
              description={p.description}
              price={p.price}
              location={p.location}
            />
          ))}
      </div>
      <Footer />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  /* padding: 30px; */
  flex-direction: column;
  overflow-x: hidden;
  overflow: hidden;
  position: relative;
  top: 100px;
  .home_section2 {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }
`;
export default Search;
