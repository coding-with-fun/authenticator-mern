import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";

const SignInForm = () => {
  const { SignInUser } = useContext(UserContext);
  const { setIsVerified } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = () => {
    const body = {
      email: "testuser@yopmail.com",
      password: "testuser",
    };
    SignInUser(body, setIsVerified, history);
  };
  return (
    <div>
      <input type="email" name="" id="" />
      <input type="password" name="" id="" />
      <input type="button" value="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default SignInForm;
