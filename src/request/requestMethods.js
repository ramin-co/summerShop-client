import axios from "axios";

const BASE_URL = "http://212.23.201.180:80/api";


const TOKEN =
  localStorage.getItem("persist:root") &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser.token
    : "not token";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const userRequset = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    token: TOKEN,
  },
});
