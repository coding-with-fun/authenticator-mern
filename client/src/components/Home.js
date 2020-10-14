import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { isVerified } = useContext(AuthContext);
  const { userDetails } = useContext(UserContext);

  return <div>{isVerified ? userDetails?.name : "Guest"}</div>;
};

export default Home;
