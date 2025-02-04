import React, { useState } from "react";
import "./Header.scss";
import carousel1 from "/assets/carousel1.webp";
import carousel2 from "/assets/carousel2.webp";

const slides = [
  {
    image: carousel1,
    title: "Поломоечные машины",
    description: "Более 60 моделей в каталоге: Comac, Clemar, Tvx",
    buttonText: "В каталог",
  },
  {
    image: carousel2,
    title: "Всё для уборки и клининга",
    description:
      "Уборочный инвентарь из материалов высокого качества для комфортного клининга",
    buttonText: "В каталог",
  },
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="header__carousel-container">
      <button
        className="carousel__button carousel__button--left"
        onClick={prevSlide}
      >
        ❮
      </button>

      <div className="header__carousel">
        <div
          className="header__carousel-item"
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        >
          <div className="header__carousel-content">
            <h2>{slides[currentIndex].title}</h2>
            <p>{slides[currentIndex].description}</p>
            <button className="header__carousel-button">
              {slides[currentIndex].buttonText}
            </button>
          </div>
        </div>
      </div>

      <button
        className="carousel__button carousel__button--right"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default Header;
