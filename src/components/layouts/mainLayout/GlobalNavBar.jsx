import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import { BsQuestionCircle } from "react-icons/bs";

const GlobalNavBar = () => {
  return (
    <>
      <nav
        className={
          "global-nav-bar sticky flex h-14 items-center justify-between shadow-md"
        }
      >
        <a href={"/"} className={"h-full"}>
          <img
            src={logo}
            alt={"logo"}
            className={"logo h-full object-contain"}
          />
        </a>
        <div className={"gnb-right flex gap-5 px-4"}>
          <Link to={"/info"} className={"h-full"}>
              <BsQuestionCircle size={34} />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default GlobalNavBar;
