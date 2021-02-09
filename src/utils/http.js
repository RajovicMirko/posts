import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

const http = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    "content-type": "application/json",
  },
});

export default http;
