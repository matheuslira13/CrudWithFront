import React, { useContext, useState, useEffect } from "react";
import { client } from "../services/baseURL";
import { AuthContext } from "../context/AuthContext";

const useHome = () => {
  const auth = useContext(AuthContext);
  useEffect(() => {
    getHistoric();
  }, []);

  const getHistoric = async () => {
    //  const res = await client.get("/historic");
    setLista(auth?.user?.historic);
  };

  const [findInList, setFindInList] = useState("");
  const [lista, setLista] = useState<any>();
  const [search] = useState(["type", "value"]);

  const getFilter = (items: any) => {
    console.log(lista);
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
