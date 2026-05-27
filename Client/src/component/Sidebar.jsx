import "../css/sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/");
  };
  return (
    <div className="sidebar">
      <h2 className="sidebar_logo">Admin</h2>

      <ul>
        <li>
          <NavLink to="/" end>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/analytics">Analytics</NavLink>
        </li>

        <li>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </li>

        <li>
          <NavLink to="/reports">Reports</NavLink>
        </li>

        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>

        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
        <li onClick={logout}>
           <NavLink to="/">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
