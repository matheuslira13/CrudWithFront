import { Fragment } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import { LoginTemplete } from "../screens/login_screen";
import { HomeTemplate } from "../screens/home_screen";
import { SignUpScreen } from "../screens/signUp_screen";
import { RequireAuth } from "../components";

import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3333",
});

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <HomeTemplate />
              </RequireAuth>
            }
          />
          <Route path="/*" element={<SignUpScreen />} />
          <Route path="/login" element={<LoginTemplete />} />
          <Route path="/signUp" element={<SignUpScreen />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
