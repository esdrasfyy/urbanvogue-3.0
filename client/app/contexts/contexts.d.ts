import { UserI } from "../interfaces/user/user";

export interface ContextUserProps {
  user: UserI | null;
  setUser: React.Dispatch<React.SetStateAction<UserI | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  emailForRecovery: string | null;
  setEmailForRecovery: React.Dispatch<React.SetStateAction<string | null>>;
}
