import React, { useState } from "react";
import axios from "axios";
import "../css/login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      console.log(res.data);

      alert("login success");

      // Store token
      localStorage.setItem(
        "token",
        res.data.token
      );

      // Store user
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      // Role wise redirect
      if (
        res.data.user.role === "admin"
      ) {

        navigate("/admin");

      } else {

        navigate("/dashboard");

      }

    } catch (error) {

      console.log(error);

      alert(
        error.response.data.message
      );

    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="main">
          {/* <p className='text3'>Log In</p> */}
          <img src="./logo.png" className="logo"></img>
          <p className="text1">Log in to your acccount</p>
          <p className="text2">Welcome back! Please enter your details.</p>
          <Form style={{ width: "65%" }} onSubmit={handleSubmit}>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label className="loginlabel">Email </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                className="logincol"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="loginlabel">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 forgotPassword"
              controlId="formBasicCheckbox"
            >
              <Form.Check
                type="checkbox"
                label="Remember Me"
                className="logincheck"
              />
              <Form.Text
                style={{ color: "#7f56d9", fontSize: "16px", margin: "0" }}
              >
                Forgot Password
              </Form.Text>
            </Form.Group>
            <Button type="submit" className="loginbtn mb-3">
              Submit
            </Button>
            <Button type="submit" className="loginbtn2 mb-3">
              <img src="./google.png" className="loginImg" />
              Sign in with Google
            </Button>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Form.Text text="muted" style={{ textAlign: "center" }}>
                Don't have an account?{" "}
                <a href="/signup">
                  <span
                    style={{ color: "#7f56d9", fontSize: "16px", margin: "0" }}
                  >
                    Sign up
                  </span>
                </a>
              </Form.Text>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
