import { TextInput } from "../TextInput";
import "./styles.css";
type HistoriProps = {
  setFindInList: (arg0: any) => void;
  lista: React.Dispatch<any> | any;
  getFilter: (arg0: string) => Array<string>;
};

export const HistoricContainer = ({
  setFindInList,
  lista,
  getFilter,
}: HistoriProps) => {
  return (
    <div className="histoeyContainer">
      <h3>Historico de transacaoes </h3>
      <TextInput
        type="text"
        placeholder="pesquisar"
        onChange={(e) => setFindInList(e.target.value)}
      />

      <table>
        <tr>
          <th>Type</th>
          <th>E-mail</th>
          <th>Data</th>
          <th>Horario</th>
          <th>Valor</th>

          <th></th>
        </tr>

        {lista ? (
          getFilter(lista).map((e: any) => {
            return (
              <tr key={e.id}>
                <td>{e.type} </td>
                <td>{e.email}</td>
                <td>{e.date} </td>
                <td>{e.hours} </td>
                <td>{e.value} </td>
              </tr>
            );
          })
        ) : (
          <p>Carregando</p>
        )}
      </table>
    </div>
  );
};
