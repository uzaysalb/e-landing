import React from 'react';
import '../../style/features.scss';

function index() {
    const data = [
    { title: "Hızlı Kurulum", text: "Dakikalar içinde başlayın." },
    { title: "Güvenli", text: "Tüm verileriniz koruma altında." },
    { title: "7/24 Destek", text: "Her zaman yanınızdayız." },
  ];
  return (
       <section className="features-section">
      <div className="features-section__top">
        <h2 className='features-section__title'>Özellikler</h2>
      </div>
      <div className='features-section__table'>
        {data.map((f, i) => (
          <div className='features-section__table__item' key={i}>
            <h3 className='features-section__table__title'>{f.title}</h3>
            <p className='features-section__table__desc'>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default index
