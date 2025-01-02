declare namespace Cart {
  interface I {
    id: number;
    user_id: number;
    items: Items[];
    created_at: Date;
    updated_at: Date;
  }
  interface Items {
    id: number;
    cart_id: number;
    product_id: number;
    quantity: number;
    price: Decimal;
    title: string;
    variation_id: number;
    variation: Variation;
    created_at: Date;
    updated_at: Date;
  }

  interface Variation {
    id: number;
    name: string;
    qtd: number;
    increment: Decimal;
    decrement: Decimal;
    variation_id: number;
    variation: ProductVariation;
  }
  interface ProductVariation {
    id: number;
    name: string;
    images: JsonValue;
    product_id: number;
  }
}
