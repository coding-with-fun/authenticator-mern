import React, { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  return (
    <UserContext.Provider value={{ name: "Harsh" }}>
      {props.children}
    </UserContext.Provider>
  );
};
