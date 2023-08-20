import GlobalNavBar from "./GlobalNavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <GlobalNavBar />
      <div className={"main-layout flex w-full flex-col items-center"}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
