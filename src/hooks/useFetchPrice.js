import { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { MAX_PAGE_SIZE } from "../utils/constants";
import { getPriceByPage } from "../services/price";
import _ from "lodash";

export default function useFetchPrice(stockCode) {
  const [prices, setPrices] = useState([]);

  const infiniteQuery = useInfiniteQuery(
    ["getPriceByPage"],
    async ({ pageParam = 0 }) => getPriceByPage(stockCode, pageParam),
    // lastPage: 이전 페이지의 데이터
    // allPages: 이전 페이지를 포함한 모든 페이지의 데이터
    // getNextPageParam: 다음 페이지의 파라미터를 반환하는 함수
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < MAX_PAGE_SIZE) {
          return undefined;
        } else {
          return allPages?.length;
        }
      },
      keepPreviousData: true,
    },
  );

  useEffect(() => {
    // 한번 더 데이터를 검증해서 중복되는 데이터를 제거한다.
    if (infiniteQuery.data) {
      const allFetchedPrices = infiniteQuery.data.pages.flat();
      setPrices((prev) => _.unionBy([...prev, ...allFetchedPrices], "date"));
    }
  }, [infiniteQuery.data]);

  return {
    prices,
    ...infiniteQuery,
  };
}
