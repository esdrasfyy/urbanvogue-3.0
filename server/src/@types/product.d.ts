declare namespace Product {
  type Create = {
    brand: number;
    categories: number[];
    colors: {
      product_id: number;
      name: string;
      images: string[];
      sizes: {
        name: string;
        qtd: number;
        increment: number;
        decrement: number;
      }[];
    }[];
    condition: "new" | "used" | "refurbished";
    details: string[];
    flags: string[];
    installments: number;
    last_price: string;
    price: string;
    store_id: number;
    summary: string;
    title: string;
  };
}
