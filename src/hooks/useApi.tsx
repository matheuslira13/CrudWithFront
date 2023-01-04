import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const validateToken = async (url: string) => {
  const response = await api.get(`/validate/${url}`);
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

export const cashoutFunction = async (
  sendEmail: string,
  email: string,
  value: string
) => {
  const response = await api.post("/cashout", {
    sendEmail,
    value,
    email,
    type: "cash-out",
  });

  await api.post("/cashin", {
    sendEmail,
    value,
    email,
    type: "cash-in",
  });

  return response.data;
};
