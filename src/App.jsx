import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Registeration from "./Components/Registeration";
import PayementPage from "./Components/PayementPage";
import Homepage from "./Components/Homepage";
import "./App.css";
import Fundwallet from "./Components/Fundwallet";
import Buydata from "./Components/Buydata";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Registeration />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="payement" element={<PayementPage />} />
        <Route path="fundwallet" element={<Fundwallet />} />
        <Route path="buydata" element={<Buydata />} />
      </Routes>
    </>
  );
};

export default App;
