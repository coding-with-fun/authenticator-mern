import React, { createContext, useEffect } from "react";
import { useState } from "react";
import {
  UserDelete,
  UserDetails,
  UserSignIn,
  UserSignUp,
  UserUpdate,
} from "../api/user.api";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userDetails, setUserDetails] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsVerified(true);
    }

    FetchDetails();
  }, [isVerified]);

  const SignUpUser = async (body, history, setErrorMessage) => {
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

  const SignInUser = async (body, history, setErrorMessage) => {
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

  const UpdateUser = async (body, history, setResponseMessage) => {
    try {
      const localToken = localStorage.getItem("token");
      const data = await UserUpdate(body, localToken);
      setResponseMessage({
        status: data.data.status,
        msg: data.data.success[0].msg,
      });
      setIsVerified(true);
      FetchDetails();
    } catch (error) {
      console.error(error.response);
      setResponseMessage({
        status: error.response?.data.status,
        msg: error.response?.data.error[0].msg,
      });
      setIsVerified(false);
      setUserDetails(null);
      localStorage.removeItem("token");
      history.push("/");
    }
  };

  const DeleteUser = async (history) => {
    const localToken = localStorage.getItem("token");
    await UserDelete(localToken);
    localStorage.removeItem("token");
    setIsVerified(false);
    history.push("/");
  };

  const FetchDetails = async () => {
    try {
      const localToken = localStorage.getItem("token");

      if (localToken) {
        const data = await UserDetails(localToken);
        setUserDetails(data.data.user);
      } else {
        setUserDetails({
          avatar:
            "http://www.gravatar.com/avatar/aaee2964ee764dbc53cea54b81cc996f?s=200&r=pg&d=mm",
        });
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userDetails,
        isVerified,
        setIsVerified,
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
