import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Sidebar.css";
const Sidebar = () => {
  const [walletBalance, setWalletBalance] = useState(0);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const activeScreen = JSON.parse(localStorage.getItem("activescreen"));

  useEffect(() => {
    fetch("http://localhost:5000/api/mywallet", {
      method: "GET",
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then((res) => res.json())
      .then((data) => setWalletBalance(data.balance));
  }, []);

  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="user">
        <div className="info">
          <h2>{JSON.parse(localStorage.getItem("userInfo")).username}</h2>
          <h3>💲{walletBalance}</h3>
        </div>
      </div>
      <div className="sidebar__items">
        <div
          onClick={() => {
            localStorage.setItem("activescreen", JSON.stringify("dashboard"));
            navigate("/homepage");
          }}
          style={{
            backgroundColor:
              activeScreen === "dashboard" ? "white" : "transparent",
            borderRadius: "8px",
            color: activeScreen === "dashboard" ? "#1a2035" : "#777",
          }}
          className="dashboard"
        >
          <p>Dashboard</p>
        </div>
        <div
          onClick={() => navigate("/buydata")}
          style={{
            backgroundColor:
              activeScreen === "buydata" ? "white" : "transparent",
            borderRadius: "8px",
            color: activeScreen === "buydata" ? "#1a2035" : "#777",
          }}
          className="buydata"
        >
          <p>Buy Data</p>
        </div>
        <div
          onClick={() =>
            localStorage.setItem("activescreen", JSON.stringify("buyairtime"))
          }
          style={{
            backgroundColor:
              activeScreen === "buyairtime" ? "white" : "transparent",
            borderRadius: "8px",
            color: activeScreen === "buyairtime" ? "#1a2035" : "#777",
          }}
          className="buyairtime"
        >
          <p>Buy Airtime</p>
        </div>
        <div
          onClick={() => {
            localStorage.setItem("activescreen", JSON.stringify("fundwallet"));
            navigate("/fundwallet");
          }}
          style={{
            backgroundColor:
              activeScreen === "fundwallet" ? "white" : "transparent",
            borderRadius: "8px",
            color: activeScreen === "fundwallet" ? "#1a2035" : "#777",
          }}
          className="fundwallet"
        >
          <p>Fund Wallet</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
