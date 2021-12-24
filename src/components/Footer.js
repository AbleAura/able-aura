import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <Wrapper>
      <div className="logo-box">
        <StaticImage
          src="../images/logo.png"
          alt="Able Aura"
          className="logo"
        />
      </div>
      Read our <a href="#">Privacy Policy</a>. Copyright Ableaura 2021.
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  padding: 50px 0;
  text-align: center;

  .logo-box {
    margin-bottom: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
