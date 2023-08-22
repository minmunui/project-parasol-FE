import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import Toggle from "../../commons/atoms/Toggle";
import { useContext } from "react";
import { FormatContext } from "../../../App";
import { FaPercent } from "react-icons/fa";

const GlobalNavBar = () => {
  const { isPercent, setIsPercent } = useContext(FormatContext);
  return (
    <>
      <nav
        className={
          "global-nav-bar sticky flex h-14 items-center justify-between shadow-md"
        }
      >
        <Link to={"/"} className={"h-full"}>
          <img
            src={logo}
            alt={"logo"}
            className={"logo h-full object-contain"}
          />
        </Link>
        <div className={"gnb-right flex gap-5 px-4"}>
          <Toggle
            label={<FaPercent />}
            active={isPercent}
            onClick={() => {
              setIsPercent(!isPercent);
            }}
          />
          <div>Menu</div>
        </div>
      </nav>
    </>
  );
};

export default GlobalNavBar;
