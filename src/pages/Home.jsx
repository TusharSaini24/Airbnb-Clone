import React from "react";
import Card from "../components/Card";
import { properties } from "../properties";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <Container>
      <Header />
      <div className="home_section1">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>

      <div className="home_section2">
        {properties.map((p, index) => (
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
  .home_section1 {
    display: flex;
  }
  .home_section2 {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }
`;

export default Home;
