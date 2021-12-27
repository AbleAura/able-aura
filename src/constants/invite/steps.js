import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const items = [
  {
    id: "1",
    text: "Gift one",
    image: (
      <StaticImage
        src="../../assets/images/Layer-1-1.png"
        alt="layer"
        layout="constrained"
        className="image-1"
      />
    ),
  },
  {
    id: "2",
    text: "Gift two",
    image: (
      <StaticImage
        src="../../assets/images/Layer-1-2.png"
        alt="layer"
        layout="constrained"
        className="image-2"
      />
    ),
  },
  {
    id: "3",
    text: "Gift three",
    image: (
      <StaticImage
        src="../../assets/images/Layer-1-3.png"
        alt="layer"
        layout="constrained"
        className="image-3"
      />
    ),
  },
  {
    id: "4",
    text: "Gift four",
    image: (
      <StaticImage
        src="../../assets/images/Layer-1-4.png"
        alt="layer"
        layout="constrained"
        className="image-4"
      />
    ),
  },
];

export default items;
