const VerticalTimelineItem = ({ date, title }) => {
  return (
    <div className="relative flex items-start mb-8">
      {/* Linha vertical */}
      <div className="-left-[3px] top-[30px] mr-4 absolute">
        <div className="w-2 h-2 bg-tBlue rounded-full"></div>
      </div>

      {/* Conteúdo da timeline */}
      <div className="flex flex-col ml-4">
        <div className="text-sm text-gray-500">{date}</div>
        <div className="text-lg font-semibold text-tBlue">{title}</div>
      </div>
    </div>
  );
};

export default VerticalTimelineItem;
