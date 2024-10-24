const VerticalTimelineItem = ({ date, title }) => {
  return (
    <div className="flex items-start mb-8">
      {/* Linha vertical */}
      <div className="flex flex-col items-center mr-4">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <div className="h-full w-px bg-gray-300"></div>
      </div>

      {/* Conteúdo da timeline */}
      <div className="flex flex-col">
        <div className="text-sm text-gray-500">{date}</div>
        <div className="text-lg font-semibold text-blue-500">{title}</div>
      </div>
    </div>
  );
};

export default VerticalTimelineItem;
