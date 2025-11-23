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
    <nav className="header-section" aria-label="Ana navigasyon">
      <div className="header-section__container">
        <div className="header-section__logo">
          <img src={logo} className="header-section__logo__img" alt="Logo" loading="lazy" />
        </div>

        <div className="header-section__extras">
          {/* Hamburger */}
          <button
            className={`header-section__hamburger ${open ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Menüyü Aç/Kapat"
            aria-expanded={open}
            aria-controls="main-menu"
            tabIndex={0}           // Klavye erişimi
          >
            {!open ? (
              <i className="bi bi-list header-section__hamburger__icon"></i>
            ) : (
              <i className="bi bi-x-lg header-section__hamburger__icon"></i>
            )}
          </button>

          {/* Menü */}
          <ul
            id="main-menu"
            className={`header-section__links ${open ? "active" : ""}`}
            role="menubar"
          >
            {[
              { href: "#hero", label: "Ana Sayfa" },
              { href: "#features", label: "Özellikler" },
              { href: "#pricing", label: "Fiyatlar" },
              { href: "#faq", label: "SSS" },
              { href: "#contact", label: "İletişim" },
            ].map((item, idx) => (
              <li key={idx} role="none">
                <a
                  href={item.href}
                  className="header-section__links__title"
                  role="menuitem"
                  tabIndex={0}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Tema Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Tema değiştir: ${theme === "light" ? "Karanlık mod" : "Açık mod"}`}
            tabIndex={0}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}
