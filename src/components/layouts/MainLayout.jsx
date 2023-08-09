import GlobalNavBar from "./GlobalNavBar";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <>
        <GlobalNavBar />
        <Outlet />
        <Footer />
        </>
    );
}

export default MainLayout