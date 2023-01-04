import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useCurrency from "../../utils/useCurrency";
import "./styles.css";

type IconProps = {
  icone?: string;
  name?: string;
  url?: string | undefined;
  type: "socialMedia" | "icon";
};

export const Icon = ({ icone, name, url, type }: IconProps) => {
  const [open, setOpen] = useState(false);
  const auth = useContext(AuthContext);
  const { formatValue } = useCurrency();
  if (type === "socialMedia") {
    return (
      <div className="containerUserInfoComplete">
        <div className="iconeInLeft">
          <img className="icons" src={icone} />
        </div>
        <div className="DesciptionInRight">
          <a
            className="description"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <label className="fullName"> {name} </label>
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="containerUserInfoComplete">
          <div className="iconeEyeMoney">
            {open ? (
              <h4>***</h4>
            ) : (
              <h4> &nbsp;{formatValue(auth.user?.balance)} </h4>
            )}
            <button className="buttonMoney" onClick={() => setOpen(!open)}>
              {open ? (
                <div className="infoMoney">
                  <img
                    className="icons"
                    src={require("../../../src/assets/close-eye.png")}
                  />
                </div>
              ) : (
                <div className="infoMoney">
                  <img
                    className="icons"
                    src={require("../../../src/assets/opened-eye.png")}
                  />
                </div>
              )}
            </button>
          </div>
          <div className="DesciptionInRight">
            <label className="fullName"> {name} </label>
          </div>
        </div>
      </>
    );
  }
};
