import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import loginBackground from "../assets/login-bg.png";
import {
  BrowserRouter,
  Link,
  useNavigate,
  Route,
  Routes,
} from "react-router-dom";
import Routers from "../routers/Routes";
import App from "../App";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showIncorrectLogin, setShowIncorrectLogin] = useState(false);

  let navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    if (email === "admin@mail.com" && password === "admin") {
      return navigate("/dashboard");
    } else {
      setShowIncorrectLogin(true);
    }
  };

  return (
    <div className="d-block d-sm-flex align-items-center justify-content-center  max-vh-100 w-100 ">
      <div className="background-mobil  h-100">
        <img className="w-100 h-100" src={loginBackground} alt="" />
      </div>
      <div className="bg-white login-form  h-100 d-flex align-items-center justify-content-center">
        <Form className="w-100 h-100 mx-5">
          <h1>Welcome, Admin BCR</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            {showIncorrectLogin ? (
              <p className="text-danger incorrect-login-warning">
                Masukkan username dan password yang benar. Perhatikan penggunaan
                huruf kapital.
              </p>
            ) : null}
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button
            onClick={signIn}
            variant="primary"
            className="w-100"
            type="submit"
          >
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
