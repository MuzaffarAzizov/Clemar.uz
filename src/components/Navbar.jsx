import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import logo from "/assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="Logo" className="navbar__logo" />
        <div className="navbar__menu">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="navbar__menu-button"
          >
            <span>Каталог</span>
          </button>
          {menuOpen && (
            <div className="navbar__dropdown">
              <ul>
                <li>Бумажная продукция</li>
                <li>Моющие средства</li>
                <li>Подметальные машины</li>
                <li>Поломоечные машины</li>
                <li>Пылесосы</li>
                <li>Уборочные инвентарь</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="navbar__right">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faBagShopping} />
        <div className="navbar__info">
          <span>Режим работы:</span>
          <span>Пн-Пт с 9:00 до 18:00</span>
        </div>
        <button className="navbar__button">
          <span>Отдел продаж</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
