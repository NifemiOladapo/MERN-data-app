import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../Styles/Dashboard.css";

const Homepage = () => {
  const [walletBalance, setWalletBalance] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user) {
      navigate("/");
    }
  });

  const user = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    fetch("http://localhost:5000/api/mywallet", {
      method: "GET",
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then((res) => res.json())
      .then((data) => setWalletBalance(data.balance));
  }, []);

  useEffect(() => {
    localStorage.setItem("activescreen", JSON.stringify("dashboard"));
  }, []);

  return (
    // <div style={{height}}>
    <div className="dashboard">
      <Header />
      <div className="dashboard__sidebar__wrapper">
        <Sidebar />
        <div className="main__dashboard">
          <div className="welcomemesage__fundwallet__wrapper">
            <div className="welcome__message">
              <h1>Welcome to NifnixData Enterprise</h1>
              <p>
                NifNixData Enterprise is a brand that provides cheap and
                affordable data bundles to its users, provides data bundles and
                airtime for all levels of it users, and makes it affordable by
                them
              </p>
            </div>
            <div
              onClick={() => navigate("/fundwallet")}
              className="fund__wallet"
            >
              Fund Wallet
            </div>
          </div>
          <div className="others">
            <div className="wallet__balance">
              <p>Wallet balance</p>
              <h3># {walletBalance}</h3>
            </div>
            <div className="transactions">
              <p>Transactions</p>
            </div>
            <div className="datatransactions">
              <p>Data Transactions</p>
            </div>
            <div onClick={() => navigate("/buydata")} className="buydata">
              <p>But Data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Homepage;
