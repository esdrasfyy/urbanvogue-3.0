import { api } from "../../libs/axios.lib";

const createProduct = async ({ product }: { product: Product.Create }) => {
  const response = await api.post<Product.Create | null>("/product/create", product);
  return response.data;
};
export const AdminProduct = { createProduct };
