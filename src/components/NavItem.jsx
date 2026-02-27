/*
 * FILE : NavItem.jsx
 * PROJECT : SENG3080 - Frontend Assignment
 * PROGRAMMER : Nicholas Aguilar
 * FIRST VERSION : 2026-02-22
 * DESCRIPTION : This file defines the NavItem component which is an individual navigation item on the navbar
 */
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
