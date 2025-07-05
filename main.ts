import { Cart } from "./AddProduct";
import { customerlist } from "./Customer";
import { productslist } from "./Products";
import { Checkout } from "./Checkout";

/*customerlist[0].cart = new Cart();
customerlist[0].cart.add(productslist[0], 3);
customerlist[0].cart.add(productslist[4], 1);
Checkout(customerlist[0], customerlist[0].cart);*/

/*customerlist[1].cart = new Cart();
customerlist[1].cart.add(productslist[2], 10);
customerlist[1].cart.add(productslist[3], 7);
Checkout(customerlist[1], customerlist[1].cart);*/

/*customerlist[2].cart = new Cart();
customerlist[2].cart.add(productslist[1], 1);
customerlist[2].cart.add(productslist[2], 5);
Checkout(customerlist[2], customerlist[2].cart);*/

customerlist[3].cart = new Cart();
customerlist[3].cart.add(productslist[0], 2);
Checkout(customerlist[3], customerlist[3].cart);
