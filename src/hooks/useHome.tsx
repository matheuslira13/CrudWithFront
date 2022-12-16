import React, { useContext, useState, useEffect } from "react";
import { client } from "../services/baseURL";

const useHome = () => {
  useEffect(() => {
    getHistoric();
  }, []);

  const getHistoric = async () => {
    const res = await client.get("/historic");
    setLista(res.data);
  };

  const [findInList, setFindInList] = useState("");
  const [lista, setLista] = useState<React.Dispatch<any>>();
  const [search] = useState(["type", "value"]);

  const getFilter = (items: any) => {
    return items.filter((item: any) => {
      return search.some((newItem) => {
        return (
          item[newItem]
            ?.toString()
            ?.toLowerCase()
            ?.indexOf(findInList.toLowerCase()) > -1
        );
      });
    });
  };

  return {
    setFindInList,
    lista,
    search,
    getFilter,
  };
};

export default useHome;
