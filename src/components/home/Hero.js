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
      <div className="right">
        <h1>A PWD ECOSYSTEM</h1>
        <h3>an app. a forum. a lifestyle</h3>
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  margin-top: 109px;
  background-color: ${(props) => props.theme.colors.white};
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  h1 {
    letter-spacing: 1.5;
    font-size: 45px;
    font-family: sf-pro-text-bold;
  }

  h3 {
    font-size: 22px;
  }

  .hero-img {
    width: 45%;
  }

  @media screen and (min-width: 767px) {
    flex-direction: row;
    h1 {
      font-size: 50px;
    }
    h3 {
      font-size: 30px;
    }

    .hero-img {
      width: 35%;
    }
    .right {
      max-width: 28rem;
    }
  }
  @media screen and (min-width: 1500px) {
    h1 {
      font-size: 68px;
    }
    .hero-img {
      width: 25%;
    }
  }
`;
