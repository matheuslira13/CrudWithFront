import React from "react";
import { useState , useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")

    const emailInput = (e : React.ChangeEvent<HTMLInputElement>)=>{
         setEmail(e.target.value)
    }

    const passwordInput = (e :React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }

    const login = async ()=>{
        if(email&&password){
            const isLoged = await auth.signin(email,password)
            if(isLoged){
                navigate('/')
            }else{
                alert("Aconteceu um problema")
            }
        }
    }

    return(
        <div>
            <h2>Pagina de login</h2>
            <input
                type="text"
                value={email}
                placeholder="Digete o seu e-mail"
                onChange={emailInput}
            />
            <input
                type="password"
                value={password}
                placeholder="Digete sua senha"
                onChange={passwordInput}
            />
            <button onClick={login}> Logar</button>
        </div>
    )
}

export default Login