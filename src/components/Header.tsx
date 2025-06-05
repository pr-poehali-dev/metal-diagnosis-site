import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-slate-800 text-slate-300 py-6">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-2xl lg:text-3xl font-bold text-blue-300 mb-4 font-montserrat">
          ООО «Диагностика металлических конструкций»
        </h1>
        <nav className="flex flex-wrap justify-center gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-blue-300 hover:underline font-medium transition-colors duration-300 hover:text-blue-200"
          >
            О проекте
          </button>
          <button
            onClick={() => scrollToSection("tech")}
            className="text-blue-300 hover:underline font-medium transition-colors duration-300 hover:text-blue-200"
          >
            Технические характеристики
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-blue-300 hover:underline font-medium transition-colors duration-300 hover:text-blue-200"
          >
            Контакты
          </button>
          <button
            onClick={() => scrollToSection("form")}
            className="text-blue-300 hover:underline font-medium transition-colors duration-300 hover:text-blue-200"
          >
            Заявка
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
