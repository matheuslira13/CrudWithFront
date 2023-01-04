import { Home } from "../templates/HomeTemplate";
import useHome from "../hooks/useHome";

export const HomeTemplate = () => {
  const { getFilter, setFindInList, lista, setEmail, setValue, makeCashout } =
    useHome();
  return (
    <Home
      getFilter={getFilter}
      lista={lista}
      setFindInList={setFindInList}
      setEmail={setEmail}
      setValue={setValue}
      makeCashout={makeCashout}
    />
  );
};
