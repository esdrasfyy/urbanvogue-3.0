declare namespace Product {
  interface I {
    id: number;
    title: string;
    summary: string;
    condition: "new" | "used";
    brand_id: number;
    store_id: number;
    price: string;
    last_price: string;
    parcelable: boolean;
    max_installments: number;
    created_at: string;
    updated_at: string;
    brand: Brand;
    details: ProductDetails;
    flags: ProductFlags;
    store: Store;
    variations: Variation[];
  }

  interface Brand {
    name: string;
  }

  interface ProductDetails {
    id: number;
    data: string[]; // Ex: ["64GB Storage", "12MP Camera", ...]
    product_id: number;
  }

  interface ProductFlags {
    id: number;
    data: string[]; // Ex: ["featured", "discounted"]
    product_id: number;
  }

  interface Store {
    id: number;
    name: string;
    summary: string;
    company_id: string;
    seller_social_reason: string;
    picture: string;
  }

  interface Variation {
    id: number;
    increment: string;
    decrement: string;
    color: string;
    url: string;
    product_id: number;
    sizes: Size[];
  }

  interface Size {
    id: number;
    name: string;
    qtd: number;
    variation_id: number;
  }
}
