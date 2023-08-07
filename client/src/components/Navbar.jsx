import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Logo from "../assets/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { isAuthenticated } = useAuth0();
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated);
  const location = useLocation();
  useEffect(() => {
    setIsLoggedIn(isAuthenticated);
  }, [location.pathname, isAuthenticated])

  return (
    <div>
      <div className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
        <div className="cursor-pointer flex justify-between items-center">
          <img src={Logo} alt="" />
        </div>

        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[400px] transition-all ease-in duration-500">
          <li className="mx-4 my-6 md:my-0">
            <NavLink className={({ isActive }) => (`text-xl hover:text-green-500 duration-500 ${isActive ? "text-green-500" : ""}`)} to="/">Home</NavLink>
          </li>

          <li className="mx-4 my-6 md:my-0">
            <NavLink className={({ isActive }) => (`text-xl hover:text-green-500 duration-500 ${isActive ? "text-green-500" : ""}`)} to="/roadmap">Roadmap</NavLink>
          </li>
          {
            isLoggedIn &&
            <li className="mx-4 my-6 md:my-0">
              <NavLink className={({ isActive }) => (`text-xl hover:text-green-500 duration-500 ${isActive ? "text-green-500" : ""}`)} to="/bookmarks">BookMarks</NavLink>
            </li>
          }
          {
            isLoggedIn &&
            <li className="mx-4 my-6 md:my-0">
              <NavLink className={({ isActive }) => (`text-xl hover:text-green-500 duration-500 ${isActive ? "text-green-500" : ""}`)} to="/profile">Profile</NavLink>
            </li>
          }
          {
            !isLoggedIn &&
            <li className="mx-4 my-6 md:my-0">
              <LoginButton />
            </li>
          }
          {
            isLoggedIn &&
            <li className="mx-4 my-6 md:my-0">
              <LogoutButton />
            </li>
          }
        </ul>
      </div>
    </div>
  );
}