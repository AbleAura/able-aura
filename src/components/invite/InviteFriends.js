import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import InviteFriendsForm from "./InviteFriendsForm";

const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="left">
          <StaticImage
            src="../../assets/images/bg-01-1.png"
            alt="Friends"
            className="image"
          />
        </div>
        <div className="right">
          <p>DONT LEAVE YOUR FRIENDS BEHIND</p>
          <h2>INVITE FRIENDS & EARN PRODUCT</h2>
          <InviteFriendsForm />
          <div className="social mt-4">
            <StaticImage
              src="../../assets/images/WhatsApp.png"
              alt="Whatsapp"
            />
            |
            <StaticImage
              src="../../assets/images/Instagram.png"
              alt="Instagram"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  box-shadow: ${(props) => props.theme.shadows.primary};

  .container {
    display: flex;
    flex-direction: column;
  }
  .left {
  }
  .image {
    width: 100%;
  }
  .right {
    padding: 0 5rem;
    text-align: center;
    p {
      margin-bottom: 1rem;
    }
    h2 {
      max-width: 410px;
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      flex-direction: row;
      align-items: center;
    }
  }
`;
