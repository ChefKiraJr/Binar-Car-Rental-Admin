import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onSearch = () => {} }) {
  const [keyword, setKeyword] = useState(null);
  const navigate = useNavigate();
  const script = document.createElement("script");
  script.src = "https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js";
  script.defer = true;
  document.body.appendChild(script);

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css";
  document.head.appendChild(link);
  const [profileOpen, setProfileOpen] = useState(false);
  const [asideOpen, setAsideOpen] = useState(true);

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const toggleAside = () => {
    setAsideOpen(!asideOpen);
  };
  return (
    <div className="sticky top-0 flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
      <div className="flex items-center space-x-2">
        <button
          className="text-3xl text-gray-700 hover:text-gray-600 focus:outline-none"
          onClick={toggleAside}
        >
          <i className="bx bx-menu"></i>
        </button>
        <div className="block">Binal Car Rental</div>
      </div>
      <div className="flex justify-between px-5 gap-10">
        {/* <form className="top-0"> */}
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => onSearch(keyword)}
          >
            Search
          </button>
        </div>
        {/* </form> */}

        <div className="my-auto">
          <button
            className="flex items-center space-x-1 focus:outline-none"
            onClick={toggleProfile}
          >
            <img
              src="https://plchldr.co/i/40x40?bg=111111"
              alt="plchldr.co"
              className="h-9 w-9 rounded-full"
            />
            <div className="font-medium">Binar Admin</div>
          </button>

          {/* profile dropdown */}
          {profileOpen && (
            <div className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md">
              <div className="flex items-center space-x-2 p-2">
                <img
                  src="https://plchldr.co/i/40x40?bg=111111"
                  alt="plchldr.co"
                  className="h-9 w-9 rounded-full"
                />
                <div className="font-medium">Binar Admin</div>
              </div>

              <div className="p-2">
                <button
                  className="flex items-center space-x-2 transition hover:text-blue-600"
                  onClick={handleLogout}
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  <div>Log Out</div>
                </button>
              </div>
            </div>
          )}
          {/* end profile dropdown */}
        </div>
      </div>
    </div>
  );
}
