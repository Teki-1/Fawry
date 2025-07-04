import { Product, productslist } from "./Products";

export class Cart {
  add(product: Product, Quantity: number): void {
    const sum: number = Quantity * product.price;
    console.log(Quantity, "x", product.name, "Total price: ", sum);
  }
}

const cart = new Cart();
cart.add(productslist[0], 2); // Example usage
