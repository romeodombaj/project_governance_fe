import React from "react";
const usePatchData = () => {
  const patchData = async (data, path) => {
    const resp = await fetch(
      `https://project-governance-backend.vercel.app/${path}`,
      {
        method: "PATCH",
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

  return patchData;
};

export default usePatchData;
