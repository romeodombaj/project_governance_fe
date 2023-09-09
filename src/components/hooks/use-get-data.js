import { useEffect, useState } from "react";

const useGetData = (path) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/${path}`)
      .then((response) => response.json())
      .then((data) => {
        setDataList(data);
      });
  }, []);

  return dataList;
};

export default useGetData;
