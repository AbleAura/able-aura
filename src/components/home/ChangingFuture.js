import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const ChangingFuture = () => {
  return (
    <Wrapper>
      <h2>CHANGING THE FUTURE, NOW</h2>
      <div class="blocks">
        {items.map((item, index) => {
          return (
            <div key={index} className="block">
              <div className="image-container">{item.image}</div>
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
    box-shadow: ${(props) => props.theme.shadows.soft};
    margin-bottom: 20px;
    transition: all 0.3s;
    :hover {
      transform: translateY(-1.5rem) scale(1.03);
      box-shadow: ${(props) => props.theme.shadows.dark};
    }
  }
  p {
    color: ${(props) => props.theme.colors.black};
  }
  .image-container {
    border-radius: 50%;
    padding: 20px;
    margin-bottom: 1.5rem;
    width: 90px;
    height: 90px;
    box-sizing: border-box;
    box-shadow: ${(props) => props.theme.shadows.inset};
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

const items = [
  {
    title: "Services",
    text: "Healthcare, sports, travel, education and many more, everrything you need, want of hope for.",
    image: (
      <StaticImage
        src="../../assets/images/service.png"
        alt="service"
        layout="constrained"
        className="image"
      />
    ),
  },
  {
    title: "Products",
    text: "Buy, Sell of Repair accessible devices. Products that make your life easier than ever before.",
    image: (
      <StaticImage
        src="../../assets/images/product.png"
        alt="product"
        layout="constrained"
        className="image"
      />
    ),
  },
  {
    title: "Community",
    text: "Learn how to break barriers, get tips from high achievers, access information on life essentials.",
    image: (
      <StaticImage
        src="../../assets/images/community.png"
        alt="community"
        layout="constrained"
        className="image"
      />
    ),
  },
];
