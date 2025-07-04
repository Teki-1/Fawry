import { Product, productslist } from "./Products";

export class Cart {
  add(product: Product, Quantity: number): void {
    const sum: number = Quantity * product.price;
    const weight = product.weight || 0;
    const shipsum: number = (Quantity * weight) / 1000;
    console.log(Quantity, "x", product.name, "Total price: ", sum);
    console.log(Quantity, "x", product.name, "Total weight: ", shipsum, "kg");
  }
}

const cart = new Cart();
cart.add(productslist[0], 2);
