import { Timer, Scroll } from "phosphor-react";
import LogoIgnite from "../assets/Logo-ignite.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between">
      <img src={LogoIgnite} alt="" />
      <nav className="flex gap-4 items-center">
        <NavLink to="/">
          <Timer
            className="text-green-500 hover:border-b-green-500 border-b-2 border-transparent "
            size={24}
          />
        </NavLink>
        <NavLink to="/history">
          <Scroll
            className="text-white hover:outline-green-500 outline-2 outline-transparent "
            size={24}
          />
        </NavLink>
      </nav>
    </header>
  );
}
