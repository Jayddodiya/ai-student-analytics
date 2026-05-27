import "react";
import "../css/navbar.css";
import { Form } from "react-bootstrap";

function Navbar() {
  return (
    <div className="navbar">
      {/* <h2>Dashboard</h2> */}
      <Form>
        <Form.Control
          type="text"
          placeholder="Search"
          className=" mr-sm-2"
        />{" "}
      </Form>
      <div className="navRight">
        <button className="nav_btn">🔔</button>

        <img src="https://i.pravatar.cc/40" alt="" className="avatar" />
      </div>
    </div>
  );
}

export default Navbar;
