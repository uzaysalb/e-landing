import React, { useState } from "react";
import '../../style/contact.scss';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ad alanı boş olamaz";
    if (!formData.email.trim()) newErrors.email = "E-posta alanı boş olamaz";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Geçerli bir e-posta girin";
    if (!formData.message.trim()) newErrors.message = "Mesaj alanı boş olamaz";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form verileri:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000); 
  };

  return (
    <div className="contact-section">
        <div className="contact-section__top">
      <h2 className="contact-section__title">İletişim Formu</h2>
        </div>
      <form className="contact-section__form" onSubmit={handleSubmit} noValidate>
        <div className="contact-section__form__item">
          <label className="contact-section__form__key">Ad:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Adınızı girin"
            className="contact-section__form__value"
          />
          {errors.name && <span className="contact-section__form__error">{errors.name}</span>}
        </div>

        <div className="contact-section__form__item">
          <label className="contact-section__form__key">E-posta:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-posta adresiniz"
            className="contact-section__form__value"
          />
          {errors.email && <span className="contact-section__form__error">{errors.email}</span>}
        </div>

        <div className="contact-section__form__item">
          <label className="contact-section__form__key">Mesaj:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mesajınızı yazın"
            className="contact-section__form__value"
          />
          {errors.message && <span className="contact-section__form__error">{errors.message}</span>}
        </div>

        <button className="contact-section__form__btn" type="submit">Gönder</button>
        {submitted && <p className="contact-section__form__success">Form başarıyla gönderildi!</p>}
      </form>
    </div>
  );
}
