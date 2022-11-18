import axios from "axios";

const api = axios.create({
    baseURL : process.env.REACT_APP_API
})

export const validateToken = async (token:string) =>{
    return {
        user:{id:27,name:"Matheus Lira",email:"matheus_lira13@hotmail.com",balance:50},
    }
    const response = await api.post('/validate',{token});
    return response.data
}

export const signIn = async (email:string, password:string) =>{
    return {
        user:{id:27,name:"Matheus Lira",email:"matheus_lira13@hotmail.com"},
        token:"13974208098"
    }
    const response = await api.post('/signIn',{email,password})
    return response.data
}

export const SignOut = async () =>{
    return {status:true}
    const response = await api.post('/logout');
    return response.data
}