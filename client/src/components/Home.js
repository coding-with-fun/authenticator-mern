import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { userDetails, isVerified } = useContext(UserContext);

  return (
    <div className="home__container">
      <h1>Welcome {isVerified ? userDetails?.name : "Guest"}</h1>
    </div>
  );
};

export default Home;
