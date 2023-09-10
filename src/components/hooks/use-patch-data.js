const usePatchData = () => {
  const patchData = async (data, path) => {
    const resp = await fetch(`http://localhost:5000/${path}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    });

    return await resp;
  };

  return patchData;
};

export default usePatchData;
