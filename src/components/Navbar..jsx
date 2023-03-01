import { useState } from "react";
import { useNavigate } from "react-router-dom";

// // const Navbar = () => {
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
//     <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
//       <div class="flex items-center space-x-2">
//         <button
//           className="text-3xl text-gray-700 hover:text-gray-600 focus:outline-none"
//           onClick={toggleAside}
//         >
//           <i className="bx bx-menu"></i>
//         </button>
//         <div>Binal Car Rental</div>
//       </div>

//   <form class="absolute top-0 right-20 mr-20">
//   <label
//     for="default-search"
//     class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//   >
//     Search
//   </label>
//   <div class="relative">
//     <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//       <svg
//         aria-hidden="true"
//         class="w-5 h-5 text-gray-500 dark:text-gray-400"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="2"
//           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//         ></path>
//       </svg>
//     </div>
//     <input
//       type="search"
//       id="default-search"
//       class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//       placeholder="Search"
//       required
//     />
//     <button
//       type="submit"
//       class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//     >
//       Search
//     </button>
//   </div>
// </form>

//   <div>
//     <button
//       className="flex items-center space-x-1 focus:outline-none"
//       onClick={toggleProfile}
//     >
//       <img
//         src="https://plchldr.co/i/40x40?bg=111111"
//         alt="plchldr.co"
//         className="h-9 w-9 rounded-full"
//       />
//       <div className="font-medium">Binar Admin</div>
//     </button>

//     {/* profile dropdown */}
//     {profileOpen && (
//       <div className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md">
//         <div className="flex items-center space-x-2 p-2">
//           <img
//             src="https://plchldr.co/i/40x40?bg=111111"
//             alt="plchldr.co"
//             className="h-9 w-9 rounded-full"
//           />
//           <div className="font-medium">Binar Admin</div>
//         </div>

//         <div className="flex flex-col space-y-3 p-2">
//           <a href="#" className="transition hover:text-blue-600">
//             My Profile
//           </a>
//           <a href="#" className="transition hover:text-blue-600">
//             Edit Profile
//           </a>
//           <a href="#" className="transition hover:text-blue-600">
//             Settings
//           </a>
//         </div>

//         <div className="p-2">
//           <button className="flex items-center space-x-2 transition hover:text-blue-600">
//             <svg
//               className="h-4 w-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//               ></path>
//             </svg>
//             <div>Log Out</div>
//           </button>
//         </div>
//       </div>
//     )}
//         {/* end profile dropdown */}
//       </div>
//     </header>
//   );
// // };

// export default Navbar;

export default function Navbar() {
  // <nav className="fixed z-50 w-full border-b p-3 bg-white" id="navbar">
  //   <div className="flex items-center justify-between p-2">
  //     <div className="flex items-center space-x-3">
  //       <form class="absolute top-0 right-0 ml-50">
  //         <label
  //           for="default-search"
  //           class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  //         >
  //           Search
  //         </label>
  //         <div class="relative">
  //           <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
  //             <svg
  //               aria-hidden="true"
  //               class="w-5 h-5 text-gray-500 dark:text-gray-400"
  //               fill="none"
  //               stroke="currentColor"
  //               viewBox="0 0 24 24"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 stroke-linecap="round"
  //                 stroke-linejoin="round"
  //                 stroke-width="2"
  //                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  //               ></path>
  //             </svg>
  //           </div>
  //           <input
  //             type="search"
  //             id="default-search"
  //             class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //             placeholder="Search"
  //             required
  //           />
  //           <button
  //             type="submit"
  //             class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  //           >
  //             Search
  //           </button>
  //         </div>
  //       </form>
  //       <span className="text-md font-semibold" id="username">
  //         Hello, {localStorage.username}!
  //       </span>
  //     </div>
  //   </div>
  // </nav>
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
      <div class="flex items-center space-x-2">
        <button
          className="text-3xl text-gray-700 hover:text-gray-600 focus:outline-none"
          onClick={toggleAside}
        >
          <i className="bx bx-menu"></i>
        </button>
        <div>Binal Car Rental</div>
      </div>
      <div className="flex justify-between px-5 gap-10">
        <form class="top-0">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

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
