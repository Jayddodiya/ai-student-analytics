import "../css/Admin_sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaChartBar,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
  FaHouseUser 
} from "react-icons/fa";



function Admin_Sidebar() {

  const navigate = useNavigate()
const logout = () => {

  localStorage.removeItem("token");

  localStorage.removeItem("user");

  navigate("/");
};
  return (
    <div className="admin_sidebar">

      <h2 className="admin_sidebar_logo">
        Admin
      </h2>

      <ul className="menu">

        <li>
          <NavLink to="/admin" end>
            <FaHome className="sidebar_icon"/>
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/students">
            <FaUsers className="sidebar_icon"/>
            <span>Students</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/analytics">
            <FaChartBar className="sidebar_icon"/>
            <span>Analytics</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/reports">
            <FaFileAlt className="sidebar_icon"/>
            <span>Reports</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/settings">
            <FaCog className="sidebar_icon"/>
            <span>Settings</span>
          </NavLink>
        </li>

          <li>
          <NavLink to="/admin/profile">
            <FaHouseUser  className="sidebar_icon"/>
            <span>Profile</span>
          </NavLink>
        </li>

<li onClick={logout}>
          <NavLink to="/">
            <FaSignOutAlt  className="sidebar_icon"/>
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>

    </div>
  );
}

export default Admin_Sidebar;