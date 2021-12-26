import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const BecomeInsider = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="desktop">JOIN US, IN CHANGING THE FUTURE</h2>
        <h2 className="mobile">
          JOIN US
          <br />
          <span className="in-change">IN CHANGE THE FUTURE</span>
        </h2>
        <p className="text">
          Become an insider, win trips & access exclusive early memberdiscounts.
        </p>
        <form className="form">
          <div className="input-group">
            <input
              id="email"
              name="email"
              className="form-control"
              placeholder="example@ableaura.com"
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
      </div>
    </Wrapper>
  );
};

export default BecomeInsider;

const Wrapper = styled.div`
  padding: 2rem;
  text-align: center;
  

  .desktop {display: none;}

  .in-change {font-size: 19px}
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
    justify-content: center;
    width: 100%;
  }

  .form-control {
    background-color; ${(props) => props.theme.colors.redDark};
    width: 80vw;
    max-width: 650px;
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
    :focus {outline: none;}
  }

  .container-join-btn {
    width: 221px;
    height: 68px;
    background: ${(props) => props.theme.colors.primary9};
    box-shadow: ${(props) => props.theme.shadows.inset};
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.primary9};
    padding: 10px;
    transition: all .2s ease;
    :hover {
      border: 1px solid ${(props) => props.theme.colors.black};
      box-shadow:  ${(props) => props.theme.shadows.inset2};
    }
  }

  .btn-join {
    display: flex;
    justify-content: center;
    
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

    position: relative;
   
    
  }

  .text {
    margin-left: 10px;
  }

  @media screen and (min-width: 768px) {
    
    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }
  }

   
`;
