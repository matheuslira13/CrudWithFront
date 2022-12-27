import { useState } from "react";
import "./styles.css";

type IconProps = {
  icone?: string;
  name?: string;
  url?: string | undefined;
  type: "socialMedia" | "icon";
};

export const Icon = ({ icone, name, url, type }: IconProps) => {
  const [open, setOpen] = useState(false);
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
          <div className="iconeInLeft">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <img
                  className="icons"
                  src={require("../../../src/assets/close-eye.png")}
                />
              ) : (
                <img
                  className="icons"
                  src={require("../../../src/assets/opened-eye.png")}
                />
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
