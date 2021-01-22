import axios from "axios";

export const getData = () => {
  return axios.get("website_url");
};