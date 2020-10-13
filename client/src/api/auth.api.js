import Axios from "axios";

let BASE_URL = process.env.REACT_APP_SERVER_URL;
BASE_URL = BASE_URL + "/verify";

export const VerifyUser = async (token) => {
  const URL = BASE_URL;
  const headers = {
    "x-auth-token": token,
  };

  return await Axios.get(URL, headers);
};
