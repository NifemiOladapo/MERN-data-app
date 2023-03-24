import { useNavigate } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  const navigate = useNavigate();

  const logoutFunc = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <div className="header">
      <h2>Welcome</h2>
      <h3 onClick={logoutFunc}>Logout</h3>
      {/* <div className="borderline"></div> */}
    </div>
  );
};

export default Header;
