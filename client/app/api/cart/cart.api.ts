import { api } from "../../libs/axios.lib";

const add = async ({ ...dto }: { cart_id: number; product_id: number; quantity: number; variation_id: number }) => {
  const response = await api.post<null>("/cart/add", dto);
  return response.data;
};
const get = async () => {
  const response = await api.get<Cart.I>("/cart/get");
  return response.data;
};
export const CartApi = { add, get };
