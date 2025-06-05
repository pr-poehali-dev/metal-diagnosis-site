import React from "react";
import Icon from "@/components/ui/icon";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: "Building",
      label: "Компания",
      value: "ООО «ДМК»",
    },
    {
      icon: "MapPin",
      label: "Адрес",
      value:
        "603079, Нижегородская область, г. Нижний Новгород, Московское шоссе, д. 81, кв. 26.",
    },
    {
      icon: "Mail",
      label: "Email",
      value: "solovev.aa@nntu.ru",
      isLink: true,
    },
    {
      icon: "Phone",
      label: "Телефон",
      value: "+7 951 912-23-36",
      isLink: true,
    },
    {
      icon: "Clock",
      label: "График работы",
      value: "понедельник – пятница, 9:00 – 17:00",
    },
  ];

  const socialLinks = [
    {
      icon: "MessageCircle",
      name: "Telegram",
      url: "https://t.me/alexteory",
    },
    {
      icon: "Users",
      name: "VK",
      url: "https://vk.com/alexteory",
    },
  ];

  return (
    <section id="contact" className="mb-12">
      <h2 className="text-3xl font-bold text-slate-700 border-b-2 border-blue-300 pb-2 mb-6 font-montserrat">
        Контактная информация
      </h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors duration-300"
            >
              <Icon
                name={detail.icon}
                className="text-blue-500 mt-1 flex-shrink-0"
                size={20}
              />
              <div>
                <div className="font-semibold text-slate-700 text-sm mb-1">
                  {detail.label}
                </div>
                {detail.isLink ? (
                  <a
                    href={
                      detail.label === "Email"
                        ? `mailto:${detail.value}`
                        : `tel:${detail.value.replace(/\s/g, "")}`
                    }
                    className="text-slate-600 hover:text-blue-500 transition-colors duration-300"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <div className="text-slate-600">{detail.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-6">
          <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
            <Icon name="Share2" size={18} className="text-blue-500" />
            Социальные сети
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors duration-300 font-medium"
              >
                <Icon name={link.icon} size={18} className="text-blue-500" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
