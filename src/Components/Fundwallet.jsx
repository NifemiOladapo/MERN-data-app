import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Fundwallet = () => {
  useEffect(() => {
    localStorage.setItem("activescreen", JSON.stringify("fundwallet"));
  }, []);

  const fundRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <div
            style={{ display: "flex", marginTop: "200px", marginLeft: "100px" }}
          >
            <input
              style={{
                width: "500px",
                height: "50px",
                outlineWidth: 0,
                marginRight: "10px",
                paddingLeft: "10px",
              }}
              ref={fundRef}
              onKeyPress={(e) => {
                const regex = /[0-9]/;
                const key = String.fromCharCode(e.charCode);
                if (!regex.test(key)) {
                  e.preventDefault();
                }
              }}
              placeholder="Fund Amount"
            />
            <button
              onClick={() => {
                if (fundRef.current.value === "") {
                  return;
                }
                localStorage.setItem(
                  "fundAmount",
                  JSON.stringify(fundRef.current.value)
                );
                navigate("/payement");
              }}
            >
              Fund Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fundwallet;
