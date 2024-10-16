import { AxiosResponse } from "axios";
import { UserI } from "../../interfaces/user/user";
import { api } from "../../libs/axios.lib";
import { LoginApiProps, LoginApiResponse } from "../api";

const getMe = async () => {
  try {
    const { data } = await api.get<UserI | null>("/login/credentials");
    return data;
  } catch{
    return null
  }
};

const login = async ({ credential, password }: LoginApiProps): Promise<LoginApiResponse> => {
  try {
    if (!credential || !password) {
      throw new Error("Credentials parameter is empty or undefined.");
    }

    const response: AxiosResponse = await api.post("/login/credentials", {
      credential,
      password,
    });

    return { ...response.data, status: response.status };

  } catch (err: unknown) {
    
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
    
  }
}

export const Auth = { getMe, login };
