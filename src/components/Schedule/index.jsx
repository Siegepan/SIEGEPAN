import { useState } from "react";
import ScheduleCard from "./ScheduleCard";

const schedule = {
  1: [
    {
      time: "07h",
      title: "Início do credenciamento 1.1",
      type: 4, //4: Other
      locale: "Sagão principal",
    },
    {
      time: "08h",
      title: "Palestra: O papel da Enfermagem na saúde infantil 1.2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla vel nibh posuere venenatis id et est. Mauris maximus pulvinar ante at aliquam. Nulla pellentesque accumsan sapien, nec finibus ex vulputate quis. Pellentesque vestibulum ligula massa, eget cursus magna varius et. Maecenas consectetur auctor eleifend.",
      type: 1, //1: Palestra, 2: Mesa-redonda, 3: Minicurso
      locale: "Auditorio",
      speakers: [
        {
          name: "John Doe",
          role: "Software Engineer",
          image: "/src/assets/images/avatar.jpg",
        },
        {
          name: "John Doe",
          role: "Software Engineer",
          image: "/src/assets/images/avatar.jpg",
        },
      ],
    },

    {
      time: "10h",
      title: "Palestra: O papel da Enfermagem na saúde infantil 1.3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla vel nibh posuere venenatis id et est. Mauris maximus pulvinar ante at aliquam. Nulla pellentesque accumsan sapien, nec finibus ex vulputate quis. Pellentesque vestibulum ligula massa, eget cursus magna varius et. Maecenas consectetur auctor eleifend.",
      type: 1,
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
  2: [
    {
      time: "08h",
      title: "Mesa-redonda: O papel da Enfermagem na saúde infantil 2.1",
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
      time: "10h",
      title: "Mesa-redonda: O papel da Enfermagem na saúde infantil 2.2",
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
      title: "Mesa-redonda: O papel da Enfermagem na saúde infantil 2.3",
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

export const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedSchedule, setSelectedSchedule] = useState(schedule[1]);

  function handleChangeDay(day) {
    setSelectedSchedule([]);
    setSelectedDay(day);
    setSelectedSchedule(schedule[day]);
  }

  return (
    <div className="sm:px-20 px-10 bg-bg">
      <div className="max-w-[1440px] flex flex-col items-center justify-center w-full mx-auto">
        <div className="flex flex-row text-largetitle font-semibold self-end gap-3 mb-8">
          <h1>Programação</h1>
          <img src="/src/assets/images/title-icon.svg" alt="" />
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

        <a
          href=""
          className="flex flex-row gap-2 px-8 py-3 rounded-[15px] mt-14 bg-gradient-to-r from-[#51ACD999] via-[#8644F099] to-[#E43B6499] text-bg"
        >
          <p className="text-xl">Ver programação completa</p>
          <img src="/src/assets/images/prime_arrow-right-white.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Schedule;
