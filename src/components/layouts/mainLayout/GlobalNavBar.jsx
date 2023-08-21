import { Link } from "react-router-dom";
import logo from "./images/logo.png";
const GlobalNavBar = () => (
  <>
    <nav
      className={
        "global-nav-bar sticky flex h-14 items-center justify-between shadow-md"
      }
    >
      <Link to={"/"} className={"h-full"}>
        <img src={logo} alt={"logo"} className={"logo h-full object-contain"} />
      </Link>
      <div>Menu</div>
    </nav>
  </>
);

export default GlobalNavBar;
