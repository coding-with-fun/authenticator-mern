import React, { createContext } from "react";

export const HomeContext = createContext();

export const HomeProvider = (props) => {
  const TestServer = async () => {};
  return (
    <HomeContext.Provider value={{ TestServer }}>
      {props.children}
    </HomeContext.Provider>
  );
};
