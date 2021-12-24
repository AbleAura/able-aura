import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <Wrapper>
      <div className="left">
        <StaticImage
          src="../../images/signin/hands.png"
          alt="Friends"
          className="image"
        />
      </div>
      <div className="right">
        <p>DONT LEAVE YOUR FRIENDS BEHIND</p>
        <h2>INVITE FIRENDS & EARN PRODUCT</h2>
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: ${(props) => props.theme.shadows.primary};

  .left {
    /* border: 1px solid ${(props) => props.theme.colors.primary1}; */
  }
  .image {
    width: 50%;
    margin: 0 20%;
  }
  .right {
    /* border: 1px solid ${(props) => props.theme.colors.primary2}; */
    text-align: center;
    p {
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
