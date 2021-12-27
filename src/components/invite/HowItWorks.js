import React from "react";
import styled from "styled-components";
import steps from "../../constants/invite/steps";

const HowItWorks = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3>HERE IS HOW IT WORKS</h3>
        <div className="friends mb-2">
          <div className="friends-1">FRIENDS JOINED</div>
          <div className="friends-2 steps">
            {steps.map((item) => {
              return (
                <div key={item.id} className="item">
                  <div>
                    <div className="image-container">{item.image}</div>
                  </div>

                  <div className="step step-2 rounded-circle">
                    <div className="in-circle rounded-circle">{item.id}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="gray-line" />
        <div className="black-line" />

        <div className="friends steps mt-2">
          <div className="friends-1">HARRY'S PRODUCT</div>
          <div className="friends-2 steps">
            {steps.map((item) => {
              return <div key={item.text}>{item.text}</div>;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HowItWorks;

const Wrapper = styled.section`
  padding: 2rem 0;
  text-align: center;

  .image-container {
    border: 1px solid ${(props) => props.theme.colors.black};
    background: ${(props) => props.theme.colors.background1};
    width: 255px;
    padding: 20px;
    display: none;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 3s ease-in-out;
  }

  .item {
    position: relative;
  }
  .step:hover {
    border: 1px solid ${(props) => props.theme.colors.black};
  }
  .item:hover .image-container {
    display: block;
    top: -291px;
    left: -100px;
  }

  .friends {
    width: 100%;
    display: flex;
  }
  .friends-1 {
    width: 20%;
    align-self: flex-end;
  }
  .friends-2 {
    width: 80%;
  }
  .steps {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
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
