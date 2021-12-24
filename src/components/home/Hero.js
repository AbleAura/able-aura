import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../images/home/phones.png"
        alt="A PWD ECOSYSTEM"
        className="hero-img"
      />
      <div>
        <h1>A PWD ECOSYSTEM</h1>
        <h2>an app. a forum. a lifestyle</h2>
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  h1 {
  }

  .hero-img {
    height: 100%;
  }
  .container {
  }
`;
