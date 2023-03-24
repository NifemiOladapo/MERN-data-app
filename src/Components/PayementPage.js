import React, { useEffect, useState } from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useNavigate } from "react-router-dom";

export default function PayementPage() {
  const [fundAmount, setFundAmount] = useState(0);

  useEffect(() => {
    setFundAmount(JSON.parse(localStorage.getItem("fundAmount")));
  }, []);

  const navigate = useNavigate();

  const config = {
    public_key: "FLWPUBK_TEST-cf77266fa85c1e23d740981cc5cf0e58-X",
    tx_ref: Date.now(),
    amount: fundAmount,
    currency: "NGN",
    payment_options: "card",
    customer: {
      email: JSON.parse(localStorage.getItem("userInfo")).email,
      // phone_number: "070********",
      name: JSON.parse(localStorage.getItem("userInfo")).username,
    },
    // customizations: {
    //   title: "My store",
    //   description: "Payment for items in cart",
    //   logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    // },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      const user = JSON.parse(localStorage.getItem("userInfo"));
      if (response.status === "successful") {
        fetch("http://localhost:5000/api/fundwallet", {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fundAmount: response.amount,
          }),
        })
          .then((res) => res.json())
          .then(() => navigate("/homepage"));
      }
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
      <h1>Hello ${JSON.parse(localStorage.getItem("userInfo")).username}</h1>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}
