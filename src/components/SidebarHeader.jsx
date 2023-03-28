import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../assets/fi_menu.png";
import Truck from "..//assets/fi_truck.png";
import Home from "..//assets/fi_home.png";

export default function Sidebar() {
  // const navigate = useNavigate();
  // let activeClassName =
  //   "flex items-center p-2 space-x-6 rounded-md bg-[#006DFF] text-white";
  // let inActiveClassName =
  //   "flex items-center p-2 text-gray-500 space-x-6 rounded-md hover:bg-[#006DFF] hover:text-white";
  const [open, setOpen] = useState(true);

  return (
    // <aside
    //   className="fixed hidden inset-y-0 z-10 lg:flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-[#0D28A6] border-r shadow-lg lg:z-auto lg:static lg:shadow-none"
    //   id="sidebar-menu"
    // >
    //   <div className="flex items-center justify-between flex-shrink-0 p-2 mr-16">
    //     <span className="p-2 text-2xl font-bold leading-8 tracking-wider whitespace-nowrap">
    //       <div className="flex"></div>
    //     </span>
    //   </div>

    //   <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
    //     <ul className="p-2 overflow-hidden">
    //       <li>
    //         <NavLink
    //           to="/"
    //           className={({ isActive }) =>
    //             isActive ? activeClassName : inActiveClassName
    //           }
    //         >
    //           <i className="bx bx-home"></i>
    //           <span className="text-white-500">Dashboard</span>
    //         </NavLink>
    //       </li>

    //       <li>
    //         <NavLink
    //           to="list"
    //           className={({ isActive }) =>
    //             isActive ? activeClassName : inActiveClassName
    //           }
    //         >
    //           <i className="bx bx-car"></i>
    //           <span className="text-white-500">Cars</span>
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    // </aside>
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen bg-blue-900 relative ${!open && "bg-blue-900"}`}
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
