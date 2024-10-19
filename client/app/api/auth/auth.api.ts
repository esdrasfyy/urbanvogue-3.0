import { AxiosResponse, isAxiosError } from "axios";
import { UserI } from "../../interfaces/user/user";
import { api } from "../../libs/axios.lib";
import { LoginApiProps, LoginApiResponse, RegisterApiProps } from "../api";

const getMe = async () => {
  try {
    const response = await api.get<UserI | null>("/auth/me");
    return response.data;
  } catch {
    return null;
  }
};

const login = async ({ credential, password }: LoginApiProps): Promise<LoginApiResponse> => {
  try {
    if (!credential || !password) {
      throw new Error("credentials parameter is empty or undefined.");
    }

    const response: AxiosResponse = await api.post("/auth/login", {
      credential,
      password,
    });

    return { user: response.data, status: response.status };
  } catch (err) {
    if (isAxiosError(err) && err.response) {
      return { message: err.response.data.message || "an error occurred", status: err.response.status };
    } else if (err instanceof Error) {
      return { message: err.message, status: 500 };
    } else {
      return { message: "an unknown error occurred", status: 500 };
    }
  }
};

const register = async ({ email, username, password }: RegisterApiProps): Promise<LoginApiResponse> => {
  try {
    if (!email || !password || !username) {
      throw new Error("credentials parameter is empty or undefined.");
    }

    const response: AxiosResponse = await api.post("/auth/register", {
      email,
      username,
      password,
    });

    return { user: response.data, status: response.status };
  } catch (err) {
    if (isAxiosError(err) && err.response) {
      return { message: err.response.data.message || "an error occurred", status: err.response.status };
    } else if (err instanceof Error) {
      return { message: err.message, status: 500 };
    } else {
      return { message: "an unknown error occurred", status: 500 };
    }
  }
};

export const Auth = { getMe, login, register };
