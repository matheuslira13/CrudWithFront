import React, { useContext, useState, useEffect } from "react";
import { client } from "../services/baseURL";
import { refresh } from "../context/AuthProvider";
import { AuthContext } from "../context/AuthContext";
import { formatValue } from "../utils/useCurrency";

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
  const [email, setEmail] = useState<any>();
  const [value, setValue] = useState("");
  const [lista, setLista] = useState<any>();
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

  const makeCashout = async () => {
    if (email && value && auth.user?.email) {
      const data = await auth.makeCashout(auth.user?.email, email, value);

      if (data) {
        alert(data.message);
      } else {
        alert("Aconteceu um problema");
      }
      refresh(true);
    }
  };

  const MakeMoneyForBack = (money: string) => {
    let removedR$ = money.replace(/\D/g, "");
    let calc = Number(removedR$) / 100;
    let calcString = calc.toString();
    return calcString;
  };

  console.log(MakeMoneyForBack(value));

  return {
    setFindInList,
    lista,
    search,
    getFilter,
    setEmail,
    setValue,
    makeCashout,
    email,
    value: MakeMoneyForBack(value),
  };
};

export default useHome;
