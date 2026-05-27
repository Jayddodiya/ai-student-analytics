import React, { useState } from "react";

import "../css/login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";

const Signup = () => {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  college: "",
  codeforcesHandle: "",
  skills: "",
});

 const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...formData,

          skills: formData.skills.split(","),
        }),
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {
        alert("Register Success");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="main">
          {/* <p className='text3'>Log In</p> */}
          <img src="./logo.png" className="logo"></img>

          <p className="text1">Create an account</p>
          {/* <p className='text2'>Welco me back! Please enter your details.</p> */}
          <Form style={{ width: "65%"  }} onSubmit={handleSubmit}>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label className="loginlabel">Name </Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Name"
                className="logincol"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label className="loginlabel">Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="logincol"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="loginlabel">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                name="password"
              />
            </Form.Group>
            <Form.Group className="mb-3 forgotPassword">
              <Form.Check
                type="checkbox"
                label="Must be at least 8 characters"
                className="logincheck"
                checked
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3 forgotPassword">
              <Form.Check
                type="checkbox"
                label="Must contain one special character"
                className="logincheck"
                checked
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label className="loginlabel">College Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter College Name"
                className="logincol"
                value={formData.college}
                onChange={handleChange}
                name="college"
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label className="loginlabel">Codeforces Handle </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Codeforces Handle"
                className="logincol"
                value={formData.codeforcesHandle}
                onChange={handleChange}
                name="codeforcesHandle"
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label className="loginlabel">Skills</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Codeforces Handle"
                className="logincol"
                value={formData.skills}
                onChange={handleChange}
                name="skills"
              />
            </Form.Group>
            <Button type="submit" className="loginbtn mb-3">
              Get Started
            </Button>
            <Button type="submit" className="loginbtn2 mb-3">
              <img src="./google.png" className="loginImg" />
              Sign up with Google
            </Button>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Form.Text text="muted" style={{ textAlign: "center" }}>
                Already have an account?{" "}
                <a href="/">
                  <span
                    style={{ color: "#7f56d9", fontSize: "16px", margin: "0" }}
                  >
                    Log In
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

export default Signup;
