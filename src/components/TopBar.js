import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const TopBar = () => {
  return (
    <Wrapper>
      <StaticImage src="../assets/images/logo.png" alt="Able Aura" />
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  position: relative;
  z-index: 3;

  left: 0;
  width: 100%;
  height: 109px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) => props.theme.shadows.primary};
`;
