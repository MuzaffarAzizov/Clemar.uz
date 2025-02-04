import React from "react";
import "./Machine.scss";
import Machine1 from "/assets/Machine1.jpg";
import Machine2 from "/assets/Machine2.jpg";
import Machine3 from "/assets/Machine3.jpg";
import Machine4 from "/assets/Machine4.jpg";

const Machine = () => {
  return (
    <section className="machine-products">
      <div className="machine-products__header">
        <h2 className="machine-products__heading">Поломоечные машины</h2>
        <a href="#" className="machine-products__link">
          Смотреть все
        </a>
      </div>
      <div className="machine-products__grid">
        <div className="machine-products__card">
          <img
            src={Machine1}
            alt="T55/50B"
            className="machine-products__image"
          />
          <h3 className="machine-products__title">T55/50B</h3>
          <p className="machine-products__category">Поломоечные машины</p>
          <button className="machine-products__button">Подробнее</button>
        </div>
        <div className="machine-products__card">
          <img
            src={Machine2}
            alt="T55/50B"
            className="machine-products__image"
          />
          <h3 className="machine-products__title">T55/50B</h3>
          <p className="machine-products__category">Поломоечные машины</p>
          <button className="machine-products__button">Подробнее</button>
        </div>
        <div className="machine-products__card">
          <img
            src={Machine3}
            alt="T55/50B"
            className="machine-products__image"
          />
          <h3 className="machine-products__title">T55/50B</h3>
          <p className="machine-products__category">Поломоечные машины</p>
          <button className="machine-products__button">Подробнее</button>
        </div>
        <div className="machine-products__card">
          <img
            src={Machine4}
            alt="T55/50B"
            className="machine-products__image"
          />
          <h3 className="machine-products__title">T55/50B</h3>
          <p className="machine-products__category">Поломоечные машины</p>
          <button className="machine-products__button">Подробнее</button>
        </div>
      </div>
    </section>
  );
};

export default Machine;
