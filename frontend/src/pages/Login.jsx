import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Context from "../services/Context";

import "../styles/Login.css";

function Login() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const { setUser } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    axios
      .post(
        `${URL}/api/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setUser({
          id: response.data.id,
          email: response.data.email,
          username: response.data.username,
        });
        console.info("Je suis bien connecté", response);
        navigate("/", { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="login_container">
      <h1>Join our animal lovers community !</h1>
      <div className="login_intro">
        <img
          src={`${URL}/public/assets/images/logo_mimi.png`}
          alt="Line art of cat and dog"
        />
        <h2>LOGIN</h2>
        <p>Please sign in before use Little Paws.</p>
        <form className="form_login" onSubmit={submitForm}>
          <label htmlFor="name">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required="required"
            onChange={handleChangeEmail}
            placeholder="Enter your email adress"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required="required"
            onChange={handleChangePassword}
            placeholder="Enter your password"
          />
          <div className="buttonLogin_container">
            <input type="submit" className="submit_login" value="LOGIN" />
          </div>
        </form>
        <div className="link_to_register">
          <p>Not register yet ?</p>
          <span>
            <Link to="/register">Register here</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
