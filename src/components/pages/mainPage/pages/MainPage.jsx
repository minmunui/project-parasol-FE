import StockGrid from "../molecules/StockGrid";

const stocks = [
  {
    name: "삼성전자  성전자",
    stockCode: "005930",
    price: 80000,
    change: 1000,
    recommend: {
      buy: 45,
      date: "2021-07-12",
    },
  },
  {
    name: "삼성전자",
    stockCode: "005930",
    price: 80000,
    change: 1000,
    recommend: {
      buy: 80,
      date: "2021-07-12",
    },
  },
  {
    name: "삼성전자",
    stockCode: "005930",
    price: 80000,
    change: 1000,
    recommend: {
      buy: 73,
      date: "2021-07-12",
    },
  },
];

const MainPage = () => {
  return (
    <div
      className={"main-page flex w-full max-w-[1024px] flex-col items-center"}
    >
      <header className={"w-full font-bold"}>Main Page</header>
      <StockGrid stocks={stocks} />
    </div>
  );
};

export default MainPage;
