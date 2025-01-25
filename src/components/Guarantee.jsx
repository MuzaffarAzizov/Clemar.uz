import React from "react";
import "./Guarantee.scss";
import trust1 from "/assets/trust1.svg";
import trust2 from "/assets/trust2.svg";
import trust3 from "/assets/trust4.svg";
import trust4 from "/assets/trust3.svg";

const Guarantee = () => {
  return (
    <section class="trust">
      <h2>Нам доверяют</h2>
      <div class="trust__columns">
        <div class="trust__column">
          <img src={trust1} alt="Безопасная оплата" />
          <h3>Безопасная оплата</h3>
          <p>100% безопасная оплата</p>
        </div>
        <div class="trust__column">
          <img src={trust2} alt="Возврат в течение 30 дней" />
          <h3>Возврат в течение 30 дней</h3>
          <p>Если у товара есть проблемы</p>
        </div>
        <div class="trust__column">
          <img src={trust3} alt="Бесплатная доставка" />
          <h3>Бесплатная доставка</h3>
          <p>Для всех заказов</p>
        </div>
        <div class="trust__column">
          <img src={trust4} alt="Поддержка 24/7" />
          <h3>Поддержка 24/7</h3>
          <p>Круглосуточная поддержка</p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
