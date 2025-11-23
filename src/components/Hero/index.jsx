import React from "react";
import Bg from '../../../src/assets/images/bg2.png';
import '../../style/hero.scss';
import Features from "../Features";

export default function Hero() {
  return (
    <section id="hero" className="hero-container" aria-labelledby="hero-title">
      <div className="hero-container__top" role="region" tabIndex={0} aria-label="Hero Başlık ve Açıklama">
        <h2 id="hero-title" className="hero-container__title">Modern & Hesaplı</h2>
        <p className="hero-container__desc">
          Hızlı, güvenilir ve müşteri odaklı çözümünüz burada.
        </p>
      </div>

      <div className="hero-container__prd" role="region" tabIndex={0} aria-label="Ürün görsel ve açıklama">
        <div className="hero-container__prd__figure">
          <img src={Bg} alt="Ürün görseli" className="hero-container__prd__img" loading="lazy"/>
        </div>

        <div className="hero-container__prd__info" role="region" tabIndex={0} aria-label="Ürün başlığı ve kısa açıklama">
          <div className="hero-container__prd__top">
            <h1 className="hero-container__prd__title">Ürün Adı</h1>
            <p className="hero-container__prd__desc">
              Ürün kısa açıklama lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae at quisquam quas deleniti tempora perspiciatis ex?
            </p>
          </div>

          <Features />
        </div>
      </div>
    </section>
  );
}
