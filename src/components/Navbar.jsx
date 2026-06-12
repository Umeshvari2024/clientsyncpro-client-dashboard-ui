import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={logo} alt="logo" />
        <h2>ClientSync Pro</h2>
      </div>

      <div className="nav-right">
        <span>🔔</span>
        <span>ABC Technologies</span>
      </div>
    </div>
  );
}

export default Navbar;