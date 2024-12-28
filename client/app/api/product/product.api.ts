import { api } from "../../libs/axios.lib";

const getProductsAll = async () => {
  const response = await api.get<Product.Mini[] | null>("/product/all");
  return response.data;
};

export const Product = { getProductsAll };
