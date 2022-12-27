import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./styles.css";
import {
  Icon,
  ProfileInfo,
  HistoricContainer,
  TextInput,
  Button,
} from "../../components";
import { formatValue } from "../../utils/formatMoney";

type HomeProps = {
  setFindInList: (arg0: any) => void;
  lista: React.Dispatch<any> | any;
  getFilter: (arg0: string) => Array<string>;
};

export const Home = ({ setFindInList, getFilter, lista }: HomeProps) => {
  const auth = useContext(AuthContext);
  console.log(auth.user?.name);

  return (
    <div className="containerHome">
      <div className="subContainer">
        <ProfileInfo
          img="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png"
          name={auth.user?.name}
          email={auth.user?.email}
          balance={auth.user?.balance}
        />
        <div className="userInfoComplete">
          <Icon
            type="socialMedia"
            icone="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            name="GitHub"
            url={auth.user?.github}
          />
          <Icon
            type="socialMedia"
            icone="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
            name="Linkedin"
            url={auth.user?.linkedin}
          />
          <Icon
            type="socialMedia"
            icone="https://cdn-icons-png.flaticon.com/512/1051/1051309.png"
            name="Facebook"
            url={auth.user?.facebook}
          />
        </div>
      </div>
      <div className="subContainer">
        <div className="cashoutContainer">
          <div className="cashoutFirstRow">
            <h3>Transferir</h3>
            <h4>Saldo disponivel </h4>
            <h4>{formatValue(auth.user?.balance)} </h4> <Icon type="icon" />
          </div>
          <label className="description"> E-mail: </label>
          <TextInput type="email" placeholder="digite um e-mail" />
          <TextInput
            onChange={(e) => setFindInList(e.target.value)}
            placeholder="Valor R$"
          />
          <Button nameButton="Transferir" />
        </div>
        <HistoricContainer
          getFilter={getFilter}
          lista={lista}
          setFindInList={setFindInList}
        />
      </div>
    </div>
  );
};
