import { getChangePercentage } from "./calculate";

export const MAX_PAGE_SIZE = 10;

export const STOCK_ORDERING = {
  NONE: { compare: (a, b) => 0 },
  CHANGE: {
    ASC: {
      compare: (a, b) =>
        getChangePercentage(a.price.value, a.price.change) -
        getChangePercentage(b.price.value, b.price.change)
          ? 1
          : -1,
    },
    DESC: {
      compare: (a, b) =>
        getChangePercentage(b.price.value, b.price.change) -
        getChangePercentage(a.price.value, b.price.change)
          ? 1
          : -1,
    },
  },
  NAME: {
    ASC: { compare: (a, b) => a.name.localeCompare(b.name) },
    DESC: { compare: (a, b) => b.name.localeCompare(a.name) },
  },
  RECOMMEND: {
    ASC: { compare: (a, b) => a.recentRecommend.buy - b.recentRecommend.buy },
    DESC: { compare: (a, b) => b.recentRecommend.buy - a.recentRecommend.buy },
  },
};
