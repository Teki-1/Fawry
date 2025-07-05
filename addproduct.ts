import { Product, productslist } from "./Products";

type Item = {
  product: Product;
  Quantity: number;
};

export class Cart {
  public CartItems: Item[] = [];

  add(product: Product, Quantity: number): void {
    const productCheck = productslist.some((p) => p.id === product.id);
    const expireCheck = product.expirationDate
      ? product.expirationDate < new Date()
      : false;

    if (expireCheck) {
      console.log(`ERROR: ${product.name} is expired!`);
      return;
    }
    if (!productCheck) {
      console.log(`ERROR: ${product.name} not found in the product list!`);
      return;
    }
    if (!product.stock) {
      console.log(`ERROR: ${product.name} is out of stock!`);
      return;
    }

    if (Quantity <= 0) {
      console.log("ERROR: Quantity must have value of one or higher !");
      return;
    }

    this.CartItems.push({ product, Quantity });
  }

  EmptyCheckout(): void {
    if (this.CartItems.length === 0) {
      console.log("Your cart is empty.");
      return;
    }
  }
}
