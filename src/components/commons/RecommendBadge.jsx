import { getRecommendColor, getRecommendText } from "../../utils/recommends";

const RecommendBadge = ({ recommend }) => {
  return (
    <span
      className={
        "badge badge-danger rounded-lg px-2 py-1 text-xs font-semibold " +
        getRecommendColor(recommend)
      }
    >
      {getRecommendText(recommend)}
    </span>
  );
};

export default RecommendBadge;
