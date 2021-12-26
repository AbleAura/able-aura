import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const InviteFriendsForm = () => {
  return (
    <Wrapper>
      <form className="form">
        <div className="input-group">
          <input
            id="email"
            name="email"
            className="form-control"
            placeholder="https://ableaura.com"
            required
          />
          <div className="container-join-btn">
            <button id="btn-join" className="btn-join">
              <StaticImage
                src="../../assets/images/hand-white-01.png"
                alt="hand"
                layout="fixed"
                width={20}
                height={20}
              />
              <span className="text">Join</span>
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default InviteFriendsForm;

const Wrapper = styled.div`
  .input-group {
    flex-wrap: nowrap;
    flex-direction: row;
  }
`;
