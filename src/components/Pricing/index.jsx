import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../style/pricing.scss";

function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 400, 
      easing: "ease-in-out",
      once: true,    
    });
  }, []);

  const plans = [
    { name: "Basic", price: "₺99", features: ["1 kullanıcı", "Standart destek"] },
    { name: "Pro", price: "₺199", features: ["5 kullanıcı", "Hızlı destek"] },
    { name: "Enterprise", price: "₺499", features: ["Sınırsız", "Özel destek"] },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-section__top" data-aos="fade-up">
        <h2 className="pricing-section__title">Fiyatlandırma</h2>
      </div>

      <div className="pricing-section__table">
        {plans.map((p, i) => (
          <div
            className="pricing-section__item"
            key={i}
            data-aos="zoom-in"        // 🍀 buraya efekt verildi
            data-aos-delay={i * 150}  // her kutu biraz gecikmeli
          >
            <h3 className="pricing-section__item__title">{p.name}</h3>
            <p className="pricing-section__item__price">{p.price}</p>
            <ul className="pricing-section__item__info">
              {p.features.map((f, i2) => (
                <li className="pricing-section__item__txt" key={i2}>
                  {f}
                </li>
              ))}
            </ul>
            <button className="pricing-section__item__btn">Satın Al</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
