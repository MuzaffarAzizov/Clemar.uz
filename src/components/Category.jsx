import React from "react";
import "./Category.scss";
import Category1 from "/assets/Category1.png";
import Category2 from "/assets/Category2.png";
import Category3 from "/assets/Category3.png";
import Category4 from "/assets/Category4.png";
import Category5 from "/assets/Category5.png";

const Category = () => {
  return (
    <section className="category">
      <div className="category__header">
        <h2 className="category__heading">Категории​</h2>
        <a href="#" className="category__link">
          Смотреть все
        </a>
      </div>
      <div className="category__grid">
        <div className="category__card">
          <img
            src={Category1}
            alt="Selpak Professional Extra"
            className="category__image"
          />
          <p className="category__text">Бумажная продукция</p>
        </div>
        <div className="category__card">
          <img
            src={Category2}
            alt="Sens Туалетная бумага"
            className="category__image"
          />
          <p className="category__text">Бумажная продукция</p>
        </div>
        <div className="category__card">
          <img
            src={Category3}
            alt="Solo Professional"
            className="category__image"
          />
          <p className="category__text">Бумажная продукция</p>
        </div>
        <div className="category__card">
          <img
            src={Category4}
            alt="Selpak Professional Extra Туалетная бумага"
            className="category__image"
          />
          <p className="category__text">Бумажная продукция</p>
        </div>
        <div className="category__card">
          <img
            src={Category5}
            alt="Selpak Professional Extra Туалетная бумага"
            className="category__image"
          />
          <p className="category__text">Бумажная продукция</p>
        </div>
      </div>
    </section>
  );
};

export default Category;
