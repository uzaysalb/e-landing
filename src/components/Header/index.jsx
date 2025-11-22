import React, { useState } from "react";
import "../../style/header.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        
        <div className="logo">
          <a href="/">Enoca Landing</a>
        </div>

        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menüyü Aç/Kapat"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="#hero">Ana Sayfa</a></li>
          <li><a href="#features">Özellikler</a></li>
          <li><a href="#pricing">Fiyatlar</a></li>
          <li><a href="#faq">SSS</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>

      </div>
    </nav>
  );
}
