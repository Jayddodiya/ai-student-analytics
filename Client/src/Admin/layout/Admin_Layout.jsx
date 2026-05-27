import  "react";
import { Outlet } from "react-router-dom";

import '../css/Admin_layout.css'
import Admin_Sidebar from "./Admin_Sidebar";
import Admin_Navbar from "./Admin_Navbar";

function Admin_Layout() {
  return (
    <div className="admin_mainLayout">

      <Admin_Sidebar/>

      <div className="admin_pageContent">

        <Admin_Navbar/>

        {/* Page Content */}
        <div className="admin_content">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default Admin_Layout;