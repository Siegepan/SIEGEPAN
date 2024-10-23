const TimelineItem = ({ date, label, color }) => {
  return (
    <div className="relative text-center flex flex-row -top-[11px]">
      <div className="flex flex-col items-center">
        {/* Data */}
        <p className="text-sm text-gray-600">{date}</p>
        {/* Ponto colorido */}
        <div className="relative mx-auto">
          <div className={`h-4 w-4 rounded-full bg-${color} relative`}>
            <div
              className={`w-[2px] ${
                label ? "h-6" : "h-7"
              } bg-primary absolute left-1/2`}
            ></div>
          </div>
        </div>
        {label && (
          <p className="text-xs text-gray-600 absolute top-12 text-nowrap">
            {label}
          </p>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
