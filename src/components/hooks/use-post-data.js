import React from "react";
const usePostData = () => {
  const postData = async (data, path) => {
    const resp = await fetch(`http://localhost:5000/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    });

    return await resp;
  };

  return postData;
};

export default usePostData;
