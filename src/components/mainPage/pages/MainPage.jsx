import StockCard from "../atoms/StockCard";

const MainPage = () => {
  return (
    <div className={"main-page flex flex-col "}>
      <h1 className={""}>Main Page</h1>
      <StockCard
        stock={{
          name: "삼성전자",
          stockCode: "005930",
          price: 80000,
          change: 1000,
          recommend: {
            buy: 0.73,
            sell: 0.27,
          },
        }}
      />
    </div>
  );
};

export default MainPage;
