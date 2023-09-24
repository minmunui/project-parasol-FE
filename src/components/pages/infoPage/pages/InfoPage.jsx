import Nav from "../molecules/Nav";
import InfoPanel from "../organisms/InfoPanel";

const InfoPage = () => {
  return (
    <>
      <Nav></Nav>
        <InfoPanel
            title={"파라솔"}
            description={"파라솔은 파이썬을 이용한 주식 자동매매 프로그램입니다."}
            image={"/images/parasol.png"}
        />
    </>
  );
};

export default InfoPage;
