const RecommendBar = ({ recommend }) => {
  const { buy, sell } = recommend;
  return (
    <div className="recommend-bar flex flex-row justify-between h-4">
      <div
        className={"recommend-bar-buy flex flex-col items-center bg-red-500 text-sm text-white font-bold justify-center rounded-l-lg"}
        style={{ width: buy * 100 + "%" }}
      >
          <span className={"recommend-bar-buy-text"}>
        {buy * 100 + "%"}
          </span>
      </div>
      <div
        className={"recommend-bar-sell flex flex-col items-center bg-blue-500 text-sm text-white font-bold justify-center rounded-r-lg"}
        style={{ width: sell * 100 + "%" }}
      >
        {sell * 100 + "%"}
      </div>
    </div>
  );
};

export default RecommendBar;
