declare namespace Account {
  export interface UserI {
    id: number;
    google_id?: string;
    facebook_id?: string;
    github_id?: string;
    apple_id?: string;
    microsoft_id?: string;
    fullname?: string;
    username: string;
    email?: string;
    phone?: string;
    email_verified_at?: Date;
    phone_verified_at?: Date;
    identity_verified_at?: Date;
    avatar?: string;
    password?: string;
    birthdate?: Date;
    gender_id?: number;
    role_id: number;
    national_id?: string;
    enable_2fa?: boolean;
    country_id?: number;
    created_at: Date;
    updated_at: Date;
  }

  //role: "Client" | "Client Vip" | "Product Manager" | "Order Manager" | "Customer Service" | "Accounting and Finance" | "Admin" | "Owner";
  interface OrderI {
    order_id: number;
    user_id: number;
    payment_method: string;
    street: string;
    number: number;
    status: string;
    cep: string;
    city: string;
    state: string;
    created_at: Date;
  }

  interface ProductOrderI {
    product_order: number;
    order_id: number;
    product_id: number;
    user_id: number;
    color: string;
    title: string;
    price: Decimal;
    image: string;
    size: string;
    quantity: number;
  }

  interface OrderDetailsI extends OrderI {
    payment_card: Payment.DataCardI[] | [];
    payment_pix: Payment.DataPixI[] | [];
    product_orders: ProductOrderI[];
  }

  interface UserNotificationsI {
    notify_id: number;
    user_id: number;
    title: string;
    message: string;
    redirect: string;
    read: boolean;
    createdAt: Date;
  }
}
