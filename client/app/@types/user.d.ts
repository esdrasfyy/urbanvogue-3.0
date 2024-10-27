declare namespace Account {
  interface UserI {
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
    role: "Client" | "Client Vip" | "Product Manager" | "Order Manager" | "Customer Service" | "Accounting and Finance" | "Admin" | "Owner";
    cpf: string;
    createdAt: Date;
    updatedAt: Date;
  }

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
    price: string;
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
