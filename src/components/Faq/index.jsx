import React, { useState } from "react";
import plusIcon from "/src/assets/mais-sobre.svg";
import minusIcon from "/src/assets/menos-sobre.svg";
import grupo from "/src/assets/group.svg";
import register from "/src/assets/registerfaq.svg";
import certificado from "/src/assets/certicatefaq.svg";
import money from "/src/assets/moneyfaq.svg";
import grafico from "/src/assets/presentationfaq.svg";
import phone from "/src/assets/phonefaq.svg";
import planta from "/src/assets/plantafaq.png";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Quando e onde acontecerá o evento?",
      answer:
        "O evento acontecerá dos dias 5 a 7 de dezembro, no auditório do Instituto de Computação (IC).",
      icon: grupo,
    },
    { question: "Como realizo minha inscrição?", answer: "", icon: register },
    {
      question: "Haverá emissão de certificado para os participantes?",
      answer: "",
      icon: certificado,
    },
    { question: "A participação é gratuita?", answer: "", icon: money },
    {
      question: "Onde posso submeter meu trabalho?",
      answer: "",
      icon: grafico,
    },
    {
      question: "Como consigo entrar em contato com a organização?",
      answer: "",
      icon: phone,
    },
  ];

  return (
    <div className="h-full p-14 bg-bg">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center mb-4">
          <img
            src={planta}
            alt="Planta"
            style={{ width: "48px", height: "48px", marginRight: "8px" }}
          />
          <h2 className="text-2xl font-bold">Perguntas Frequentes</h2>
        </div>
        <p className="mb-8">
          Precisa de informações? Encontre sua resposta sobre os detalhes do
          evento aqui! Caso possua mais dúvidas, envie uma mensagem, estaremos
          prontos para ajudar!
        </p>
        <div className="space-y-4 p-4">
          {faqItems.map((item, index) => (
            <div key={index}>
              <button
                className="flex items-center justify-between w-full py-3 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center">
                  <img
                    src={item.icon}
                    alt="Ícone"
                    style={{
                      width: "32px",
                      height: "32px",
                      marginRight: "12px",
                    }}
                  />
                  <span className="font-medium text-gray-900">
                    {item.question}
                  </span>
                </div>
                <img
                  src={activeIndex === index ? minusIcon : plusIcon}
                  alt={activeIndex === index ? "Collapse icon" : "Expand icon"}
                  style={{
                    width: "24px",
                    height: "24px",
                    filter:
                      "invert(40%) sepia(100%) saturate(300%) hue-rotate(180deg)",
                  }}
                />
              </button>
              {activeIndex === index && (
                <div className="p-4">
                  {item.answer ? item.answer : "Resposta em breve!"}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
