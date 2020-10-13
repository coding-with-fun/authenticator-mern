import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { UserDetails, UserSignIn } from "../api/user.api";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    FetchDetails();
  }, []);

  const SignUpUser = async () => {};

  const SignInUser = async (body, setIsVerified, history) => {
    const data = await UserSignIn(body);
    localStorage.setItem("token", data.data.token);
    setIsVerified(true);
    FetchDetails();
    history.push("/");
  };

  const UpdateUser = async () => {};

  const DeleteUser = async () => {};

  const FetchDetails = async () => {
    const localToken = localStorage.getItem("token");

    if (localToken) {
      const data = await UserDetails(localToken);
      setUserDetails(data.data.user);
    } else {
      setUserDetails(null);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userDetails,
        SignUpUser,
        SignInUser,
        UpdateUser,
        DeleteUser,
        FetchDetails,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
