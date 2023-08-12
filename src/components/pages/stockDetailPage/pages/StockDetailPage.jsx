import { useParams } from "react-router-dom";

const stockSample = {
  name: "삼성전자",
  stockCode: "005930",
  price: 80000,
  change: 1000,
  recommend: {
    date: "2021-07-12",
    buy: 0.73,
  },
  news: [
    {
      title: "삼성전자, 2분기 영업익 12조원…전년比 54.3%↑",
      url: "https://www.hankyung.com/finance/article/2021070820011",
      date: "2021-07-08",
      source: "한국경제",
    },
    {
      title: "삼성전자, 2분기 영업익 12조원…전년比 54.3%↑",
      url: "https://www.hankyung.com/finance/article/2021070820011",
      date: "2021-07-08",
      source: "한국경제",
    },
    {
      title: "삼성전자, 2분기 영업익 12조원…전년比 54.3%↑",
      url: "https://www.hankyung.com/finance/article/2021070820011",
      date: "2021-07-08",
      source: "한국경제",
    },
  ],
  currentPrice: [
    {
      date: "2021-07-08",
      price: 80000,
    },
    {
      date: "2021-07-09",
      price: 79000,
    },
    {
      date: "2021-07-10",
      price: 78000,
    },
    {
      date: "2021-07-11",
      price: 76100,
    },
    {
      date: "2021-07-12",
      price: 81000,
    },
  ],
  currentRecommend: [
    {
      date: "2021-07-08",
      buy: 73
    },
    {
      date: "2021-07-09",
      buy: 80
    },
    {
      date: "2021-07-10",
      buy: 56
    },
    {
      date: "2021-07-11",
      buy: 30
    },
    {
      date: "2021-07-12",
      buy: 40
    },
  ],
};

const StockDetailPage = ({ stock = stockSample }) => {
  const id = useParams().id;

  const {
    stockCode,
    name,
    price,
    change,
    recommend,
    news,
    currentPrice,
    currentRecommend,
  } = stock;

  return (
    <div
      className={"stock-detail-page page flex w-full max-w-[1024px] flex-col"}
    >
      <h1
        className={
          "stock-name flex h-20 items-center justify-center text-4xl font-extrabold"
        }
      >
        {name}
        <span className={"stock-code text-2xl font-semibold text-gray-500"}>
          ({stockCode})
        </span>
      </h1>
      <div className={"stock-price-graph min-w-[380px] bg-gray-400"}>Graph</div>
      {id}
    </div>
  );
};

export default StockDetailPage;
