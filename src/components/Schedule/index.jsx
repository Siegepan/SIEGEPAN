import { useState } from "react";
import ScheduleCard from "./ScheduleCard";
import titleicon from "/src/assets/images/title-icon.svg";
import whitearrow from "/src/assets/images/prime_arrow-right-white.svg";
import KarolineMeloImage from "/src/assets/images/palestrantes/Minicursos/Dia 05-12/Karoline Melo.jpeg";
import AnaLuizaRabeloImage from "/src/assets/images/palestrantes/Minicursos/Dia 05-12/Ana Luiza Rabello da Silva.jpg";
import MayreneDiasImage from "/src/assets/images/palestrantes/Minicursos/Dia 05-12/Mayrene Dias de Sousa .jpg";
import YanaRossetoImage from "/src/assets/images/palestrantes/Minicursos/Dia 05-12/Yana Rossetto.jpg";
import MarcialFrancisGaleraImage from "/src/assets/images/palestrantes/Minicursos/Dia 05-12/Marcial Francis Galera.png";
import LuizAugustoImage from "/src/assets/images/palestrantes/Mesas redondas/Dia 05-12/Dr. Luiz Augusto Cavallini Menechino.jpg";
import RodrigoCesarImage from "/src/assets/images/palestrantes/Mesas redondas/Dia 05-12/Rodrigo César.jpg";
import DanielyBeatriceImage from "/src/assets/images/palestrantes/Mesas redondas/Dia 05-12/Daniely Beatrice.jpg";
import JeaneAnschauImage from "/src/assets/images/palestrantes/Palestra dinâmica/dia 05/Dr.ª Jeane Anschau.jpg";
import MayaraMendoncaImage from "/src/assets/images/palestrantes/Palestra dinâmica/dia 05/Mayara Mendonça (1).jpg";
import JoaoGabrielImage from "/src/assets/images/palestrantes/Palestra dinâmica/dia 05/João Gabriel.jpg";
import IsadoraRibeiro from "/src/assets/images/palestrantes/Minicursos/Dia 06-12/Isadora Ribeiro.jpg";
import IzabellaFerreiraRocha from "/src/assets/images/palestrantes/Minicursos/Dia 06-12/ Izabella Ferreira Rocha.jpg";
import LauraGracasPadilhaDeCarvalho from "/src/assets/images/palestrantes/Minicursos/Dia 06-12/Laura Graças Padilha de Carvalho.jpg";
import JackelineGoncalvesBritoFerreira from "/src/assets/images/palestrantes/Minicursos/Dia 06-12/Jackeline Gonçalves Brito Ferreira_.jpg";
import NinaBueno from "/src/assets/images/palestrantes/Minicursos/Dia 06-12/Nina Bueno.jpg";
import AlineBiancaCostaDosSantos from "/src/assets/images/palestrantes/Palestra dinâmica/dia 06/Copy of Aline Bianca Costa dos Santos.jpg";
import GiselaArsaDaCunha from "/src/assets/images/palestrantes/Palestra dinâmica/dia 06/Copy of Gisela Arsa da Cunha.jpg";
import LorenaBarbosaFonseca from "/src/assets/images/palestrantes/Palestra dinâmica/dia 06/Copy of Lorena Barbosa Fonseca.jpg";
import NelyAlvesDeCastroLima from "/src/assets/images/palestrantes/Experiência exitosa/06-12/Nely Alves de Castro Lima.jpg";
import VanusaCristina from "/src/assets/images/palestrantes/Experiência exitosa/06-12/Vanusa Cristina.jpg";
import DanKaioLemos from "/src/assets/images/palestrantes/Palestras/Dia 06-12/Dan Kaio Lemos.jpg";
import CristianeFerreira from "/src/assets/images/palestrantes/Palestras/Dia 07-12/Cristiane Ferreira.jpg";
import VitoriaValeriaCristoSantos from "/src/assets/images/palestrantes/Palestras/Dia 07-12/Vitória Valéria Cristo Santos.jpg";
import TatianaBering from "/src/assets/images/palestrantes/Experiência exitosa/dia 07-12/Profa. Dra. Tatiana Bering.jpg";
import BeluciBianca from "/src/assets/images/palestrantes/Mesas redondas/Dia 07-12/Beluci Bianca.jpg";
import AlessandraEmanuelleCunhaRodrigues from "/src/assets/images/palestrantes/Mesas redondas/Dia 07-12/Alessandra Emanuelle Cunha Rodrigues_.jpg";
import DeiseVilani from "/src/assets/images/palestrantes/Mesas redondas/Dia 07-12/Deise Vilani.jpg";

