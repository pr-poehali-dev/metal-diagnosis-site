import React, { useState } from "react";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Формируем mailto ссылку
    const subject = "Заявка с сайта ДМК";
    const body = `Имя: ${formData.name}\nEmail: ${formData.email}\nТелефон: ${formData.phone}`;
    const mailtoLink = `mailto:solovev.aa@nntu.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="form" className="mb-12">
      <h2 className="text-3xl font-bold text-slate-700 border-b-2 border-blue-300 pb-2 mb-6 font-montserrat text-center">
        Оставьте заявку для связи
      </h2>
      <div className="max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-50 p-6 rounded-lg shadow-lg border border-blue-200"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 font-semibold text-slate-700"
            >
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-slate-700"
            >
              Ваш Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block mb-2 font-semibold text-slate-700"
            >
              Ваш телефон
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-800 text-blue-300 py-3 px-6 rounded-md hover:bg-slate-700 transition-colors duration-300 font-medium flex items-center justify-center gap-2"
          >
            <Icon name="Send" size={18} />
            Отправить
          </button>

          <p className="text-xs text-slate-600 mt-4 text-center">
            Нажимая на кнопку, вы даете согласие на обработку своих персональных
            данных и соглашаетесь с политикой конфиденциальности.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
