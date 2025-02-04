import React, { useState, useRef } from "react";
import "./Carousel.scss";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const imagesPerRow = 4; 
  const totalImages = images.length;
  const totalDots = Math.ceil(totalImages / imagesPerRow);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    const scrollPosition = index * carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel">
      <div className="carousel__track" ref={carouselRef}>
        {images.map((image, index) => (
          <img
            key={index}
            className="carousel__image"
            src={image}
            alt={`brand ${index}`}
          />
        ))}
      </div>

      <div className="carousel__dots">
        {Array.from({ length: totalDots }).map((_, index) => (
          <div
            key={index}
            className={`carousel__dot ${
              index === activeIndex ? "carousel__dot--active" : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
