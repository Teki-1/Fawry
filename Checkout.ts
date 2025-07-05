import { Product } from "./Products";

import { Customer } from "./Customer";
import { Cart } from "./AddProduct";

export function Checkout(customer: Customer, cart: Cart): void {
  let totalWeight: number = 0;
  let subTotal: number = 0;
  const shippingCost: number = 30;

  console.log(`Customer: ${customer.name}`);
  console.log("**Shipment Notice**");
  cart.CartItems.forEach((item) => {
    const { product, Quantity } = item;

    let itemWeight = product.weight || 0;
    let itemTotalWeight = (itemWeight * Quantity) / 1000;

    totalWeight += itemTotalWeight;

    console.log(`${Quantity} x ${product.name} ${itemTotalWeight} kg `);
  });
  console.log("-----------------------------");
  console.log("**Checout receipt**");
  cart.CartItems.forEach((item) => {
    const { product, Quantity } = item;
    let itemTotalPrice = product.price * Quantity;
    subTotal += itemTotalPrice;
    console.log(`${Quantity} x ${product.name} ${itemTotalPrice} EGP `);
  });

  let total: number = subTotal + shippingCost;
  let balance: number = customer.balance;
  let remainingBalance: number = balance - total;
  if (remainingBalance < 0) {
    console.log("ERROR: Insufficient balance for checkout.");
    return;
  }
  console.log("-----------------------------");
  console.log(`Total Weight: ${totalWeight} kg`);
  console.log(`Subtotal: ${subTotal}`);
  console.log(`Shipping Cost: ${shippingCost}`);
  console.log(`Price total: ${total}`);
  console.log(`Remaining Balance: ${remainingBalance}`);
}
