import "./styles.css";
import { formatValue } from "../../utils/useCurrency";
type ProfileInforops = {
  img: string;
  name?: string;
  email?: string;
  balance?: number;
};

export const ProfileInfo = ({ img, name, email, balance }: ProfileInforops) => {
  return (
    <div className="profileInfo">
      <img className="imgProfile" src={img} alt="profile img" />
      <h2 className="description"> {name}</h2>
      <p className="description"> {email}</p>
      <p className="description">
        dinheiro disponivel : {formatValue(balance)}
      </p>
    </div>
  );
};
