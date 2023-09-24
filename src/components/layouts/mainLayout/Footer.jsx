import { useRef } from "react";
import useComponentSize from "../../../hooks/useComponentSize";
const footerPadding = 32;
const Footer = () => {
  const footer = useRef();
  const footerHeight = useComponentSize(footer).height;
  return (
    <footer className={"footer"}>
      <div
        className={"footer-dummy"}
        style={{ height: `${footerHeight + 20 + footerPadding}px` }}
      ></div>
      <div
        className={
          "footer text-muted text-gray- absolute bottom-0 w-full bg-gray-200 p-4 text-start text-xs text-gray-400"
        }
        ref={footer}
      >
        해당 웹 페이지는 부산대학교 2023 전기 졸업과제 "심층 강화학습을 위한
        주식투자 전략 개발"의 일환으로 강화학습 모델의 결과를 확인하기 위해
        제작되었습니다. <br />
        해당 웹 페이지의 추천은 강화학습 모델의 결과일 뿐, 실제 주식투자에 대한
        권유사항이 아님을 밝히며, 투자에 대한 모든 책임은 투자자 본인에게
        있습니다. <br />
        모든 강화학습은 종가를 기준으로 수행되었습니다. 때문에 순간적인 변동에
        대한 반응이 미흡할 수 있습니다.
        <br />
      </div>
    </footer>
  );
};

export default Footer;
