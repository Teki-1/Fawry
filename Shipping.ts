import { Product, productslist } from "./Products";

export class Shipping {
  add(product: Product, Quantity: number): void {
    const weight = product.weight || 0;
    const sum: number = (Quantity * weight) / 1000;
    console.log(Quantity, "x", product.name, "Total weight: ", sum, "kg");
  }
}

const shipping = new Shipping();
shipping.add(productslist[0], 2); // Example usage
