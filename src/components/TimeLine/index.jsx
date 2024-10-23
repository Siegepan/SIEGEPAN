import TimelineItem from "../TimeLineItem";

const Timeline = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-lg font-semibold mb-4 w-full">Datas importantes</h2>
      <div className="relative flex items-center justify-between w-full max-w-6xl">
        {/* Linha da timeline */}
        <div className="absolute top-2/4 w-full h-0.5 bg-primary"></div>

        {/* Itens da timeline */}
        <TimelineItem date="17/10" color="primary" />
        <p className="text-xs text-gray-600 self-end">Período de submissão</p>
        <TimelineItem date="13/11" color="primary" />
        <TimelineItem date="14/11" color="primary" />
        <p className="text-xs text-gray-600 self-end">Período de avaliação</p>
        <TimelineItem date="26/11" label="" color="primary" />
        <TimelineItem date="27/11" label="Lista de aprovados" color="primary" />
      </div>
    </div>
  );
};

export default Timeline;
