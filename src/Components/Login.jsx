import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingState, setLoadingState] = useState("Sign In");

  const loginFunc = async () => {
    if (!email || !password) {
      return alert("Input all the needed fields");
    }

    setLoadingState("Processing...");

    await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoadingState("Sign In");

        if (data === "User not found") {
          return alert(data);
        }

        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/homepage");
      });
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <h1>NIFNIXDATA</h1>
        <h2>Sign In</h2>
        <div className="form__inputs__wrapper">
          <div className="single__input__wrapper">
            <p>Email*</p>
            <input
              className="form__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="single__input__wrapper">
            <p>Password*</p>
            <input
              className="form__input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login__button" onClick={loginFunc}>
            {loadingState}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "35px",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <p style={{ color: "white" }}>Don't have an account yet ?</p>
          <Link
            style={{ color: "blue", textDecoration: "none" }}
            to="/register"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
