export interface Product {
  id: number;
  name: string;
  price: number;
  expirationDate?: Date;
  weight?: number;
  shippable?: boolean;
  stock: boolean;
}

const Product1: Product = {
  id: 1,
  name: "Cheese",
  price: 15,
  expirationDate: new Date("2025-7-15"),
  weight: 250,
  shippable: true,
  stock: true,
};

const Product2: Product = {
  id: 2,
  name: "TV",
  price: 5000,
  weight: 20,
  shippable: true,
  stock: false,
};

const Product3: Product = {
  id: 3,
  name: "Mobile Scratch Card",
  price: 50,
  stock: true,
};
const Product4: Product = {
  id: 4,
  name: "Banana",
  price: 5,
  weight: 120,
  expirationDate: new Date("2025-7-2"),
  shippable: true,
  stock: true,
};
const Product5: Product = {
  id: 5,
  name: "Laptop",
  price: 15000,
  weight: 1500,
  shippable: true,
  stock: true,
};
export const productslist: Product[] = [
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
];
