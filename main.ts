import { Cart } from "./addproduct";
import { customerlist, Customer } from "./Customer";
import { productslist, Product } from "./Products";

customerlist[0].cart = new Cart();
customerlist[0].cart.add(productslist[0], 3);
customerlist[0].cart.add(productslist[1], 1);

customerlist[1].cart = new Cart();
customerlist[1].cart.add(productslist[2], 10);
customerlist[1].cart.add(productslist[3], 7);

customerlist[2].cart = new Cart();
customerlist[2].cart.add(productslist[1], 1);
customerlist[2].cart.add(productslist[2], 5);

console.log(customerlist[0].cart);
