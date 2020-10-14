import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { UserDetails, UserSignIn, UserSignUp } from "../api/user.api";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    FetchDetails();
  }, []);

  const SignUpUser = async (body, setIsVerified, history, setErrorMessage) => {
    try {
      const data = await UserSignUp(body);
      localStorage.setItem("token", data.data.token);
      setIsVerified(true);
      FetchDetails();
      history.push("/");
    } catch (error) {
      console.error(error.response);
      setErrorMessage(error.response.data.error[0].msg);
    }
  };

  const SignInUser = async (body, setIsVerified, history, setErrorMessage) => {
    try {
      const data = await UserSignIn(body);
      localStorage.setItem("token", data.data.token);
      setIsVerified(true);
      FetchDetails();
      history.push("/");
    } catch (error) {
      console.error(error.response);
      setErrorMessage(error.response.data.error[0].msg);
    }
  };

  const UpdateUser = async () => {};

  const DeleteUser = async () => {};

  const FetchDetails = async () => {
    try {
      const localToken = localStorage.getItem("token");

      if (localToken) {
        const data = await UserDetails(localToken);
        setUserDetails(data.data.user);
      } else {
        setUserDetails(null);
      }
    } catch (error) {
      console.error(error.response);
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
