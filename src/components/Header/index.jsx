import React, { useState } from "react";
import "../../style/header.scss";
import logo from "../../../src/assets/images/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="header-section">
      <div className="header-section__container">
        <div className="header-section__logo">
          <img src={logo} className="header-section__logo__img" />
        </div>

        {/* Hamburger */}
        <button
          className={`header-section__hamburger ${open ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menüyü Aç/Kapat"
          aria-expanded={open}
        >
          {!open ? (
            <i className="bi bi-list header-section__hamburger__icon"></i>   // Menü kapalı → hamburger icon
          ) : (
            <i className="bi bi-x-lg header-section__hamburger__icon"></i>   // Menü açık → X icon
          )}
        </button>

        {/* Menü */}
        <ul className={`header-section__links ${open ? "active" : ""}`}>
          <li className="header-section__links__item"><a href="#hero" className="header-section__links__title">Ana Sayfa</a></li>
          <li className="header-section__links__item"><a href="#features" className="header-section__links__title">Özellikler</a></li>
          <li className="header-section__links__item"><a href="#pricing" className="header-section__links__title">Fiyatlar</a></li>
          <li className="header-section__links__item"><a href="#faq" className="header-section__links__title">SSS</a></li>
          <li className="header-section__links__item"><a href="#contact" className="header-section__links__title">İletişim</a></li>
        </ul>
      </div>
    </nav>
  );
}
