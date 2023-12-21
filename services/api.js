import axios from "axios";

export const api = axios.create({
  baseURL: "https://icanhazdadjoke.com/",
  timeout: 1000,
});