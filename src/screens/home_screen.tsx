import { Home } from "../templates/HomeTemplate";
import useHome from "../hooks/useHome";

export const HomeTemplate = () => {
  const { getFilter, setFindInList, lista } = useHome();
  return (
    <Home getFilter={getFilter} lista={lista} setFindInList={setFindInList} />
  );
};