const schedule = {
  1: [
    {
      time: "07h",
      title: "Início do credenciamento 1.1",
      type: 5, //1: Palestra, 2: Mesa-redonda, 3: Minicurso, 5: Experiencia existosa 5: Other
      locale: "Sagão principal",
    },
    {
      time: "09:25h",
      title:
        "Cuidados à saúde reprodutiva: avanços e desafios para o alcance dos ODS",
      description:
        "Esta atividade discutirá os avanços e desafios nos cuidados à saúde reprodutiva, fundamentais para o cumprimento dos Objetivos de Desenvolvimento Sustentável (ODS), especialmente em saúde (ODS 3) e igualdade de gênero (ODS 5). Serão abordadas inovações em planejamento familiar, cuidados pré-natais e redução da mortalidade materna, além da importância de políticas públicas que garantam acesso universal e equitativo a esses serviços.",
      type: 2, //1: Palestra, 2: Mesa-redonda, 3: Minicurso
      locale: "Auditorio - IC",
      speakers: [
        {
          name: "Luiz Menechino",
          role: "Médico Ginecologista e Obstreta",
          image: LuizAugustoImage,
        },
        {
          name: "Rodrigo Carvalho",
          role: "Nutricionista Especialista",
          image: RodrigoCesarImage,
        },
        {
          name: "Daniely Ribeiro",
          role: "Enfermeira Especialista",
          image: DanielyBeatriceImage,
        },
      ],
    },
    {
      time: "11:05h",
      title:
        "Boas práticas gestacionais, como o cuidado pré natal e a abordagem familiar impactam na saúde das futuras gerações",
      description:
        'A palestra "Boas práticas gestacionais: como o cuidado pré-natal e a abordagem familiar impactam na saúde das futuras gerações" apresenta a importância de um pré-natal bem estruturado e do apoio familiar para a saúde materna e do bebê. O conteúdo abrange práticas e cuidados essenciais durante a gestação, com ênfase no pré natal da mulher e a inclusão da família, no pré natal do parceiro e no pré natal de homens transexuais',
      type: 1,
      locale: "Palestra",
      speakers: [
        {
          name: "Jeane Anschau",
          role: "Doutoura em Enfermagem pela FAEN/UFMT",
          image: JeaneAnschauImage,
        },
        {
          name: "Mayara Mendonça",
          role: "Enfermeira Especialista",
          image: MayaraMendoncaImage,
        },
        {
          name: "João Gabriel",
          role: "Enfermeiro Mestre",
          image: JoaoGabrielImage,
        },
      ],
    },
    {
      time: "14:00h",
      title:
        "Acolhimento e Classificação de Risco Obstétrico: Procedimentos e Análise dos desfechos dos atendimentos na Triagem obstétrica",
      description:
        "Este minicurso oferece uma formação prática e teórica sobre os procedimentos de acolhimento e a classificação de risco em obstetrícia, focando nos métodos de triagem e na análise dos desfechos dos atendimentos",
      type: 3,
      locale: "FAEN - UFMT",
      speakers: [
        {
          name: "Karoline Melo",
          role: "Enfermeira Obstétrica",
          image: KarolineMeloImage,
        },
      ],
    },
    {
      time: "14:00h",
      title:
        "Urgências e Emergências Obstétricas: Casos Complexos e Lições Aprendidas na Prática Clínica",
      description:
        "Este minicurso aborda situações de urgência e emergência em obstetrícia, com foco em casos complexos e as principais lições aprendidas na prática clínica.",
      type: 3,
      locale: "FAEN - UFMT",
      speakers: [
        {
          name: "Ana Luiza Rabelo da Silva",
          role: "Enfermeira Obstétrica",
          image: AnaLuizaRabeloImage,
        },
      ],
    },
    {
      time: "14:00h",
      title:
        "Urgências e Emergências Obstétricas: Casos Complexos e Lições Aprendidas na Prática Clínica",
      description:
        "Este minicurso é voltado para o aprofundamento no manejo da Hemorragia Pós-parto (HPP), abordando desde o diagnóstico precoce até as intervenções de emergência e o cuidado integral pós-crise.",
      type: 3,
      locale: "FAEN - UFMT",
      speakers: [
        {
          name: "Mayrene Dias de Sousa Moreira",
          role: "Professora em Enfermagem",
          image: MayreneDiasImage,
        },
      ],
    },
    {
      time: "14:00h",
      title: "Taping da gestação ao pós parto",
      description:
        "Este minicurso oferece uma introdução prática ao uso do taping em gestantes, cobrindo técnicas que auxiliam na redução de desconfortos comuns na gravidez e promovem uma recuperação mais confortável no pós-parto.",
      type: 3,
      locale: "FAEN - UFMT",
      speakers: [
        {
          name: "Yana Rossetto",
          role: "Sócia e Proprietária da Life Qualificações",
          image: YanaRossetoImage,
        },
      ],
    },
    {
      time: "14:00h",
      title:
        "Triagem Neonatal: Importância do Diagnóstico Precoce para o tratamento de Doenças Congênitas",
      description:
        "Nesta palestra, profissionais especializados em triagem neonatal e genética médica abordarão a importância crucial do diagnóstico precoce para o tratamento de doenças congênitas em recém-nascidos. A triagem neonatal é uma ferramenta essencial que permite a detecção precoce de doenças genéticas e metabólicas, muitas vezes antes que os sintomas se manifestem.",
      type: 3,
      locale: "FAEN - UFMT",
      speakers: [
        {
          name: "Marcial Francis Galera",
          role: "Médico Pediatra e Geneticista",
          image: MarcialFrancisGaleraImage,
        },
      ],
    },
  ],
  2: [
    {
      time: "14h",
      title:
        "Amamentação e laserterapia: otimização do manejo nos problemas relacionados à lactação",
      description:
        "O minicurso com a Enf.ª Esp. Isadora Ribeiro explora o uso da laserterapia para tratar problemas comuns na lactação, como fissuras e mastite. Os participantes aprenderão técnicas práticas para otimizar o manejo da amamentação, promovendo a saúde de mães e bebês",
      type: 3,
      locale: "Bloco da FAEN",
      speakers: [
        {
          name: "Isadora Ribeiro",
          role: "Enfermeira especialista em saúde materno-infantil",
          image: IsadoraRibeiro,
        },
      ],
    },
    {
      time: "14h",
      title: "Atuação da enfermeira na progressão do trabalho de parto",
      description:
        "O minicurso 'Atuação da Enfermeira na Progressão do Trabalho de Parto,' ministrado pela Enf.ª Esp. Nina Bueno, aborda práticas essenciais e atualizadas para o acompanhamento seguro e humanizado do trabalho de parto. Focado no papel da enfermeira, o curso explora as fases do trabalho de parto, intervenções não farmacológicas, monitoramento da evolução clínica e apoio emocional à gestante. Além disso, são discutidas estratégias para fortalecer a autonomia da mulher no processo e promover um ambiente acolhedor. Ideal para profissionais da saúde e estudantes de enfermagem, o minicurso oferece uma visão prática e teórica, capacitando os participantes a contribuir positivamente para a experiência de parto seguro e humanizado",
      type: 3,
      locale: "Bloco da FAEN",
      speakers: [
        {
          name: "Nina Bueno",
          role: "Enfermeira Obstetra",
          image: NinaBueno,
        },
      ],
    },
    {
      time: "11:55h",
      title:
        "Direitos e Saúde Parental em Perspectiva: Desafios e Avanços na Reprodução e Parentalidade",
      description:
        "A palestra, ministrada por Dan Kaio Lemos, abordará o tema 'Direitos e Saúde Parental em Perspectiva: Desafios e Avanços na Reprodução e Parentalidade'. Dan Kaio Lemos é um homem transfeminista, antropólogo, escritor e doutorando na Universidade de Brasília (UNB) e na Western University, no Canadá. Ele é membro do Núcleo de Transparentalidades do IBRAT (Instituto Brasileiro de Transmasculinidades). A palestra promete explorar temas atuais sobre os direitos e a saúde parental, especialmente no contexto das pessoas trans, destacando os avanços e os desafios enfrentados em questões de reprodução e parentalidade",
      type: 1,
      locale: "Auditorio do IC",
      speakers: [
        {
          name: "Dan Kaio Lemos",
          role: "Antropólogo e Escritor",
          image: DanKaioLemos,
        },
      ],
    },
    {
      time: "08:05h",
      title:
        "O Papel da Equipe Multiprofissional no Pré-natal: Integração Sustentável e Equidade no Acesso à Saúde Materno e Infantil.",
      description:
        "A palestra dinâmica 'O Papel da Equipe Multiprofissional no Pré-natal: Integração Sustentável e Equidade no Acesso à Saúde Materno e Infantil,' conduzida por Aline Bianca Costa dos Santos, Gisela Arsa da Cunha e Lorena Barbosa Fonseca, explora a importância da atuação integrada e colaborativa dos profissionais de saúde no pré-natal. Com uma abordagem voltada para a sustentabilidade e a equidade, a palestra destaca como a equipe multiprofissional pode melhorar o acesso à saúde materno-infantil, garantindo cuidado abrangente e respeitoso. São abordados temas como o acompanhamento contínuo da gestante, intervenções preventivas e estratégias para promover a inclusão e o apoio às mulheres em diferentes contextos sociais e econômicos. Este encontro visa inspirar práticas de saúde baseadas na cooperação e em modelos de cuidado mais humanizados e acessíveis",
      type: 2,
      locale: "Auditorio do IC",
      speakers: [
        {
          name: "Aline Bianca Costa dos Santos",
          role: "Assistente Social Especialista em Saúde mental",
          image: AlineBiancaCostaDosSantos,
        },
        {
          name: "Gisela Arsa da Cunha",
          role: "Nutricionista Educadora Fisica e Doutora",
          image: GiselaArsaDaCunha,
        },
        {
          name: "Lorena Barbosa",
          role: "Nutricionista e Doutoura em Saúde Coletiva",
          image: LorenaBarbosaFonseca,
        },
      ],
    },
    {
      time: "14h",
      title: "Empreender na enfermagem obstétrica: caminhos e oportunidades",
      description:
        "No minicurso 'Empreender na Enfermagem Obstétrica: Caminhos e Oportunidades', Izabella Ferreira explora as diversas possibilidades de atuação para enfermeiros obstétricos no mercado. Com foco em inovação e empreendedorismo, os participantes aprenderão a desenvolver serviços diferenciados e a se destacar no atendimento humanizado ao parto e à maternidade, transformando suas práticas em oportunidades de negócios.",
      type: 3,
      locale: "Bloco da FAEN",
      speakers: [
        {
          name: "Izabella Ferreira",
          role: "Empresária e especialista em parto humanizado",
          image: IzabellaFerreiraRocha,
        },
      ],
    },
    {
      time: "14h",
      title:
        "Boas práticas de assistência ao parto: humanização no momento do parto e Métodos não farmacológicos de alívio da dor",
      description:
        "Neste minicurso, a Enf.ª Ms. Laura Padilha abordará as Boas Práticas de Assistência ao Parto, enfatizando a humanização durante o nascimento e os métodos não farmacológicos de alívio da dor. Os participantes aprenderão técnicas e abordagens que promovem uma experiência de parto mais acolhedora e confortável, com foco em intervenções que respeitam o desejo da parturiente e favorecem um ambiente seguro e positivo. A formação busca capacitar os profissionais de saúde para que ofereçam cuidados mais humanos e eficazes durante o trabalho de parto",
      type: 3,
      locale: "Bloco da FAEN",
      speakers: [
        {
          name: "Laura Padilha",
          role: "Enfermeira obstétrica e mestre em Enfermagem",
          image: LauraGracasPadilhaDeCarvalho,
        },
      ],
    },
    {
      time: "14h",
      title: "Primeiros Socorros para Bebês: Como Lidar com Emergências",
      description:
        "Neste minicurso, a Prof.ª Dr.ª Jackeline Gonçalves Brito Ferreira abordará Primeiros Socorros para Bebês: Como Lidar com Emergências. Os participantes aprenderão a reconhecer e responder a situações de emergência, adquirindo conhecimentos sobre manobras de ressuscitação e cuidados em acidentes comuns, capacitando-os a agir de forma eficaz e segura",
      type: 3,
      locale: "Bloco da FAEN",
      speakers: [
        {
          name: "Jackeline Gonçalves",
          role: "Enfermeira obstetra e doutora em enfermagem",
          image: JackelineGoncalvesBritoFerreira,
        },
      ],
    },
    {
      time: "10:50h",
      title: "Iniciativa Hospital Amigo da Criança",
      description:
        "A experiencia exitosa será ministrada por Vanusa Cristina, enfermeira graduada pela Universidade Federal de Mato Grosso (2001) e pós-graduada em enfermagem obstétrica pela mesma universidade (2004). Vanusa é enfermeira coordenadora do Hospital Beneficente Santa Helena, em Mato Grosso, e também atua como doula. No evento, ela abordará a 'Iniciativa Hospital Amigo da Criança', discutindo as melhores práticas e os benefícios desse programa voltado para a promoção do aleitamento materno e do acolhimento humanizado de mães e recém-nascidos. A apresentação será breve, com duração de 10 a 15 minutos, e começará às 10h50, no dia 6 de dezembro de 2024",
      type: 4,
      locale: "Auditorio do IC",
      speakers: [
        {
          name: "Vanusa Cristina",
          role: "Enfermeira Coordenadora",
          image: VanusaCristina,
        },
      ],
    },
    {
      time: "10:50h",
      title: "Conhecendo o Banco de Leite Humano",
      description:
        "Nely Alves de Castro Lima apresentará a palestra 'Conhecendo o Banco de Leite Humano', destacando a importância da doação de leite materno para a saúde infantil. Serão abordados os processos de coleta e armazenamento do leite. O objetivo é conscientizar sobre os benefícios e a necessidade dessa prática.",
      type: 4,
      locale: "Auditorio do IC",
      speakers: [
        {
          name: "Nely Alves",
          role: "Enfermeira Especialista",
          image: NelyAlvesDeCastroLima,
        },
      ],
    },
  ],
  3: [
    {
      time: "10h",
      title: "Mesa-redonda: O papel da Enfermagem na saúde infantil 3.1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla vel nibh posuere venenatis id et est. Mauris maximus pulvinar ante at aliquam. Nulla pellentesque accumsan sapien, nec finibus ex vulputate quis. Pellentesque vestibulum ligula massa, eget cursus magna varius et. Maecenas consectetur auctor eleifend.",
      type: 2,
      locale: "Auditorio",
      speakers: [
        {
          name: "John Doe",
          role: "Software Engineer",
          image: "/src/assets/images/avatar.jpg",
        },
      ],
    },
    {
      time: "14h",
      title: "Mesa-redonda: O papel da Enfermagem na saúde infantil 3.2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla vel nibh posuere venenatis id et est. Mauris maximus pulvinar ante at aliquam. Nulla pellentesque accumsan sapien, nec finibus ex vulputate quis. Pellentesque vestibulum ligula massa, eget cursus magna varius et. Maecenas consectetur auctor eleifend.",
      type: 2,
      locale: "Auditorio",
      speakers: [
        {
          name: "John Doe",
          role: "Software Engineer",
          image: "/src/assets/images/avatar.jpg",
        },
      ],
    },
  ],
};

