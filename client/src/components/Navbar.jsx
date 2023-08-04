import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <LoginButton />
      <LogoutButton />
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/roadmap">Roadmap</NavLink>
    </div>
  );
}