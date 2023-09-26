import { Timer, Scroll } from "phosphor-react";
import LogoIgnite from "../assets/Logo-ignite.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

type IconToActivate = 'clock' | 'hist';

export default function Header() {
  const [activeIcon, setactiveIcon] = useState<IconToActivate>("clock");

  const handleChangeIcon = (iconToActivate:IconToActivate) => {
    setactiveIcon(iconToActivate);
  };

  return (
    <header className="flex justify-between">
      <img src={LogoIgnite} alt="" />
      <nav className="flex gap-4 items-center">
        <NavLink
          to="/"
          onClick={() => {
            handleChangeIcon("clock");
          }}
        >
          <Timer
            className={` hover:outline-green-500 active:border-b-green-500
             border-transparent border-2   ${
               activeIcon === "clock" ? "text-emerald-600" : "text-white"
             } `}
            size={26}
          />
        </NavLink>
        <NavLink
          to="/history"
          onClick={() => {
            handleChangeIcon("hist");
          }}
        >
          <Scroll
            className={` hover:outline-green-500 active:border-b-green-500
             border-transparent border-2   ${
               activeIcon === "hist" ? "text-emerald-600" : "text-white"
             } `}
            size={26}
          />
        </NavLink>
      </nav>
    </header>
  );
}
