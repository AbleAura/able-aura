import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import items from "../../constants/home/ChanginFutureItems";
import InviteFriends from "../signin/InviteFriends";

const ChangingFuture = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <h2>CHANGING THE FUTURE, NOW</h2>

          <div className="blocks">
            {items.map((item, index) => {
              return (
                <div key={index} className="block">
                  <div className="block-body">
                    <div className="image-container">{item.image}</div>
                    <h3 className="title">{item.title}</h3>
                    <p className="text">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
      <InviteFriends />
    </>
  );
};

export default ChangingFuture;

const Wrapper = styled.section`
  padding: 2rem 0;

  h2 {
    text-align: center;
  }
  .blocks {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
  .block {
    border: 0.0625rem solid ${(props) => props.theme.colors.grey};
    border-radius: 0.55rem;
    box-shadow: ${(props) => props.theme.shadows.soft};
    margin-bottom: 1.5rem;
    transition: all 0.3s;
    background-color: ${(props) => props.theme.colors.primary11};
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border-radius: 0.55rem;

    :hover {
      box-shadow: ${(props) => props.theme.shadows.dark};
    }
  }
  .block-body {
    padding: 1.5rem;
    flex: 1 1 auto;
  }
  p {
    color: ${(props) => props.theme.colors.black};
    margin: 0;
  }
  .image-container {
    border-radius: 50%;
    padding: 20px;
    margin-bottom: 1.5rem;
    width: 5.5rem;
    height: 5.5rem;
    box-sizing: border-box;
    box-shadow: ${(props) => props.theme.shadows.inset};
  }

  .title {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
  @media screen and (min-width: 768px) {
    .blocks {
      flex-direction: row;
    }
    .block {
      margin-right: 20px;
      margin-bottom: 0;
    }
  }
`;
