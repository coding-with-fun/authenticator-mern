import Axios from "axios";

let BASE_URL = process.env.REACT_APP_SERVER_URL;
BASE_URL = BASE_URL + "/user";

export const UserSignUp = async (body) => {
  const URL = BASE_URL + "/signup";

  return await Axios.post(URL, body);
};

export const UserSignIn = async (body) => {
  const URL = BASE_URL + "/signin";

  return await Axios.post(URL, body);
};

export const UserUpdate = async (body, token) => {
  const URL = BASE_URL + "/update";
  const headers = {
    "x-auth-token": token,
  };

  return await Axios.patch(URL, body, headers);
};

export const UserDelete = async (body, token) => {
  const URL = BASE_URL + "/delete";
  const headers = {
    "x-auth-token": token,
  };

  return await Axios.delete(URL, body, headers);
};

export const UserDetails = async (token) => {
  const URL = BASE_URL + "/details";
  const headers = {
    "x-auth-token": token,
  };

  return await Axios.get(URL, headers);
};
