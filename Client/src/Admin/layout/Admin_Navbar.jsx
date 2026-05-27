import "react";
import "../css/Admin_navbar.css";
import { Form } from "react-bootstrap";

function Admin_Navbar() {
  return (
    <div className="admin_navbar">
      {/* <h2>Dashboard</h2> */}
      <Form>
        <Form.Control
          type="text"
          placeholder="Search"
          className=" mr-sm-2"
        />{" "}
      </Form>
      <div className="admin_navRight">
        <button className="admin_nav_btn">🔔</button>

        <img src="https://i.pravatar.cc/40" alt="" className="admin_avatar" />
      </div>
    </div>
  );
}

export default Admin_Navbar;
