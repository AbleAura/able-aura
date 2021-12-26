import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const items = [
  {
    title: "Services",
    text: "Healthcare, sports, travel, education and many more, everything you need, want or hope for.",
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
    text: "Buy, Sell or Repair accessible devices. Products that make your life easier than ever before.",
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

export default items;
