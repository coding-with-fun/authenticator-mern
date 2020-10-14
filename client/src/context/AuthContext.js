import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsVerified(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isVerified, setIsVerified }}>
      {props.children}
    </AuthContext.Provider>
  );
};
