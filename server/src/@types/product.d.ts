declare namespace Product {
  interface Create {
    title: string;
    summary: string;
    condition: string;
    brand_id: number;
    store_id: number;
    price: number;
    last_price: number;
    details: string[];
    flags?: string[];
    categories: number[];
    variations: VariationOption[];
    sizes: SizeOption[];
    parcelable: boolean;
    max_installments: number;
  }
  interface VariationInput {
    name: string;
    increment: number;
    decrement: number;
    sizes: SizeOption[];
    color: string;
  }

  interface SizeOption {
    name: string;
    qtd: number;
  }
}
