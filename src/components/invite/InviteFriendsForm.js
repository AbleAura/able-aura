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
            className="form-control text"
            placeholder="https://ableaura.com"
            required
          />

          <button id="btn-copy" className="btn">
            <span className="text">Copy</span>
          </button>
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

  .text {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    z-index: 1;
  }

  .btn {
    color: ${(props) => props.theme.colors.black};
    border: 1px solid ${(props) => props.theme.colors.gray400};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: -1px;
    z-index: 2;
  }
`;
