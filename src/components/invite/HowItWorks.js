import React from "react";
import styled from "styled-components";

const HowItWorks = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3>HERE IS HOW IT WORKS</h3>
        <div className="friends steps mb-2">
          <div>FRIENDS JOINED</div>
          <div className="step rounded-circle">
            <div className="in-circle rounded-circle">1</div>
          </div>
          <div className="step rounded-circle">
            <div className="in-circle rounded-circle">2</div>
          </div>
          <div className="step rounded-circle">
            <div className="in-circle rounded-circle">3</div>
          </div>
          <div className="step rounded-circle">
            <div className="in-circle rounded-circle">4</div>
          </div>
        </div>
        <div className="gray-line" />
        <div className="black-line" />
        <div className="gifts steps mt-2">
          <div>HARRY'S PRODUCT</div>
          <div>Gift One</div>
          <div>Gift Two</div>
          <div>Gift Three</div>
          <div>Gift Four</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HowItWorks;

const Wrapper = styled.section`
  padding: 2rem 0;
  text-align: center;
  .friends {
  }
  .steps {
    display: flex;
    justify-content: space-around;
  }

  .step {
    width: 59px;
    height: 59px;
    background: #f3f3f5;
    box-shadow: -1px -10px 14px -6px #ffffff,
      5px 10px 12px -5px rgba(0, 0, 0, 0.19);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .in-circle {
    width: 47px;
    height: 47px;

    background: #ffffff;
    box-shadow: inset -1px -10px 14px -6px #ffffff,
      inset 5px 10px 12px -5px rgba(0, 0, 0, 0.19);

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .border {
  }
  .border-light {
    width: 59px;
    height: 59px;
    text-align: center;
    border-radius: 50%;
    border: 0.0625rem solid #fafbfe;
    border-color: ${(props) => props.theme.colors.gray400};
  }
  .black-line {
    width: 20%;
    border: 5px solid ${(props) => props.theme.colors.gray2};
    margin-top: -10px;
  }
  .gray-line {
    width: 100%;
    border: 5px solid ${(props) => props.theme.colors.primary5};
  }
`;
