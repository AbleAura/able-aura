import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../assets/images/mob.png"
        alt="A PWD ECOSYSTEM"
        className="hero-img"
        layout="constrained"
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
    width: 12rem;
    letter-spacing: 0.3rem;
  }

  .hero-img {
    width: 35%;
    @media screen and (min-width: 992px) {
      width: 25%;
    }
  }
  .container {
  }
`;
