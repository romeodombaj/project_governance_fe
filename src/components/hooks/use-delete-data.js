import React from "react";

// `http://localhost:5000/${path}`

const useDeleteData = () => {
  const deleteData = async (data, path) => {
    const resp = await fetch(`https://project-governance-backend.vercel.app/${path}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    });

    return await resp;
  };

  return deleteData;
};

export default useDeleteData;
