declare namespace Cart {
  interface I {
    id: number;
    user_id: number;
    created_at: Date;
    updated_at: Date;
  }
  interface Items {
    id: number;
    cart_id: number;
    product_id: number;
    quantity: number;
    price: string;
    title: string;
    variation_id: number;
    created_at: Date;
    updated_at: Date;
  }
  interface Dto {
    cart_id: number;
    product_id: number;
    variation_id: number;
    quantity: number;
  }
  interface Add {
    cart_id: number;
    product_id: number;
    price: string;
    quantity: number;
    title: string;
    variation_id: number;
  }
}
