// import React, { useEffect, useState } from "react";

// import "boxicons";
// import { Link } from "react-router-dom";
// // import from 'react-icons/bs';

// const SidebarHeader = () => {
//   const script = document.createElement("script");
//   script.src = "https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js";
//   script.defer = true;
//   document.body.appendChild(script);

//   const link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.href = "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css";
//   document.head.appendChild(link);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [asideOpen, setAsideOpen] = useState(true);

//   const toggleProfile = () => {
//     setProfileOpen(!profileOpen);
//   };

//   const toggleAside = () => {
//     setAsideOpen(!asideOpen);
//   };
//   return (
//     <div className="flex flex-col h-screen">
//       {/* header */}

//       <div className="flex">
//         {/* aside */}
//         <aside
//           className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-[#0D28A6] p-2"
//           style={{ display: asideOpen ? "block" : "none", height: "90.5vh" }}
//         >
//           <Link
//             to="/"
//             className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-blue-600 hover:text-black-600"
//           >
//             <span className="text-2xl text-white">
//               <i className="bx bx-home"></i>
//             </span>
//             <span className="text-white">Dashboard</span>
//           </Link>

//           <Link
//             to="list"
//             className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-blue-600 hover:text-black-600"
//           >
//             <span className="text-2xl text-white">
//               <i className="bx bx-car"></i>
//             </span>
//             <span className="text-white">List Car</span>
//           </Link>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default SidebarHeader;

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  let activeClassName =
    "flex items-center p-2 space-x-6 rounded-md bg-[#006DFF] text-white";

  let inActiveClassName =
    "flex items-center p-2 text-gray-500 space-x-6 rounded-md hover:bg-[#006DFF] hover:text-white";

  // const handleLogout = (event) => {
  //   event.preventDefault();
  //   localStorage.clear();
  //   navigate("/login");
  // };

  return (
    <aside
      className="fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-[#0D28A6] border-r shadow-lg lg:z-auto lg:static lg:shadow-none"
      id="sidebar-menu"
    >
      <div className="flex items-center justify-between flex-shrink-0 p-2 mr-16">
        <span className="p-2 text-2xl font-bold leading-8 tracking-wider whitespace-nowrap">
          <div className="flex"></div>
        </span>
      </div>

      <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
        <ul className="p-2 overflow-hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : inActiveClassName
              }
            >
              <i className="bx bx-home"></i>
              <span className="text-white-500">Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="list"
              className={({ isActive }) =>
                isActive ? activeClassName : inActiveClassName
              }
            >
              <i className="bx bx-car"></i>
              <span className="text-white-500">Cars</span>
            </NavLink>
          </li>

          {/* <hr className="pt-2" />
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center p-2 text-gray-500 space-x-6 rounded-md hover:text-[#2153e9]"
            >
              <span className="text-white-500">Logout</span>
            </button>
          </li> */}
        </ul>
      </nav>
    </aside>
  );
}
