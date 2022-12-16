import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    if (email && password) {
      const isLoged = await auth.signin(email, password);

      if (isLoged) {
        navigate("/");
      } else {
        alert("Aconteceu um problema");
      }
    }
  };

  const goToSignUp = () => {
    navigate("/signUp");
  };

  return (
    <div className="containerLogin">
      <div className="loginTextContainer">
        <h2>Bem vindo ao meu projeto pessoal </h2>
        <h3>Por favor digite seu email e senha </h3>
        <input
          type="text"
          value={email}
          placeholder="Digete o seu e-mail"
          onChange={emailInput}
          className="inputLogin"
        />
        <input
          type="password"
          value={password}
          placeholder="Digete sua senha"
          onChange={passwordInput}
          className="inputLogin"
        />
        <button className="btnLogin" onClick={login}>
          Logar
        </button>
        <p>
          Nao tem usuario crie um <Link to="/signUp">Aqui</Link>
        </p>
      </div>
    </div>
  );
};
