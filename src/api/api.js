import axios from "axios";

export const getInfoOfAsteroidApi = (asteroidId) => {
  return axios.get(`${process.env.REACT_APP_ASTEROID_URL}/${asteroidId}?API_KEY=${process.env.REACT_APP_ASTEROID_API_KEY}`);
};

export const getInfoOfrendomAsteroidApi = () =>{
  return axios.get(`${process.env.REACT_APP_ASTEROID_URL}/browse?API_KEY=${process.env.REACT_APP_ASTEROID_API_KEY}`);
}