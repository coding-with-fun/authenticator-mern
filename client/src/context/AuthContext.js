import React, { createContext, useEffect, useState } from "react";
import { VerifyUser } from "../api/auth.api";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [userToken, setUserToken] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserToken(token);

    if (token) {
      setIsVerified(true);
    }
  }, []);

  const AuthUser = async () => {};

  return (
    <AuthContext.Provider value={{ isVerified, setIsVerified }}>
      {props.children}
    </AuthContext.Provider>
  );
};
