import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const TopBar = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="/">
          <StaticImage src="../assets/images/logo.png" alt="Able Aura" />
        </Link>
      </nav>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  z-index: 1;
  background-color: ${(props) => props.theme.colors.white2};
  width: 100%;
  height: 109px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${(props) => props.theme.shadows.dark};

  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;

  .able-topbar {
    background-color: ${(props) => props.theme.colors.gray1};
    width: 100vw;
    text-align: center;

    p {
      font-size: 18px !important;
      letter-spacing: 1.5px;
      color: ${(props) => props.theme.colors.white};
      padding: 3px 0;
      margin: 0;
    }
  }
`;
