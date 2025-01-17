declare namespace Product {
  type Mini = {
    id: number;
    brand: string;
    condition: string;
    last_price: string;
    price: Decimal;
    store: string;
    summary: string;
    title: string;
    created_at: Date;
    targets: string[];
    color: ProductColor;
  };
  type ProductColor = {
    id: number;
    name: string;
    images: string[];
    product_id: number;
    sizes: ProductColorSize[];
  };

  type ProductColorSize = {
    id: number;
    name: string;
    qtd: number;
    increment: Decimal;
    decrement: Decimal;
  };

  type Create = {
    brand?: number;
    categories?: number[];
    colors: {
      name: string;
      images: string[];
      sizes?: {
        name: string;
        qtd: number;
        increment: number;
        decrement: number;
      }[];
    }[];
    condition?: string;
    details?: string[];
    flags?: string[];
    installments?: number;
    last_price?: string;
    price?: string;
    store?: number;
    summary?: string;
    title?: string;
  };

  type ParametersSearch = {
    brands?: string;
    ids?: string;
    store?: string;
    min?: string;
    max?: string;
    p?: string;
    orderBy?: string;
    offset?: string;
    limit?: string;
    categories?: string;
  };
}
