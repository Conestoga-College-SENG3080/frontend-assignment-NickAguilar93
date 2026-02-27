/*
 * FILE : Navbar.jsx
 * PROJECT : SENG3080 - Frontend Assignment
 * PROGRAMMER : Nicholas Aguilar
 * FIRST VERSION : 2026-02-22
 * DESCRIPTION : This file defines the Navbar component which sits at the top of the website, displaying navigation content and a user portrait
 */
import { useUser } from "../hooks/useUser";
import NavItem from "./NavItem";
const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="dark:bg-gray-900 shadow-md w-screen py-4 px-4">
      <div className="flex w-full mx-auto space-x-4 items-center justify-between">
        <div className="shrink-0 font-bold text-xl tracking-wider">Creddit</div>
        <div className="flex">
          <NavItem text="Home" to="/"></NavItem>
          <NavItem text="Favorites" to="/favorites"></NavItem>
        </div>

        <div className="flex items-center gap-3 py-1 px-3 ">
          <span className="text-sm font-medium hidden sm:block">
            {`${user.firstName} ${user.lastName}`}
          </span>

          <img
            className="h-8 w-8 rounded-full object-cover"
            src={`https://ui-avatars.com/api/?name=${user.username}&background=c7d2fe&color=3730a3&bold=true`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
