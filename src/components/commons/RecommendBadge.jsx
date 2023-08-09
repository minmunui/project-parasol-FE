import { getRecommendColor } from "../../utils/recommends";

const RecommendBadge = ({ recommend }) => {
  return (
    <span
      className={
        "badge badge-danger rounded-lg px-2 py-1 text-xs font-semibold " +
        getRecommendColor(recommend)
      }
    >
      {recommend ? "매수" : "매도"}
    </span>
  );
};

export default RecommendBadge;
