import { AxiosResponse, isAxiosError } from "axios";
import { UserI } from "../../interfaces/user/user";
import { api } from "../../libs/axios.lib";
import { ForgotPasswordApiProps, LoginApiProps, LoginApiResponse, RegisterApiProps, ResetPasswordApiProps } from "../api";

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

    const response: AxiosResponse = await api.post("/auth/login", { credential, password });

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

    const response: AxiosResponse = await api.post("/auth/register", { email, username, password });

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
const forgotPassword = async ({ email }: ForgotPasswordApiProps): Promise<number> => {
  try {
    if (!email) {
      throw new Error("email parameter is empty or undefined.");
    }

    const response: AxiosResponse = await api.post("/auth/forgot-password", { email });

    return response.status;
  } catch (err) {
    if (isAxiosError(err) && err.response) {
      return err.response.status;
    }
    return 500;
  }
};

const resetPassword = async ({ email, password, token }: ResetPasswordApiProps): Promise<number> => {
  try {
    if (!email || !password) {
      throw new Error("email and password parameter is empty or undefined.");
    }

    const response: AxiosResponse = await api.post("/auth/reset-password", { email, password, token });

    return response.status;
  } catch (err) {
    if (isAxiosError(err) && err.response) {
      return err.response.status;
    }
    return 500;
  }
};

export const Auth = { getMe, login, register, forgotPassword, resetPassword };
