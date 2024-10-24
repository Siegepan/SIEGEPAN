import { useEffect } from "react";

const HorizontalTimelineItem = ({ date, label, color }) => {
  useEffect(() => {
    console.log(color);
  });
  return (
    <div className="relative text-center flex flex-row -top-[11px]">
      <div className="flex flex-col items-center">
        {/* Data */}
        <p className="text-sm text-gray-600">{date}</p>
        {/* Ponto colorido */}
        <div className="relative mx-auto">
          <div className={`h-4 w-4 rounded-full bg-${color} relative z-50`}>
            <div
              className={`w-[2px] absolute left-1/2 z-0 ${
                label ? "h-6" : "h-7"
              } bg-${color} `}
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

export default HorizontalTimelineItem;
