const AxisCard = ({ info, gradientInverse }) => {
  return (
    <div
      className={`p-[1px] ${
        gradientInverse ? "bg-gradient-to-l" : "bg-gradient-to-r"
      } from-tBlue via-prumary to-tPink rounded-2xl max-h-fit`}
    >
      <div className="bg-bg p-6 rounded-2xl">
        <p className="text-lg ">{info}</p>
      </div>
    </div>
  );
};

export default AxisCard;
