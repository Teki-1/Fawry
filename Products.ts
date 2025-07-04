export interface Product {
  name: string;
  price: number;
  expirationDate?: Date;
  weight?: number;
  shippable?: boolean;
}

const Product1: Product = {
  name: "Cheese",
  price: 5,
  expirationDate: new Date("2025-7-15"),
  weight: 2,
  shippable: true,
};

const Product2: Product = {
  name: "TV",
  price: 2000,
  weight: 20,
  shippable: true,
};

const Product3: Product = {
  name: "Mobile Scratch Card",
  price: 50,
};

export const productslist: Product[] = [Product1, Product2, Product3];
