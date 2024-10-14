import { UserI } from "../interfaces/user/user";

export interface LoginApiProps {
  credential?: string;
  password?: string;
}

export interface LoginApiResponse {
  user: UserI | null;
  message: string | null;
  status: number;
}
