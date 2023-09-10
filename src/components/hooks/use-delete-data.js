const useDeleteData = () => {
  const deleteData = async (path) => {
    const resp = await fetch(`http://localhost:5000/${path}`, {
      method: "delete",
    });

    return await resp;
  };

  return deleteData;
};

export default useDeleteData;
