import logo from "./images/logo.png";
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
          /> 10/22
        </a>
        <div className={"gnb-right flex gap-5 px-4"}>
        </div>
      </nav>
    </>
  );
};

export default GlobalNavBar;