export const Schedule = ({ pageTwo }) => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedSchedule, setSelectedSchedule] = useState(schedule[1]);

  function handleChangeDay(day) {
    setSelectedSchedule([]);
    setSelectedDay(day);
    setSelectedSchedule(schedule[day]);
  }

  return (
    <div className="md:px-20 sm:px-10 px-6 bg-bg pt-36">
      <div className="max-w-[1440px] flex flex-col items-center justify-center w-full mx-auto">
        <div className="flex flex-row text-largetitle font-semibold self-end gap-3 mb-8">
          <h1>Programação</h1>
          <img src={titleicon} alt="" />
        </div>

        <div className="flex flex-row w-full justify-around items-center sm:gap-20 gap-4 rounded-[50px] border-primary border-[0.5px] p-4 mb-5">
          <button
            onClick={() => {
              handleChangeDay(1);
            }}
            className={`${
              selectedDay == 1 ? "font-bold" : "text-opacity-50 text-[#000]"
            } text-lg`}
          >
            Quinta-feira
          </button>
          <button
            onClick={() => {
              handleChangeDay(2);
            }}
            className={`${
              selectedDay == 2 ? "font-bold" : "text-opacity-50 text-[#000]"
            } text-lg`}
          >
            Sexta-feira
          </button>
          <button
            onClick={() => {
              handleChangeDay(3);
            }}
            className={`${
              selectedDay == 3 ? "font-bold" : "text-opacity-50 text-[#000]"
            } text-lg`}
          >
            Sábado
          </button>
        </div>
        <div className="flex flex-row sm:gap-8 gap-4 self-end mb-16">
          <div className="flex flex-row items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-primary" />
            <p className="sm:text-base text-xs">PALESTRA</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="w-4 h-4 rounded-full bg-tPink" />
            <p className="sm:text-base text-xs">MESA-REDONDA</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="w-4 h-4 rounded-full bg-tBlue" />
            <p className="sm:text-base text-xs">MINICURSO</p>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          {selectedSchedule.map((schedule) => (
            <ScheduleCard schedule={schedule} key={schedule.title} />
          ))}
        </div>

        {!pageTwo && (
          <a
            href=""
            className="flex flex-row gap-2 px-8 py-3 rounded-[15px] mt-14 bg-gradient-to-r from-[#51ACD999] via-[#8644F099] to-[#E43B6499] text-bg"
          >
            <p className="text-xl">Ver programação completa</p>
            <img src={whitearrow} alt="" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Schedule;
