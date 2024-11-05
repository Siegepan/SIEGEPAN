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
        "O evento acontecerá dos dias 5 a 7 de dezembro, no auditório do Instituto de Computação (IC) no período matutino e na Faculdade de Enfermagem (FAEN) no período vespertino.",
      icon: grupo,
    },
    {
      question: "Como realizo minha inscrição?",
      answer:
        'Você pode realizar a sua inscrição através da plataforma Even3 pelo link <a href="https://www.even3.com.br/siegepan/" target="_blank" rel="noopener noreferrer"> https://www.even3.com.br/siegepan/ </a>',
      icon: register,
    },
    {
      question: "Haverá emissão de certificado para os participantes?",
      answer: "Sim, haverá emissão de certificado para os participantes.",
      icon: certificado,
    },
    {
      question: "A participação é gratuita?",
      answer: "Sim, a participação é totalmente gratuita.",
      icon: money,
    },
    {
      question: "Onde posso submeter meu trabalho?",
      answer:
        'Você pode submeter o seu trabalho no período de 17/10 até 13/11 através do formulário <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIFme2jz5GZji-NNNe4nukNzWRHc636_9i7kdrn0b4ZMcUJA/viewform" target="_blank" rel="noopener noreferrer">siegepan/forms.com.br</a>',
      icon: grafico,
    },
    {
      question: "Como consigo entrar em contato com a organização?",
      answer:
        "Você pode nos contatar através de nossa rede social <a href='https://www.instagram.com/siegepan/' target='_blank' rel='noopener noreferrer'>instagram.com/siegepan/</a> estaremos prontos para sanar suas dúvidas.",
      icon: phone,
    },
  ];

  return (
    <div className="h-full p-14 bg-bg pt-36">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center mb-4">
          <img
            src={planta}
            alt="Planta"
            style={{ width: "48px", height: "48px", marginRight: "8px" }}
          />
          <h2 className="text-largetitle font-semibold">
            Perguntas Frequentes
          </h2>
        </div>
        <p className="mb-8 text-lg max-w-">
          Precisa de informações? Encontre sua resposta sobre os detalhes do
          evento aqui!
          <br />
          Caso possua mais dúvidas, envie uma mensagem, estaremos prontos para
          ajudar!
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
                <div
                  className="p-4"
                  dangerouslySetInnerHTML={{
                    __html: item.answer || "Resposta em breve!",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
