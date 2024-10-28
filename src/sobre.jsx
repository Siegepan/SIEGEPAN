import React, { useState } from 'react';
import iconhand from "./assets/hand-sobre.svg";
import nurse from "./assets/nurse-sobre.svg";
import mais from "./assets/mais-sobre.svg";
import menos from "./assets/menos-sobre.svg";
import imgsobre from "./assets/imgsobre.png";
import planta from "./assets/plantasobre.png";

function SobreSiegepan() {
    // Estado para controlar qual seção do accordion está expandida
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleAccordion = (section) => {
        setExpandedSection((prevSection) => (prevSection === section ? null : section));
    };

    return (
        <div className="flex flex-col items-center p-6">
            <div className="flex items-center mb-4">
                <img src={planta} alt="Planta" className="w-10 h-10 mr-2" />
                <h2 className="text-3xl font-bold">Um pouco mais sobre o SIEGEPAN</h2>
            </div>
            <p className="text-center mb-8">
                Que tal conhecer um pouco mais do evento? Entenda nossa missão e o papel da enfermagem na assistência obstétrica.
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Cards */}
                <div className="flex flex-col gap-6">
                    {/* Card 1 */}
                    <div className="flex flex-col items-start p-6 border-2 border-gray-200 rounded-lg w-full md:w-[500px]">
                        <img src={iconhand} alt="Ícone mão" className="w-10 h-10 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Missão</h3>
                        <p className="text-left mb-4">
                            Capacitar acadêmicos e trabalhadores de saúde para oferecer um cuidado integral e humanizado
                            {!expandedSection || expandedSection !== 'mission' ? "..." : ""}
                            {expandedSection === 'mission' && (
                                <> Nosso foco é promover habilidades e conhecimentos que permitam aos profissionais de saúde prestar uma assistência de qualidade, com ética e sensibilidade às necessidades dos pacientes.</>
                            )}
                        </p>
                        <button onClick={() => toggleAccordion('mission')} className="text-purple-500 flex items-center">
                            <img
                                src={expandedSection === 'mission' ? menos : mais}
                                alt={expandedSection === 'mission' ? "Ícone menos" : "Ícone mais"}
                                className="w-4 h-4 mr-1"
                                style={{ filter: "invert(32%) sepia(73%) saturate(5827%) hue-rotate(257deg) brightness(93%) contrast(95%)" }}
                            />
                            {expandedSection === 'mission' ? "Ler Menos" : "Ler Mais"}
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-start p-6 border-2 border-gray-200 rounded-lg w-full md:w-[500px]">
                        <img src={nurse} alt="Ícone enfermeira" className="w-10 h-10 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Papel da Enfermagem</h3>
                        <p className="text-left mb-4">
                            O evento destacará o papel do enfermeiro e equipe multiprofissional na assistência obstétrica
                            {!expandedSection || expandedSection !== 'role' ? "..." : ""}
                            {expandedSection === 'role' && (
                                <> A equipe de enfermagem terá um papel fundamental em garantir uma assistência contínua e segura, promovendo o bem-estar e a saúde da mãe e do bebê.</>
                            )}
                        </p>
                        <button onClick={() => toggleAccordion('role')} className="text-[#51ACD9] flex items-center">
                            <img
                                src={expandedSection === 'role' ? menos : mais}
                                alt={expandedSection === 'role' ? "Ícone menos" : "Ícone mais"}
                                className="w-4 h-4 mr-1"
                                style={{ filter: expandedSection === 'role' ? "invert(36%) sepia(61%) saturate(3182%) hue-rotate(174deg) brightness(92%) contrast(88%)" : "invert(36%) sepia(61%) saturate(3182%) hue-rotate(174deg) brightness(92%) contrast(88%)" }}
                            />

                            {expandedSection === 'role' ? "Ler Menos" : "Ler Mais"}
                        </button>
                    </div>
                </div>

                {/* Image */}
                <img src={imgsobre} alt="Imagem sobre o evento" className="w-full md:w-[450px] h-auto object-contain" />
            </div>
        </div>
    );
}

export default SobreSiegepan;
