import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";

let accessToken;
try {
  const persistRoot = JSON.parse(localStorage.getItem("persist:root"));
  accessToken = JSON.parse(persistRoot?.user || "{}")?.currentUser?.accessToken;
} catch (error) {
  console.error("Error parsing localStorage", error);
}

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${accessToken}` }
});
