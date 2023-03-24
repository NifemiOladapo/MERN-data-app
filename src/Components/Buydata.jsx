import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Buydata = () => {
  useEffect(() => {
    localStorage.setItem("activescreen", JSON.stringify("buydata"));
  }, []);

  const mtnSMEBundleList = [
    { bundleName: "500.0 MB	30 days", bundleAmount: 108, networkId: 1 },
    // { bundleName: "500.0 GB	90 days", bundleAmount: 108000 },
    { bundleName: "500.0 MB	30 days (SME)2", bundleAmount: 115, networkId: 1 },
    { bundleName: "10.0 GB	30 days(SME)2", bundleAmount: 2230, networkId: 1 },
    { bundleName: "5.0 GB	30days (SME)2", bundleAmount: 1110, networkId: 1 },
    { bundleName: "4.0 GB	30 days (SME)2", bundleAmount: 888, networkId: 1 },
    { bundleName: "3.0 GB	30 days (SME)2", bundleAmount: 669, networkId: 1 },
    { bundleName: "2.0 GB	30 days (SME)2", bundleAmount: 446, networkId: 1 },
    { bundleName: "1.0 GB	30 days (SME)2", bundleAmount: 223, networkId: 1 },
    { bundleName: "1.0 GB	30 days", bundleAmount: 216, networkId: 1 },
    // { bundleName: "1.0 TB	90days", bundleAmount: 216000 },
    // { bundleName: "20.0 TB	90 days", bundleAmount: 4320000 },
    { bundleName: "2.0 GB	30 days", bundleAmount: 432, networkId: 1 },
    { bundleName: "3.0 GB	30 days", bundleAmount: 648, networkId: 1 },
    { bundleName: "10.0 GB	30 days", bundleAmount: 2160, networkId: 1 },
    { bundleName: "5.0 GB	30 days", bundleAmount: 1080, networkId: 1 },
  ];

  const mtnCorporateBundleList = [
    {
      bundleName: "2.0 GB	30 days (corporate gifting)",
      bundleAmount: 456,
      networkId: 1,
    },
    {
      bundleName: "150.0 MB	30 days corporate gifting",
      bundleAmount: 65,
      networkId: 1,
    },
    {
      bundleName: "250.0 MB	30 days corporate gifting",
      bundleAmount: 85,
      networkId: 1,
    },
    {
      bundleName: "10.0 GB	30 days corporate gifting",
      bundleAmount: 2280,
      networkId: 1,
    },
    {
      bundleName: "20.0 GB	30 days corporate gifting",
      bundleAmount: 4460,
      networkId: 1,
    },
    {
      bundleName: "40.0 GB	30 days corporate gifting",
      bundleAmount: 9200,
      networkId: 1,
    },
    {
      bundleName: "15.0 GB	30 days corporate gifting",
      bundleAmount: 3345,
      networkId: 1,
    },
    {
      bundleName: "3.0 GB	30 days (corporate gifting)",
      bundleAmount: 684,
      networkId: 1,
    },
    {
      bundleName: "5.0 GB	30 days (corporate gifting)",
      bundleAmount: 1140,
      networkId: 1,
    },
    {
      bundleName: "1.0 GB	30 days (corporate gifting)",
      bundleAmount: 228,
      networkId: 1,
    },
    {
      bundleName: "12.0 GB	30 days(corporate gifting)",
      bundleAmount: 2676,
      networkId: 1,
    },
    {
      bundleName: "50.0 GB	30 days(corporate gifting)",
      bundleAmount: 11500,
      networkId: 1,
    },
    {
      bundleName: "60.0 GB	30 days(corporate gifting)",
      bundleAmount: 13800,
      networkId: 1,
    },
  ];

  const mtnGiftingBundleList = [
    { bundleName: "4.5 GB	30 days", bundleAmount: 1880, networkId: 1 },
    { bundleName: "20.0 GB	30 days", bundleAmount: 4750, networkId: 1 },
    { bundleName: "2.5 GB	2 days", bundleAmount: 470, networkId: 1 },
    { bundleName: "75.0 GB	30 days", bundleAmount: 14100, networkId: 1 },
    { bundleName: "1.0 GB	1 day", bundleAmount: 285, networkId: 1 },
    { bundleName: "25.0 GB	30 days", bundleAmount: 5700, networkId: 1 },
    {
      bundleName: "2.0 GB	Weekly 7days(2gb direct)",
      bundleAmount: 940,
      networkId: 1,
    },
    { bundleName: "6.0 GB	7-day (6gb)", bundleAmount: 1410, networkId: 1 },
    { bundleName: "1.0 GB	7-days(weekly)", bundleAmount: 470, networkId: 1 },
    { bundleName: "10.0 GB	30 days(direct)", bundleAmount: 2820, networkId: 1 },
    { bundleName: "40.0 GB	30 days (direct)", bundleAmount: 9400, networkId: 1 },
    { bundleName: "12.0 GB	30 days (direct)", bundleAmount: 3290, networkId: 1 },
    { bundleName: "6.0 GB	30 days", bundleAmount: 2350, networkId: 1 },
    { bundleName: "15.0 GB	30 days", bundleAmount: 2820, networkId: 1 },
    { bundleName: "25.0 GB	30 days", bundleAmount: 5640, networkId: 1 },
    { bundleName: "120.0 GB	30 days", bundleAmount: 18800, networkId: 1 },
    { bundleName: "200.0 GB	30 days", bundleAmount: 28200, networkId: 1 },
  ];

  const gloGiftingBundlesList = [
    { bundleName: "138.0 GB	30 days", bundleAmount: 18400 },
    { bundleName: "50.0 GB	30 days", bundleAmount: 9200 },
    { bundleName: "93.0 GB	30 days", bundleAmount: 13800 },
    { bundleName: "1.9 GB	30days 1.9gbday + 2gbnite=3.9g", bundleAmount: 940 },
    { bundleName: "119.0 GB	30 days", bundleAmount: 16560 },
    { bundleName: "3.5 GB	30days 3.5gbday + 4gbnite=7.5g", bundleAmount: 1410 },
    { bundleName: "20.0 GB	30days 20gday +4gbnite=24gb", bundleAmount: 4600 },
    { bundleName: "4.0 GB	30days 14gday +4gbnite=18gb", bundleAmount: 3680 },
    { bundleName: "10.0 GB	30days 10gday +4gbnite=14gb", bundleAmount: 2760 },
    { bundleName: "16.8 GB	30days 6.8gday +4gbnite=10.8g", bundleAmount: 2300 },
    { bundleName: "5.2 GB	30days 5.2gbday + 4gbnite=9.2g", bundleAmount: 1840 },
    { bundleName: "27.0 GB	30days 27gday +2gbnite=29gb", bundleAmount: 7360 },
  ];

  const gloCorporateBundlesList = [
    { bundleName: "5.0 GB	30 days(corporate gifting)", bundleAmount: 1065 },
    { bundleName: "500.0 MB	30 days(corporate gifting)", bundleAmount: 115 },
    { bundleName: "3.0 GB	30 days(corporate gifting)", bundleAmount: 639 },
    { bundleName: "10.0 GB	30 days(corporate gifting)", bundleAmount: 2130 },
    { bundleName: "1.0 GB	30 days(corporate gifting)", bundleAmount: 213 },
    { bundleName: "2.0 GB	30 days(corporate gifting)", bundleAmount: 426 },
    { bundleName: " 200.0 MB	14 days(corporate gifting)", bundleAmount: 47 },
  ];

  const airtelGiftingBundlesList = [
    { bundleName: "40.0 GB	30 days", bundleAmount: 9700 },
    { bundleName: "75.0 GB	30 days", bundleAmount: 14550 },
    { bundleName: "110.0 GB	30(120gb) days", bundleAmount: 19400 },
    { bundleName: "350.0 MB	7 days(weekly)", bundleAmount: 291 },
    { bundleName: "6000.0 MB	7 days(weekly)", bundleAmount: 1455 },
    { bundleName: "20.0 GB	30 days ", bundleAmount: 4850 },
  ];

  const airtelCorporateBundlesList = [
    { bundleName: "500.0 MB	30 days corporate gifting", bundleAmount: 115 },
    { bundleName: "100.0 MB	7days", bundleAmount: 40 },
    { bundleName: "20.0 GB	30 days", bundleAmount: 4600 },
    { bundleName: "15.0 GB	30 days", bundleAmount: 3750 },
    { bundleName: "10.0 GB	30 days(corporate gifting)", bundleAmount: 2300 },
    { bundleName: "	1.0 GB	30 days corporate gifting", bundleAmount: 230 },
    { bundleName: "2.0 GB	30 days corporate gifting", bundleAmount: 460 },
    { bundleName: "5.0 GB	30 days corporate gifting", bundleAmount: 1150 },
  ];

  const [dataBundle, setDataBundle] = useState([]);

  const [network, setNetwork] = useState("MTN");
  const [dataPlan, setDataPlan] = useState("SME");

  useEffect(() => {
    if (network === "MTN" && dataPlan === "SME") {
      setDataBundle(mtnSMEBundleList);
    } else if (network === "MTN" && dataPlan === "GIFTING") {
      setDataBundle(mtnGiftingBundleList);
    } else if (network === "MTN" && dataPlan === "CORPORATE GIFTING") {
      setDataBundle(mtnCorporateBundleList);
    }
  }, [network, dataPlan]);

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            // justifyContent: "center",
            flexDirection: "column",
            // backgroundColor: "blue",
          }}
        >
          <div
            style={{
              width: "90%",
              // backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
              marginTop: "60px",
              marginBottom: "60px",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Buy Data Plan</h2>
            <div
              style={{
                width: "100%",
                // backgroundColor: "green",
                boxShadow: "0px 0px 1.8rem 0px rgb(10% 10% 10% / 10%)",
                padding: "50px",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
              }}
              className="data__informations__wrapper"
            >
              <div
                style={{ width: "100%", marginBottom: "30px" }}
                className="network"
              >
                <p style={{ marginBottom: "10px" }}>Network *</p>
                <select
                  onChange={(e) => {
                    console.log(e.target.value);
                    setNetwork(e.target.value);
                  }}
                  style={{
                    width: "100%",
                    height: "40px",
                    paddingLeft: "20px",
                    borderRadius: "5px",
                  }}
                >
                  <option value={"MTN"}>MTN</option>
                  <option value={"GLO"}>GLO</option>
                  <option value={"9 MOBILE"}>9 MOBILE</option>
                  <option value={"AIRTEL"}>AIRTEL</option>
                </select>
              </div>
              <div
                style={{ width: "100%", marginBottom: "30px" }}
                className="datatype"
              >
                <p style={{ marginBottom: "10px" }}>Data Type *</p>
                <select
                  onChange={(e) => {
                    console.log(e.target.value);
                    setDataPlan(e.target.value);
                  }}
                  style={{
                    width: "100%",
                    height: "40px",
                    paddingLeft: "20px",
                    borderRadius: "5px",
                  }}
                >
                  <option value={"SME"}>SME</option>
                  <option value={"CORPORATE GIFTING"}>CORPORATE GIFTING</option>
                  <option value={"GIFTING"}>GIFTING</option>
                </select>
              </div>
              <div
                style={{ width: "100%", marginBottom: "30px" }}
                className="phonenumber"
              >
                <p style={{ marginBottom: "10px" }}>Phone Number *</p>
                <input
                  maxLength={"11"}
                  onKeyPress={(e) => {
                    const regex = /[0-9]/;
                    const key = String.fromCharCode(e.charCode);
                    if (!regex.test(key)) {
                      e.preventDefault();
                    }
                  }}
                  style={{
                    width: "100%",
                    height: "40px",
                    fontSize: "17px",
                    paddingLeft: "20px",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div
                style={{ width: "100%", marginBottom: "30px" }}
                className="dataamount"
              >
                <p style={{ marginBottom: "10px" }}>Amount *</p>
                <input
                  onKeyPress={(e) => {
                    const regex = /[0-9]/;
                    const key = String.fromCharCode(e.charCode);
                    if (!regex.test(key)) {
                      e.preventDefault();
                    }
                  }}
                  style={{
                    width: "100%",
                    height: "40px",
                    fontSize: "17px",
                    paddingLeft: "20px",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div
                style={{ width: "100%", marginBottom: "30px" }}
                className="datatype"
              >
                <p style={{ marginBottom: "10px" }}>Data Bundle *</p>
                <select
                  style={{
                    width: "100%",
                    height: "40px",
                    paddingLeft: "20px",
                    borderRadius: "5px",
                  }}
                >
                  {dataBundle.map((bundle) => {
                    return (
                      <option value={bundle.bundleName}>
                        {bundle.bundleName} - #{bundle.bundleAmount}
                      </option>
                    );
                  })}
                  {/* <option value={"option1"}>GIFTING</option>
                  <option value={"option2"}>CORPORATE GIFTING</option>
                  <option value={"option3"}>SME</option> */}
                </select>
              </div>
              <div
                style={{
                  height: "50px",
                  backgroundColor: "blue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                BUY DATA
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buydata;
