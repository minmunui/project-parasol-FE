const RecommendBar = ({ recommend }) => {
  const buy = recommend;
  const sell = (100 - recommend).toFixed(0);
  return (
    <div
      className="recommend-bar flex h-4 w-full flex-row justify-between"
    >
      <div
        className={
          "recommend-bar-buy flex flex-col items-center justify-center rounded-l-lg bg-red-500 text-sm font-bold text-white"
        }
        style={{ width: buy + "%" }}
      >
        <span className={"recommend-bar-buy-text"}>{buy + "%"}</span>
      </div>
      <div
        className={
          "recommend-bar-sell flex flex-col items-center justify-center rounded-r-lg bg-blue-500 text-sm font-bold text-white"
        }
        style={{ width: sell + "%" }}
      >
        {sell + "%"}
      </div>
    </div>
  );
};

export default RecommendBar;
