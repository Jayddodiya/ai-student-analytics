import  "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import '../css/layout.css'

function Layout() {
  return (
    <div className="mainLayout">

      <Sidebar />

      <div className="pageContent">

        <Navbar />

        {/* Page Content */}
        <div className="content">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default Layout;