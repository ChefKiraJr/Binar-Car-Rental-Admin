import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.";
import Sidebar from "../components/SidebarHeader";

function Dashboard() {
  const navigate = useNavigate();
  const [kata, setKata] = useState(null);
  const handleSearch = (keyword) => {
    console.log("Kata = ", keyword);
    setKata(keyword);
    navigate("/list");
  };
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 max-h-full overflow-hidden overflow-y-scroll">
        <Navbar onSearch={handleSearch} />
        <Outlet context={{ kata }} />
      </div>
    </div>
  );
}

export default Dashboard;
