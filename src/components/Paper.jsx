import React from "react";
import "./Paper.scss";
import paper1 from "/assets/paper1.jpg";
import paper2 from "/assets/paper2.jpg";
import paper3 from "/assets/paper3.jpg";
import paper4 from "/assets/paper4.jpg";

const Paper = () => {
  return (
    <section className="paper-products">
      <div className="paper-products__header">
        <h2 className="paper-products__heading">Бумажная продукция</h2>
        <a href="#" className="paper-products__link">
          Смотреть все
        </a>
      </div>
      <div className="paper-products__grid">
        <div className="paper-products__card">
          <img
            src={paper1}
            alt="Selpak Professional Extra"
            className="paper-products__image"
          />
          <h3 className="paper-products__title">
            Selpak Professional Extra Z-Сложенное полотенце для диспенсера
          </h3>
          <p className="paper-products__category">Бумажная продукция</p>
          <button className="paper-products__button">Подробнее</button>
        </div>
        <div className="paper-products__card">
          <img
            src={paper2}
            alt="Sens Туалетная бумага"
            className="paper-products__image"
          />
          <h3 className="paper-products__title">
            Sens Туалетная бумага 24 шт.
          </h3>
          <p className="paper-products__category">Бумажная продукция</p>
          <button className="paper-products__button">Подробнее</button>
        </div>
        <div className="paper-products__card">
          <img
            src={paper3}
            alt="Solo Professional"
            className="paper-products__image"
          />
          <h3 className="paper-products__title">
            Solo Professional 1/6 Складные салфетки Официант 26,5×33 см 100 шт.
          </h3>
          <p className="paper-products__category">Бумажная продукция</p>
          <button className="paper-products__button">Подробнее</button>
        </div>
        <div className="paper-products__card">
          <img
            src={paper4}
            alt="Selpak Professional Extra Туалетная бумага"
            className="paper-products__image"
          />
          <h3 className="paper-products__title">
            Selpak Professional Extra Туалетная бумага 24 шт.
          </h3>
          <p className="paper-products__category">Бумажная продукция</p>
          <button className="paper-products__button">Подробнее</button>
        </div>
      </div>
    </section>
  );
};

export default Paper;
