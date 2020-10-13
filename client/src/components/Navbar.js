import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import Logo from "../assets/authentication.png";

const Navbar = () => {
  const { isVerified, setIsVerified } = useContext(AuthContext);
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsVerified(false);
    history.push("/");
  };

  return (
    <nav className="navbar fixed-top navbar-expand">
      <Link to="/" className="navbar-brand">
        <img src={Logo} alt="" />
      </Link>

      <div className=" navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {isVerified ? "Harsh" : "User"}
            </div>
            <div className="dropdown-menu dropdown-menu-right">
              {isVerified ? (
                <>
                  <Link to="/profile" className="dropdown-item">
                    Profile
                  </Link>
                  <div className="dropdown-divider"></div>
                  <div
                    className="dropdown-item signout"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </div>
                </>
              ) : (
                <>
                  <Link to="/signin" className="dropdown-item">
                    Sign In
                  </Link>
                  <Link to="/signup" className="dropdown-item">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
