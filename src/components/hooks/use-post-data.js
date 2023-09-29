import React from "react";
const usePostData = () => {
  const postData = async (data, path) => {
    const resp = await fetch(
      `https://project-governance-backend.vercel.app/${path}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
        }),
      }
    );

    return await resp;
  };

  return postData;
};

export default usePostData;
