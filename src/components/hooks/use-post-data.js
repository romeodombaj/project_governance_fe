import { useEffect, useState } from "react";

const usePostData = (path) => {
  const postData = (data) => {
    fetch(`http://localhost:5000/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    });
  };

  return postData;
};

export default usePostData;
