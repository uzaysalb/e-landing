import { useState } from "react";
import '../../style/accordion.scss';

export default function Accordion() {
  const items = [
    { q: "Bu ürün nasıl çalışıyor?", a: "Kurulumdan sonra anında kullanmaya başlayabilirsiniz." },
    { q: "İade politikası var mı?", a: "30 gün içinde koşulsuz iade." },
    { q: "Destek sağlıyor musunuz?", a: "7/24 canlı destek mevcut." }
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="accordion-section">
      <div className="accordion-section__top">
      <h2 className="accordion-section__title">Sık Sorulan Sorular</h2>
      </div>
      {items.map((item, index) => (
        <div className="accordion-section__table" key={index}>
          <div
            onClick={() => setOpen(open === index ? null : index)}
            className="accordion-section__item"
          >
            {item.q}
          </div>

          {open === index && (
            <p className="accordion-section__desc">{item.a}</p>
          )}
        </div>
      ))}
    </section>
  );
}
