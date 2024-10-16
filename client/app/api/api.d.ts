import { UserI } from "../interfaces/user/user";
import { UserNotificationsI } from "../interfaces/user/user-notifications";

export interface LoginApiProps {
  credential?: string;
  password?: string;
}

export interface LoginApiResponse {
  user: UserI | null;
  message: string | null;
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