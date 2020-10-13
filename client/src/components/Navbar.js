import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isVerified, setIsVerified } = useContext(AuthContext);
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsVerified(false);
    history.push("/");
  };

  return (
    <div>
      <div>Navbar</div>
      <Link to="/">Home</Link>
      {!isVerified ? (
        <Link to="/signin">Sign In</Link>
      ) : (
        <div onClick={handleSignOut}>Sign Out</div>
      )}
    </div>
  );
};

export default Navbar;
