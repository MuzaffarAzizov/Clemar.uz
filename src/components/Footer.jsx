import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column footer__column--wide">
        <img
          src="/assets/logo1.png"
          alt="Clemar Logo"
          className="footer__logo"
        />
        <p className="footer__description">
          Clemar – Представляем лучшие мировые бренды в Узбекистане
        </p>
      </div>
      <div className="footer__column">
        <ul className="footer__list">
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">My Wishlist</a>
          </li>
          <li>
            <a href="#">My Cart</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#">Check Out</a>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <h4 className="footer__heading">Contact Us</h4>
        <p>Phone: (+63) 555 1212</p>
        <p>Fax: (+63) 555 0100</p>
        <p>New York,</p>
        <p>96th Street, NY 10129</p>
      </div>
    </footer>
  );
};

export default Footer;
