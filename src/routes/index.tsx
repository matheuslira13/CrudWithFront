import { Fragment } from "react";

import { BrowserRouter,Route,Routes } from "react-router-dom";

import Login from "../screens/login_screen";
import SignIn from "../screens/signIn_screen";
import Home from "../screens/home_screen"
import { RequireAuth } from "../components";

const RoutesApp = ()=>{

    const Private = ({Item}:any) =>{
        const isLoged = false

        return isLoged   ? <Item/> : <SignIn/>
    }

    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route
                        path="/"
                        element={<RequireAuth><Private Item={Home}/></RequireAuth>}
                    />
                    <Route
                        path="*"
                        element={<SignIn/>}
                    />
                     <Route
                        path="/login"
                        element={<Login/>}
                    />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp