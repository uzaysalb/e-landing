import { useState } from "react";
import '../../style/accordion.scss';

export default function Accordion() {
  const items = [
    { q: "Bu ürün nasıl çalışıyor?", a: "Kurulumdan sonra anında kullanmaya başlayabilirsiniz." },
    { q: "İade politikası var mı?", a: "30 gün içinde koşulsuz iade." },
    { q: "Destek sağlıyor musunuz?", a: "7/24 canlı destek mevcut." }
  ];

  const [open, setOpen] = useState(null);

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(open === index ? null : index);
    }
  };

  return (
    <section className="accordion-section">
      <div className="accordion-section__top">
        <h2 className="accordion-section__title">Sık Sorulan Sorular</h2>
      </div>

      {items.map((item, index) => {
        const isOpen = open === index;
        const contentId = `accordion-content-${index}`;

        return (
          <div className="accordion-section__item" key={index}>
            <div
              className="accordion-section__item__title"
              tabIndex={0}                    
              role="button"                     
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpen(isOpen ? null : index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {item.q}
            </div>

            {isOpen && (
              <p
                id={contentId}
                className="accordion-section__item__desc"
              >
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </section>
  );
}
