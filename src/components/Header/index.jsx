import React, { useState, useEffect } from "react";
import "../../style/header.scss";
import logo from "../../../src/assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => setOpen(!open);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle("dark-mode", newTheme === "dark");
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);

    document.documentElement.classList.toggle("dark-mode", saved === "dark");
  }, []);

  return (
    <nav className="header-section">
      <div className="header-section__container">
        <div className="header-section__logo">
          <img src={logo} className="header-section__logo__img" loading="lazy" />
        </div>

      <div className="header-section__extras">
         {/* Hamburger */}
        <button
          className={`header-section__hamburger ${open ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menüyü Aç/Kapat"
          aria-expanded={open}
        >
          {!open ? (
            <i className="bi bi-list header-section__hamburger__icon"></i>
          ) : (
            <i className="bi bi-x-lg header-section__hamburger__icon"></i>
          )}
        </button>

           {/* Menü */}
        <ul className={`header-section__links ${open ? "active" : ""}`}>
          <li><a href="#hero" className="header-section__links__title">Ana Sayfa</a></li>
          <li><a href="#features" className="header-section__links__title">Özellikler</a></li>
          <li><a href="#pricing" className="header-section__links__title">Fiyatlar</a></li>
          <li><a href="#faq" className="header-section__links__title">SSS</a></li>
          <li><a href="#contact" className="header-section__links__title">İletişim</a></li>
        </ul>
        
              {/* Tema Toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
  </div>
      </div>
    </nav>
  );
}
