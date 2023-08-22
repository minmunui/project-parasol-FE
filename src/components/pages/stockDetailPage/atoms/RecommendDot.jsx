const RecommendDot = ({ recommend, active }) => {
  return (
    <div
      className={
        "recommend-dot absolute z-20 h-[10px] w-[10px] rounded-full bg-red-500 transition-all " +
        (active ? "border-2 border-red-700" : "")
      }
      style={{ bottom: `calc(${(recommend / 100) * 90}% + 10% - 5px)` }}
    ></div>
  );
};

export default RecommendDot;
