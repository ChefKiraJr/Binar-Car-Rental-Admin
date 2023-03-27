import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.";
import Sidebar from "../components/SidebarHeader";

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 max-h-full overflow-hidden overflow-y-scroll">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
