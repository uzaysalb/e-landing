
// components/FAQ.jsx
import { useState } from "react";

export default function Accordion() {
  const items = [
    { q: "Bu ürün nasıl çalışıyor?", a: "Kurulumdan sonra anında kullanmaya başlayabilirsiniz." },
    { q: "İade politikası var mı?", a: "30 gün içinde koşulsuz iade." },
    { q: "Destek sağlıyor musunuz?", a: "7/24 canlı destek mevcut." }
  ];

  const [open, setOpen] = useState(null);

  return (
    <section style={{ padding: "60px 20px" }}>
      <h2>Sık Sorulan Sorular</h2>

      {items.map((item, index) => (
        <div key={index} style={{
          borderBottom: "1px solid #ccc",
          padding: "10px 0"
        }}>
          <div
            onClick={() => setOpen(open === index ? null : index)}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            {item.q}
          </div>

          {open === index && (
            <p style={{ marginTop: "8px" }}>{item.a}</p>
          )}
        </div>
      ))}
    </section>
  );
}
