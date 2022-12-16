import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const validateToken = async (url: string) => {
  console.log(url);
  const response = await api.get(`/validate/${url}`);
  console.log("aqui", response);
  return response.data;
};

export const signIn = async (email: string, password: string) => {
  const response = await api.post("/signIn", { email, password });
  return response.data;
};

export const SignOut = async () => {
  return { status: true };
  const response = await api.post("/logout");
  return response.data;
};
