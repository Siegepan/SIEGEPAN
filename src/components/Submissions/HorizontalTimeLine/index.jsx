import HorizontalTimelineItem from "../HorizontalTimeLineItem";

const HorizontalTimeLine = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-7xl">
      <h2 className="text-lg font-semibold mb-4 text-start self-start">
        Datas importantes
      </h2>
      <div className="relative flex items-center justify-between w-full">
        {/* Linha da timeline */}
        <div className="absolute top-2/4 w-full h-0.5 bg-gradient-to-r from-tBlue via-primary to-tPink"></div>

        {/* Itens da timeline */}
        <HorizontalTimelineItem date="17/10" color="tBlue" />
        <p className="text-xs text-gray-600 self-end text-nowrap">
          Período de submissão
        </p>
        <HorizontalTimelineItem date="13/11" color="tBlue" />
        <HorizontalTimelineItem date="14/11" color="primary" />
        <p className="text-xs text-gray-600 self-end">Período de avaliação</p>
        <HorizontalTimelineItem date="26/11" label="" color="primary" />
        <HorizontalTimelineItem
          date="27/11"
          label="Lista de aprovados"
          color="tPink"
        />
      </div>
    </div>
  );
};

export default HorizontalTimeLine;
