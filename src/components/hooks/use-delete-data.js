import React from "react";

const useDeleteData = () => {
  const deleteData = async (data, path) => {
    const resp = await fetch(`http://localhost:5000/${path}`, {
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
