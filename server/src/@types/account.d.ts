declare namespace Account {
  export interface UserI {
    id?: number;
    google_id?: string;
    facebook_id?: string;
    github_id?: string;
    apple_id?: string;
    microsoft_id?: string;
    fullname?: string;
    username: string;
    bio?: string;
    email?: string;
    phone?: string;
    email_verified_at?: Date;
    phone_verified_at?: Date;
    identity_verified_at?: Date;
    avatar?: string;
    password?: string;
    birthdate?: Date;
    gender?: string;
    role_id?: number;
    national_id?: string;
    enable_2fa?: boolean;
    country_id?: number;
    created_at?: Date;
    updated_at?: Date;
  }

  export interface UserUpdate {
    google_id?: string;
    facebook_id?: string;
    github_id?: string;
    apple_id?: string;
    microsoft_id?: string;
    fullname?: string;
    username: string;
    bio?: string;
    email?: string;
    phone?: string;
    email_verified_at?: Date;
    phone_verified_at?: Date;
    identity_verified_at?: Date;
    avatar?: string;
    password?: string;
    birthdate?: Date;
    gender?: string;
    role_id?: number;
    national_id?: string;
    enable_2fa?: boolean;
    country_id?: number;
  }
}
