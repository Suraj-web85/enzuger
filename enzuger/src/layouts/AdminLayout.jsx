import React from "react";
import { Outlet } from "react-router-dom";

import "../components/Admin/Admin.css";
import SideNav from "../components/Admin/SideNav";
import TopNav from "../components/Admin/TopNav";

function AdminLayout() {
  return (
    <div className="en-adpg sflex">
      <SideNav />
      <div className="ead-content">
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
