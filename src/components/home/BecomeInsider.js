import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const BecomeInsider = () => {
  return (
    <Wrapper>
      <p className="text">
        Become an insider, win trips & access exclusive early memberdiscounts.
      </p>
      <form className="form">
        <div class="input-group">
          <input class="form-control" placeholder="example@ableaura.com" />
          <button className="btn-submit">
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
      </form>
    </Wrapper>
  );
};

export default BecomeInsider;

const Wrapper = styled.div`
  padding: 2rem 0;
  text-align: center;

  .form {
    padding: 0 2rem;
  }
  .input-group {
    transition: all 0.2s ease;

    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .form-control {
    background-color; ${(props) => props.theme.colors.redDark};
    width: 400px;
    height: calc(2.25em + 1.75rem + 0.0625rem);
    padding: 0.875rem 1rem;
    line-height: 1.5;
    font-size: 1.25rem;
    border-radius: 0.3rem;
    box-shadow: ${(props) => props.theme.shadows.inset};
    display: block;
    font-weight: 300;
    color: ${(props) => props.theme.colors.black};
        background-clip: padding-box;
    border: 0.0625rem solid ${(props) => props.theme.colors.grey};
    transition: all 0.3s ease-in-out;
    overflow: visible;
  }

  .btn-submit {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    width: 200px;
    height: 48px;
    background: ${(props) => props.theme.colors.black};
    box-shadow:  ${(props) => props.theme.shadows.button};
    border-radius: 7px;
    font-family: 'sf-pro-text-bold';
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.colors.primary9};
    text-transform: uppercase;
    padding: 12px 0;

    .text {
margin-left: 5px;
    }
  }
`;
