/* eslint-disable */
import { UseDisclosureReturn } from "@chakra-ui/react";
import { ColorProductCreateI, GeneralProductCreateI, SizesProductCreateI } from "./schemas.entitie";

export declare namespace Contexts {
  interface AdminProps {
    tabProductCreate: number;
    setTabProductCreate: React.Dispatch<React.SetStateAction<number>>;
    colorsProductCreate: ColorProductCreateI[];
    setColorsProductCreate: React.Dispatch<React.SetStateAction<ColorProductCreateI[]>>;
    sizesProductCreate: SizesProductCreateI[];
    setSizesProductCreate: React.Dispatch<React.SetStateAction<SizesProductCreateI[]>>;
    generalProductCreate: GeneralProductCreateI | null;
    setGeneralProductCreate: React.Dispatch<React.SetStateAction<GeneralProductCreateI | null>>;
  }
  interface AppProps {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    addingItem: number | null;
    setAddingItem: React.Dispatch<React.SetStateAction<number | null>>;
    queries: Product.ParametersSearch;
    setQueries: React.Dispatch<React.SetStateAction<Product.ParametersSearch>>;
    searchProducts: Product.Mini[] | null | undefined;
    cart: Cart.I | undefined;
    setCart: React.Dispatch<React.SetStateAction<Cart.I | undefined>>;
    ShowToast: (title: string, status: "info" | "warning" | "success" | "error") => void;
    AddItemToCart: (dto: { product_id: number; quantity: number; variation_id: number }) => void;
    isOpenForgotPassword: boolean;
    onOpenForgotPassword: () => void;
    onCloseForgotPassword: () => void;
    isOpenCart: boolean;
    onOpenCart: () => void;
    onCloseCart: () => void;
    isOpenNeedAuth: boolean;
    onOpenNeedAuth: () => void;
    onCloseNeedAuth: () => void;
  }

  interface UserProps {
    user: Account.UserI | null;
    setUser: React.Dispatch<React.SetStateAction<Account.UserI | null>>;
  }

  interface Size {
    size: string;
  }

  interface Color {
    name_color: string;
  }
  interface ProductCartI {
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

  interface CartSummary {
    totalPrice: number | null;
    totalQuantity: number | null;
    products: ProductCartI[] | null;
  }

  interface UpdateItemQuantityParamsProps {
    id: number;
    index: number;
    quantity: number;
    size: string;
    color: string;
  }
  interface CartProps {
    disclosure: UseDisclosureReturn;
    cartResume: CartSummary | null;
    setCartResume: React.Dispatch<React.SetStateAction<CartSummary | null>>;
    productsInCart: ProductCartI[];
    setProductsInCart: React.Dispatch<React.SetStateAction<ProductCartI[]>>;
    addItemToCart: (data: ProductCartI) => void;
    removeItemFromCart: (id: number, index: number) => void;
    updateItemQuantity: (data: UpdateItemQuantityParamsProps) => void;
  }

  interface NotificationProps {
    disclosure: UseDisclosureReturn;
    notifications: Account.UserNotificationsI[] | null;
    setNotifications: React.Dispatch<React.SetStateAction<Account.UserNotificationsI[] | null>>;
    NotificationsRead: (ids: number[], action: "read" | "noRead") => Promise<void>;
    NotificationsDelete: (ids: number[]) => Promise<void>;
  }
}
