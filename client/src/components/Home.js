import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { isVerified } = useContext(AuthContext);
  const { userDetails } = useContext(UserContext);

  return (
    <div className="home__container">
      <h1>Welcome {isVerified ? userDetails?.name : "Guest"}</h1>
    </div>
  );
};

export default Home;
