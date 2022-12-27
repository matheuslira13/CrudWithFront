import "./styles.css";

type ButtonProps = {
  nameButton?: string;

  onClick?: () => void;
};

export const Button = ({
  nameButton,

  onClick,
}: ButtonProps) => {
  return (
    <button className="btnLogin" onClick={onClick}>
      {nameButton}
    </button>
  );
};
