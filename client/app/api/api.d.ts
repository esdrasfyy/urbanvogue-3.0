import { UserI } from "../@types/user";
import { UserNotificationsI } from "../@types/user-notifications";

export interface LoginApiProps {
  credential: string;
  password: string;
}

export interface LoginApiResponse {
  user?: UserI;
  message?: string;
  status: number;
}

export interface getNotificationsApiResponse {
  notifications: UserNotificationsI[] | null;
  message: string | null;
  status: number;
}

export interface updateNotificationsProps {
  ids: number[];
  action: "read" | "noRead" | "delete";
}

export interface RegisterApiProps {
  email: string;
  username: string;
  password: string;
}

export interface ForgotPasswordApiProps {
  email: string;
}
export interface ResetPasswordApiProps {
  email: string;
  password: string;
  token: string;
}
