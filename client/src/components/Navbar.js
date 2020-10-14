import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../assets/authentication.png";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { isVerified, setIsVerified } = useContext(AuthContext);
  const { userDetails } = useContext(UserContext);

  const [avatar, setAvatar] = useState(null);

  const history = useHistory();

  useEffect(() => {
    if (userDetails) {
      setAvatar(userDetails.avatar);
    }

    if (!isVerified) {
      setAvatar(
        "http://www.gravatar.com/avatar/aaee2964ee764dbc53cea54b81cc996f?s=200&r=pg&d=mm"
      );
    }
  }, [userDetails, isVerified]);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsVerified(false);
    history.push("/");
  };

  return (
    <nav className="navbar fixed-top navbar-expand">
      <Link to="/" className="navbar-brand">
        <img src={Logo} alt="Logo" />
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
              <img className="avatar" src={avatar} alt="User Avatar" />
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
