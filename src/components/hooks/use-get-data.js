import { useState } from "react";
import React from "react";

const useGetData = () => {
  const [data, setData] = useState([]);

  const getData = async (path) => {
    let response = await fetch(`http://localhost:5000/${path}`);
    let value = await response.json();
    setData(await value);
    return await value;
  };

  return [data, getData];
};

export default useGetData;
