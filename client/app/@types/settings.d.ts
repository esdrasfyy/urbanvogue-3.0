declare namespace Settings {
  interface Country {
    id: number;
    name: string;
    code: string;
    continent: string;
  }
  interface Gender {
    id: number;
    name: string;
  }

  interface Store {
    id: number;
    name: string;
    summary: string;
    company_id: string;
    seller_social_reason: string;
    picture: string;
  }

  interface Brand {
    id: number;
    name: string;
    picture: string;
    color: string;
  }
  interface Category {
    id: number;
    name: string;
    picture: string;
  }

  interface Sizes {
    id: number;
    name: string;
  }

  interface Colors {
    id: number;
    name: string;
  }
}
