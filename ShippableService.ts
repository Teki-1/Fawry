import { Product } from "./Products";
import { Customer } from "./Customer";

export interface Shippable {
  getName(): string;
  getWeight(): number;
}

export const Shipping = {
  shipItems(items: Shippable[]): void {
    console.log(" ");
    console.log("Items Due for shipping:");
    items.forEach((item) => {
      console.log(
        `Item: ${item.getName()}        Weight: ${item.getWeight()} kg`
      );
    });
  },
};
type Item = {
  product: Product;
  Quantity: number;
};
export function ShippableService(CartItems: Item[]): void {
  const items: Shippable[] = [];
  CartItems.forEach((item) => {
    const { product, Quantity } = item;
    const weight = product.weight || 0;
    if (weight > 0) {
      const shippable: Shippable = {
        getName: () => product.name,
        getWeight: () => (weight * Quantity) / 1000,
      };
      items.push(shippable);
    }
  });
  if (items.length > 0) {
    Shipping.shipItems(items);
  } else {
    console.log("No items to ship.");
  }
}

export function ShippableServicePerCustomer(customer: Customer): void {
  const items: Shippable[] = [];
  if (!customer.cart || customer.cart.CartItems.length === 0) {
    console.log(`No items in cart for customer: ${customer.name}`);
    return;
  }
  customer.cart.CartItems.forEach((item) => {
    const { product, Quantity } = item;
    const weight = product.weight || 0;
    if (weight > 0) {
      const shippable: Shippable = {
        getName: () => product.name,
        getWeight: () => (weight * Quantity) / 1000,
      };
      items.push(shippable);
    }
  });
  if (items.length > 0) {
    Shipping.shipItems(items);
  } else {
    console.log("No items to ship.");
  }
}
