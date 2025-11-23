import React from 'react';
import '../../style/features.scss';

function Features() {
  const data = [
    { title: "Hızlı Kurulum", text: "Dakikalar içinde başlayın." },
    { title: "Güvenli", text: "Tüm verileriniz koruma altında." },
    { title: "7/24 Destek", text: "Her zaman yanınızdayız." },
  ];

  return (
    <section className="features-section" aria-labelledby="features-title">
      <div className="features-section__top">
        <h2 id="features-title" className='features-section__title'>Özellikler</h2>
      </div>
      <div className='features-section__table'>
        {data.map((f, i) => (
          <div
            className='features-section__table__item'
            key={i}
            role="region"                       
            tabIndex={0}                  
            aria-label={f.title}           
          >
            <h3 className='features-section__table__title'>{f.title}</h3>
            <p className='features-section__table__desc'>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features;
