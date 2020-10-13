import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { isVerified } = useContext(AuthContext);

  return <div>{isVerified ? "Harsh" : "Guest"}</div>;
};

export default Home;
