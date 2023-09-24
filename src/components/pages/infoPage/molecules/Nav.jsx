import NavItem from "../atoms/NavItem";

const Nav = () => {
  return <nav className={"fixed top-4 left-0 right-0 flex justify-center gap-8"}>
    <NavItem to={"/info"}>Introduction</NavItem>
    <NavItem to={"/info"}>Information</NavItem>
    <NavItem to={"/info"}>Contact</NavItem>
  </nav>;
};

export default Nav;
