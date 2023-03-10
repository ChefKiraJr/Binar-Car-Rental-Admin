import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  let activeClassName =
    "flex items-center p-2 space-x-6 rounded-md bg-[#006DFF] text-white";

  let inActiveClassName =
    "flex items-center p-2 text-gray-500 space-x-6 rounded-md hover:bg-[#006DFF] hover:text-white";

  return (
    <aside
      className="fixed hidden inset-y-0 z-10 lg:flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-[#0D28A6] border-r shadow-lg lg:z-auto lg:static lg:shadow-none"
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
        </ul>
      </nav>
    </aside>
  );
}
