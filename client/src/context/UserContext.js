import React, { createContext } from "react";
import { UserSignIn } from "../api/user.api";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const SignUpUser = async () => {};

  const SignInUser = async (body, setIsVerified, history) => {
    const userData = await UserSignIn(body);
    console.log(userData);
    localStorage.setItem("token", userData.data.token);
    setIsVerified(true);
    history.push("/");
  };

  const UpdateUser = async () => {};

  const DeleteUser = async () => {};

  const FetchDetails = async () => {};

  return (
    <UserContext.Provider
      value={{ SignUpUser, SignInUser, UpdateUser, DeleteUser, FetchDetails }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
