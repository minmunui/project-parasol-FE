import StockGrid from "../molecules/StockGrid";

const stocks = [
  {
    name: "삼성전자  성전자",
    stockCode: "005930",
    price: 80000,
    change: 1000,
    recommend: {
      buy: 0.99,
      sell: 0.01,
    },
  },
  {
    name: "삼성전자",
    stockCode: "005930",
    price: 80000,
    change: 1000,
    recommend: {
      buy: 0.73,
      sell: 0.27,
    },
  },
  {
    name: "삼성전자",
    stockCode: "005930",
    price: 80000,
    change: 1000,
    recommend: {
      buy: 0.73,
      sell: 0.27,
    },
  },
];

const MainPage = () => {
  return (
    <div className={"main-page max-w-[1024px] w-full flex flex-col items-center"}>
      <header className={"w-full font-bold"}>Main Page</header>
      <StockGrid stocks={stocks} />
    </div>
  );
};

export default MainPage;
