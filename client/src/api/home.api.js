import Axios from "axios";

let BASE_URL = process.env.REACT_APP_SERVER_URL;
BASE_URL = BASE_URL + "/";

export const DefaultRoute = async () => {
  const URL = BASE_URL;

  return await Axios.get(URL);
};
