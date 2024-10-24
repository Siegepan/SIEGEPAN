import VerticalTimelineItem from "../VerticalTimeLineItem";

const VerticalTimeLine = () => {
  const events = [
    {
      date: "17/10 a 13/11",
      title: "Período de submissão",
    },

    {
      date: "14/11 a 26/11",
      title: "Período de avaliação",
    },
    {
      date: "27/11",
      title: "Lista de aprovados",
    },
  ];

  return (
    <div className="relative h-[230px]">
      <div className="absolute w-0.5 h-full bg-gradient-to-r from-tBlue via-primary to-tPink"></div>
      <div className="pt-3">
        {events.map((event, index) => (
          <VerticalTimelineItem
            key={index}
            date={event.date}
            title={event.title}
          />
        ))}
      </div>
    </div>
  );
};
export default VerticalTimeLine;
