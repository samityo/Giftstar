import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  // const [login, setLogin] = useState(false)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" className="btn logo">
        Giftstar
      </NavLink>
      <button
        className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <NavLink to="/login" className="btn">
              Log In
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" className="btn">
              Sign Up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/mylist" className="btn">
              Your Account
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}
export default Navbar;
