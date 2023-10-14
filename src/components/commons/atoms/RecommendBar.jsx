const RecommendBar = ({ recommend }) => {
  const buy = recommend?.buy.toFixed(0);
  const hold = recommend?.hold.toFixed(0);
  const sell = (100 - buy - hold).toFixed(0);
  return (
    <div className="recommend-bar flex h-4 w-full flex-row justify-between">
      <div
        className={
          "recommend-bar-buy flex flex-col items-center justify-center overflow-x-hidden rounded-l-lg bg-red-500 text-xs font-bold text-white"
        }
        style={{ width: buy + "%" }}
      >
        <span className={"recommend-bar-buy-text"}>{buy + "%"}</span>
      </div>
      <div
        className={
          "recommend-bar-sell flex flex-col items-center justify-center overflow-x-hidden bg-gray-500 text-xs font-bold text-white"
        }
        style={{ width: hold + "%" }}
      >
        {hold + "%"}
      </div>
      <div
        className={
          "recommend-bar-sell flex flex-col items-center justify-center overflow-x-hidden rounded-r-lg bg-blue-500 text-xs font-bold text-white"
        }
        style={{ width: sell + "%" }}
      >
        {sell + "%"}
      </div>
    </div>
  );
};

export default RecommendBar;
