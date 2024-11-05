import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ScheduleCard = ({ schedule }) => {
  function getCardType(type) {
    switch (type) {
      case 1:
        return "primary";
      case 2:
        return "tPink";
      case 3:
        return "tBlue";
      case 4:
        return "gradient-to-r";
      default:
        return "gradient-to-r";
    }
  }

  return (
    <div className="flex md:flex-row flex-col md:items-start items-center lg:gap-16 md:gap-6 gap-3 rounded-[50px] border-primary border-[0.5px] p-6">
      <div>
        <div
          className={`w-4 h-4 rounded-full bg-${getCardType(
            schedule.type
          )} from-tBlue via-primary to-tPink opacity-60`}
        />
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
        {schedule.speakers?.length > 0 && (
          <div className="flex md:flex-row flex-col gap-10 mt-6 pr-10 pb-10">
            {schedule.speakers.map((speaker) => (
              <div
                className="flex flex-row gap-3  md:mb-0 mb-5"
                key={speaker.name}
              >
                <img
                  className="w-[51px] h-[51px] rounded-full"
                  src={speaker.image}
                  alt=""
                />
                <div className="flex flex-col">
                  <h1 className="md:text-xl text-lg font-light">
                    {speaker.name}
                  </h1>
                  <p className="md:text-sm text-xs font-light">
                    {speaker.role}
                  </p>
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
