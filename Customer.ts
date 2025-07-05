import { Cart } from "./addproduct";

export interface Customer {
  id: number;
  name: string;
  balance: number;
  cart?: Cart;
}

export const customerlist: Customer[] = [
  { id: 1, name: "Ahmed", balance: 500 },
  { id: 2, name: "Nour", balance: 1500 },
  { id: 3, name: "Omar", balance: 5000 },
  { id: 4, name: "Ziad", balance: 2500 },
];
