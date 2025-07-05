import { Product, productslist } from "./Products";

type Item = {
  product: Product;
  Quantity: number;
};

export class Cart {
  private CartItems: Item[] = [];

  add(product: Product, Quantity: number): void {
    const productCheck = productslist.some((p) => p.id === product.id);
    const expireCheck = product.expirationDate
      ? product.expirationDate < new Date()
      : false;

    if (expireCheck) {
      console.log("ERROR: Product is expired!");
      return;
    }
    if (!productCheck) {
      console.log("ERROR: Product not found in the product list!");
      return;
    }
    if (!product.stock) {
      console.log("ERROR: Product is out of stock!");
      return;
    }

    if (Quantity <= 0) {
      console.log("ERROR: Quantity must have value of one or higher !");
      return;
    }

    this.CartItems.push({ product, Quantity });

    const sum: number = Quantity * product.price;
    const weight = product.weight || 0;
    const shipsum: number = (Quantity * weight) / 1000;
    if (shipsum > 0) {
      console.log(Quantity, "x", product.name, "Total weight: ", shipsum, "kg");
    }
    console.log(Quantity, "x", product.name, "Total price: ", sum);
  }

  EmptyCheckout(): void {
    if (this.CartItems.length === 0) {
      console.log("Your cart is empty.");
      return;
    }
  }
}

const cart = new Cart();
cart.add(productslist[2], 5);
