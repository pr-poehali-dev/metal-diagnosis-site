import React from "react";
import Icon from "@/components/ui/icon";

const About = () => {
  const advantages = [
    {
      icon: "CheckCircle",
      text: "Высокая достоверность оценки степени водородного охрупчивания",
    },
    {
      icon: "Clock",
      text: "Оценка в реальном времени на реальной конструкции",
    },
    {
      icon: "User",
      text: "Процесс контроля доступен одному обученному специалисту",
    },
    {
      icon: "Shield",
      text: "Безопасность для оператора",
    },
  ];

  return (
    <section id="about" className="mb-12">
      <h2 className="text-3xl font-bold text-slate-700 border-b-2 border-blue-300 pb-2 mb-6 font-montserrat">
        О проекте
      </h2>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          Аппаратно-программный комплекс применяется для контроля степени
          наводороживания титановых конструкций и может быть применен в атомной
          промышленности, химическом машиностроении, судостроении и др.
        </p>

        <h3 className="text-xl font-semibold text-slate-700 mb-4 font-montserrat">
          Преимущества:
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300"
            >
              <Icon
                name={advantage.icon}
                className="text-blue-500 mt-1 flex-shrink-0"
                size={20}
              />
              <p className="text-slate-700">{advantage.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-slate-700 mb-4 font-montserrat text-center">
          Проект поддержан:
        </h3>
        <div className="flex justify-center items-center">
          <img
            src="https://cdn.poehali.dev/files/90bc1c88-9a11-45cf-bb2a-d5b64cf03bcc.png"
            alt="Фонд содействия инновациям"
            className="h-20 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
