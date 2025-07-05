import { Cart } from "./AddProduct";

export interface Customer {
  id: number;
  name: string;
  balance: number;
  cart: Cart;
}

export const customerlist: Customer[] = [
  { id: 1, name: "Ahmed", balance: 500, cart: new Cart() },
  { id: 2, name: "Nour", balance: 1500, cart: new Cart() },
  { id: 3, name: "Omar", balance: 7000, cart: new Cart() },
  { id: 4, name: "Ziad", balance: 2500, cart: new Cart() },
];
