import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <Wrapper>
      <Link to="/">
        <StaticImage
          src="../assets/images/logo.png"
          alt="Able Aura"
          className="logo"
          layout="fixed"
          width={150}
        />
      </Link>

      <p>
        Read our <Link to="/privacy-policy">Privacy Policy</Link>. Copyright
        &copy; Ableaura {new Date().getFullYear()}.
      </p>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  padding: 1.5rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 0.875rem;
  }
`;
