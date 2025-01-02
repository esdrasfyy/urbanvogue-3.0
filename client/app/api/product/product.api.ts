import { api } from "../../libs/axios.lib";

const getProductsAll = async ({ queries }: { queries: string | null }) => {
  const response = await api.get<Product.Mini[] | null>(`/product/get?${queries ?? ""}`);
  return response.data;
};

export const Product = { getProductsAll };
