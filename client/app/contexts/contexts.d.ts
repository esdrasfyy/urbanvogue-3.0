import { UseDisclosureReturn } from "@chakra-ui/react";
import { UserI } from "../interfaces/user/user";

export interface ContextAppProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  emailForRecovery: string | null;
  setEmailForRecovery: React.Dispatch<React.SetStateAction<string | null>>;
  ShowToast: (title: string, description: string, status: "info" | "warning" | "success" | "error") => void;
}

export interface ContextUserProps {
  user: UserI | null;
  setUser: React.Dispatch<React.SetStateAction<UserI | null>>;
}

interface Size {
  size: string;
}

interface Color {
  name_color: string;
}
export interface ProductCartI {
  id: number;
  quantity: number;
  price: string;
  title: string;
  image: string;
  size?: string;
  color?: string;
  colors?: Color[];
  sizes?: Size[];
}

export interface CartSummary {
  totalPrice: number | null;
  totalQuantity: number | null;
  products: ProductCartI[] | null;
}

export interface ContextCartProps {
  disclosure: UseDisclosureReturn;
  cartResume: CartSummary | null;
  setCartResume: React.Dispatch<React.SetStateAction<CartSummary | null>>;
  productsInCart: ProductCartI[];
  setProductsInCart: React.Dispatch<React.SetStateAction<ProductCartI[]>>;
  addItemToCart: (data: ProductCartI) => void;
  removeItemFromCart: (id: number, index: number) => void;
  updateItemQuantity: (UpdateItemQuantityParamsProps) => void;
}

export interface ContextNotificationProps {
  disclosure: UseDisclosureReturn;
  notifications: UserNotifyI[] | null;
  setNotifications: React.Dispatch<React.SetStateAction<UserNotifyI[] | null>>;
  NotificationsRead: (ids: number[], action: "read" | "noRead") => Promise<void>;
  NotificationsDelete: (ids: number[]) => Promise<void>;
}

export interface UpdateItemQuantityParamsProps {
  id: number;
  index: number;
  quantity: number;
  size: string;
  color: string;
}
