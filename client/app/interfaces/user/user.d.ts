export interface UserI {
  user_id: number;
  google_id: string;
  facebook_id: number;
  github_id: string;
  fullname: string;
  username: string;
  email: string;
  verify_email: boolean;
  profile_img: string;
  password_hash: string;
  date_of_birth: Date;
  phone: string;
  verify_phone: boolean;
  gender: string;
  role:
    | "Client"
    | "Client Vip"
    | "Product Manager"
    | "Order Manager"
    | "Customer Service"
    | "Accounting and Finance"
    | "Admin"
    | "Owner";
  cpf: string;
  createdAt: Date;
  updatedAt: Date;
}
