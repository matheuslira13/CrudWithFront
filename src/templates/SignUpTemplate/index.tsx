import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { client } from "../../services/baseURL";

export const SignUp = () => {
  const [name, setName] = useState(null || "");
  const [password, setPassword] = useState(null || "");
  const [email, setEmail] = useState(null || "");

  const navigate = useNavigate();

  const login = async () => {
    alert("s");
    const res = await client.post("/signUp", { name, email, password });

    alert("Usuario criado com sucesso");
    navigate("/login");
    console.log(res);
    if (res.status === 200) {
    } else {
      console.log("nada");
      console.log(res.data);
    }
  };

  return (
    <div className="container">
      <h1>Criar uma conta</h1>
      <h2> Preencha os dados para criar seu usuario ;) </h2>
      <form className="form">
        <input
          type="text"
          value={name}
          placeholder="Digete o seu nome completo"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          required
          value={email}
          placeholder="Digete seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Digete sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}> Logar</button>
      </form>
    </div>
  );
};
