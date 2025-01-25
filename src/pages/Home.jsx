import React from "react";
import Carousel from "../components/Carousel";

const Home = () => {
  const images = [
    "/assets/brand1.png",
    "/assets/brand2.png",
    "/assets/brand3.webp",
    "/assets/brand4.png",
    "/assets/brand5.png",
    "/assets/brand6.png",
    "/assets/brand7.png",
    "/assets/brand8.png",
    "/assets/brand9.jpeg",
    "/assets/brand10.png",
    "/assets/brand11.png",
    "/assets/brand12.png",
    "/assets/brand13.png",
    "/assets/brand14.png",
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
};

export default Home;
