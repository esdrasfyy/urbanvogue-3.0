import { api } from "../../libs/axios.lib";

const getProductsAll = async ({ queries }: { queries: string | null }) => {
  console.log(queries);

  const url = `/product/get?${queries ?? ""}`;
  const response = await api.get<Product.Mini[] | null>(url);
  return response.data;
};

export const Product = { getProductsAll };
