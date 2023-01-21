import React, { useContext, useState, useCallback } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./styles.css";
import {
  Icon,
  ProfileInfo,
  HistoricContainer,
  TextInput,
  Button,
} from "../../components";
import { formatValue } from "../../utils/useCurrency";
import { NumericFormat } from "react-number-format";

type HomeProps = {
  setFindInList: (arg0: any) => void;
  lista: React.Dispatch<any> | any;
  getFilter: (arg0: string) => Array<string>;
  setEmail: (arg0: string) => void;
  setValue: (arg0: string) => void;
  makeCashout: () => void;
  email: string;
  value: string;
};

export const Home = ({
  setFindInList,
  getFilter,
  lista,
  setEmail,
  setValue,
  makeCashout,
  email,
  value,
}: HomeProps) => {
  const auth = useContext(AuthContext);

  const formatMoneyValue = useCallback(
    (val: any) => {
      console.log(val);
      setValue(Number(val / 100).toFixed(2));
    },
    [value]
  );

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
      sss
      <div className="subContainer">
        <div className="cashoutContainer">
          <h3>Transferir &nbsp;</h3>
          <div className="cashoutFirstRow">
            <h4>Saldo disponivel &nbsp; </h4>
            <Icon type="icon" />
          </div>
          <label className="description"> E-mail: </label>
          <TextInput
            type="email"
            placeholder="digite um e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />

          <NumericFormat
            className="inputInsert"
            prefix={"RS"}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button nameButton="Transferir" onClick={makeCashout} />
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
