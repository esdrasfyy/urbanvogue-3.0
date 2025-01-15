import { api } from "../../libs/axios.lib";

const getProductsAll = async ({ queries }: { queries: Product.ParametersSearch | null }) => {
  const response = await api.post<Product.Mini[] | null>("/product/get", { ...queries });
  return response.data;
};

export const ProductApi = { getProductsAll };
