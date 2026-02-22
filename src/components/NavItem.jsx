import { Link } from "react-router";

const NavItem = ({ text, to }) => {
  return (
    <div className="mr-5">
      <Link to={to}>
        <span>{text}</span>
      </Link>
    </div>
  );
};

export default NavItem;
