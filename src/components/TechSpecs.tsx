import React from "react";
import Icon from "@/components/ui/icon";

const TechSpecs = () => {
  const specs = [
    { label: "Тип контроля", value: "Неразрушающий" },
    { label: "Материал", value: "Титановые сплавы" },
    {
      label: "Область применения",
      value: "Атомная, химическая, судостроительная промышленность",
    },
    { label: "Точность измерений", value: "Высокая достоверность" },
    { label: "Режим работы", value: "Реальное время" },
    { label: "Обслуживание", value: "Один оператор" },
  ];

  return (
    <section id="tech" className="mb-12">
      <h2 className="text-3xl font-bold text-slate-700 border-b-2 border-blue-300 pb-2 mb-6 font-montserrat">
        Технические характеристики
      </h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {specs.map((spec, index) => (
            <div key={index} className="border-l-4 border-blue-300 pl-4 py-2">
              <div className="font-semibold text-slate-700 mb-1">
                {spec.label}
              </div>
              <div className="text-slate-600">{spec.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-slate-50 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Icon name="Info" className="text-blue-500" size={20} />
            <h3 className="font-semibold text-slate-700">
              Дополнительная информация
            </h3>
          </div>
          <p className="text-slate-600">
            Комплекс обеспечивает высокоточную диагностику металлических
            конструкций с возможностью оценки степени водородного охрупчивания в
            режиме реального времени.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
