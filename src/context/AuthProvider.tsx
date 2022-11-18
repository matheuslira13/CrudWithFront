import { useState,useEffect } from "react";
import { AuthContext,UserType } from "./AuthContext";
import {SignOut,signIn,validateToken} from "../hooks/useApi"

export const AuthProvider = ({children}:{children:JSX.Element}) =>{

    const [user,setUser]= useState<UserType|null>(null) 

    useEffect(() => {
        const verifyToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if (storageData) {
                const data = await validateToken(storageData);
                if (data.user) {
                    setUser(data.user);
                }
            }
        }
        verifyToken();
    }, [validateToken]);

    const signin = async (email: string, password: string) => {
        const data = await signIn(email, password);
        if (data.user && data.token) {
            setUser(data.user);
            guardToken(data.token);
            return true;
        }
        return false;
    }   

    const signout = async()=>{
        await SignOut()
        setUser(null)
    }

    const guardToken = (token :string)=>{
        localStorage.setItem('authToken',token)
    }

    return <AuthContext.Provider value={{user,signin,signout}}> 
        {children} 
        </AuthContext.Provider>
    
}
