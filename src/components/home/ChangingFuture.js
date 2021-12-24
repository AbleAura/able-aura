import React from "react";
import styled from "styled-components";

const items = [
  {
    title: "Services",
    text: "Healthcare, sports, travel, education and many more, everrything you need, want of hope for.",
  },
  {
    title: "Products",
    text: "Buy, Sell of Repair accessible devices. Products that make your life easier than ever before.",
  },
  {
    title: "Community",
    text: "Learn how to break barriers, get tips from high achievers, access information on life essentials.",
  },
];
const ChangingFuture = () => {
  return (
    <Wrapper>
      <h2>CHANGING THE FUTURE, NOW</h2>
      <div class="blocks">
        {items.map((item, index) => {
          return (
            <div key={index} className="block">
              <div className="image">Image</div>
              <h4 className="title">{item.title}</h4>
              <p className="text">{item.text}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ChangingFuture;

const Wrapper = styled.div`
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
    border: 1px solid ${(props) => props.theme.colors.grey};
    border-radius: 6px;
    padding: 2rem;
    box-shadow: ${(props) => props.theme.shadows.primary};
    margin-bottom: 20px;
  }
  p {
    color: ${(props) => props.theme.colors.black};
  }
  .image {
    margin-bottom: 1rem;
  }
  .title {
    margin-bottom: 1rem;
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
