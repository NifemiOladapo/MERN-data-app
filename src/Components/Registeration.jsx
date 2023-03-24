import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/Register.css";

const Registeration = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loadingState, setLoadingState] = useState("Register");

  const registerFunc = async () => {
    if (!email || !password || !username) {
      return alert("Input all the needed fields");
    }

    setLoadingState("Authenticating...");

    await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        username,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === "Please change your email. Email used") {
          return alert(data);
        }
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/homepage");
      });
  };

  return (
    <div className="register">
      <div className="register__wrapper">
        <h1>NIFNIXDATA</h1>
        <h2>Register</h2>
        <div className="form__inputs__wrapper">
          <div className="single__input__wrapper">
            <p>Username*</p>
            <input
              className="form__input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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

          <button className="register__button" onClick={registerFunc}>
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
          <p style={{ color: "white" }}>Already have an account ?</p>
          <Link style={{ color: "blue", textDecoration: "none" }} to="/">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registeration;
