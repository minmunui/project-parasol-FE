import { Link } from "react-router-dom";

const NavItem = ({ children, href }) => {
  return (
    <Link to={href} className={"w-40"}>
      <span className="nav-link text-3xl font-semibold">{children}</span>
    </Link>
  );
};

export default NavItem;
