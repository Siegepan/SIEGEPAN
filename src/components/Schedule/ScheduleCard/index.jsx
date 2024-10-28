import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ScheduleCard = ({ schedule }) => {
  useEffect(() => {
    console.log(schedule);
  }, []);
  return (
    <div className="flex sm:flex-row flex-col items-center sm:gap-20 gap-3 rounded-[50px] border-primary border-[0.5px] p-6">
      <div>
        <div className="w-4 h-4 rounded-full bg-primary" />
      </div>
      <div className="text-xl font-bold">{schedule.time}</div>
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col">
          <div className="flex sm:flex-row flex-col items-center justify-between w-full">
            {schedule.title && (
              <h1 className="text-xl font-semibold">{schedule.title}</h1>
            )}
            {schedule.locale && (
              <p className="font-light italic text-[#606060] self-end">
                {schedule.locale}
              </p>
            )}
          </div>

          {schedule.description && (
            <p className="mt-4 text-base">{schedule.description}</p>
          )}
        </div>
        {schedule.speaker && (
          <div className="flex flex-row gap-4 mt-6">
            {schedule.speakers.map((speaker) => (
              <div className="flex flex-row gap-3" key={speaker.name}>
                <img src={speaker.image} alt="" />
                <div className="flex flex-col">
                  <h1 className="text-xl font-light">{speaker.name}</h1>
                  <p className="text-sm font-light">{speaker.role}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default ScheduleCard;
