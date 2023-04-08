import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../assets/fi_menu.png";
import Truck from "..//assets/fi_truck.png";
import Home from "..//assets/fi_home.png";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-max lg:h-screen">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 min-h-screen bg-blue-900 relative ${
          !open && "bg-blue-900"
        }`}
      >
        <img
          src={Logo}
          className={`absolute cursor-pointer rounded-full top-9 w-7 right-7`}
          onClick={() => setOpen(!open)}
        />
        <div className="pt-9">
          <button className={`bg-gray-400 h-8 ${open ? "w-28" : "w-9"}`} />
        </div>
        <ul className="pt-6">
          <li className="text-gray text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-200 rounded-md">
            <NavLink to="/">
              <img src={Home} className={`${open && "hidden"} pl-4`} />
              <span
                className={`${
                  !open && `hidden`
                } origin-left duration-200 text-white font-normal text-xl pl-4`}
              >
                Dashboard
              </span>
            </NavLink>
          </li>
          <li className="text-gray text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-200 rounded-md mt-2">
            <NavLink to="list">
              <img src={Truck} className={`${open && "hidden"} pl-4`} />
              <span
                className={`${
                  !open && `hidden`
                } origin-left duration-200 text-white font-normal text-xl pl-4`}
              >
                Cars
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
