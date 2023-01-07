import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

const useAPI = async ({ location }) => {
  const res = await api.post("/", {
    headers: {},
    params: {},
  });

  console.log(res);
};

export default useAPI;
