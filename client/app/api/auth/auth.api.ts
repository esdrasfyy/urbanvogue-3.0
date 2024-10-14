import { AxiosResponse } from "axios";
import { UserI } from "../../interfaces/user/user";
import { api } from "../../libs/axios.lib";
import { LoginApiProps, LoginApiResponse } from "../api";

const getMe = async () => {
  const { data } = await api.get<UserI | null>("/login/credentials");
  return data;
};

async function login({
  credential,
  password,
}: LoginApiProps): Promise<LoginApiResponse> {
  if (!credential || !password) {
    throw new Error("Credentials parameter is empty or undefined.");
  }

  const response: AxiosResponse = await api.post("/login/credentials", {
    credential,
    password,
  });

  return { ...response.data, status: response.status };
}

export const Auth = { getMe, login };
