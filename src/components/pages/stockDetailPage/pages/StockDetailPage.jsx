import { useParams } from "react-router-dom";

const stock = {
  name: "삼성전자",
  stockCode: "005930",
  price: 80000,
  change: 1000,
  recommend: {
    buy: 0.73,
    sell: 0.27,
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
      buy: 0.73,
      sell: 0.27,
    },
    {
      date: "2021-07-09",
      buy: 0.73,
      sell: 0.27,
    },
    {
      date: "2021-07-10",
      buy: 0.73,
      sell: 0.27,
    },
    {
      date: "2021-07-11",
      buy: 0.73,
      sell: 0.27,
    },
    {
      date: "2021-07-12",
      buy: 0.73,
      sell: 0.27,
    },
  ],
};

const StockDetailPage = () => {
  const id = useParams().id;

  return (
    <div className={"stock-detail-page w-full flex flex-col"}>
      <div className={"stock-price-graph bg-gray-400 min-w-[380px]"}>Graph</div>
      {id}
    </div>
  );
};

export default StockDetailPage;
