import Item from "./classes/item.js";
import Offer from "./classes/offer.js";
import ShoppingCart from "./classes/shoppingCart.js";

import twoForOneCalcMethod from "./calculations/twoForOne.js";
import bulkPurchaseCalcMethod from "./calculations/bulkPurchase.js";

const voucher = new Item("VOUCHER", "Voucher", 5);
const tshirt = new Item("TSHIRT", "T-Shirt", 20);
const mug = new Item("MUG", "Mug", 7);

const twoForOne = new Offer("twoForOne", twoForOneCalcMethod);
twoForOne.applyToItem(voucher);
twoForOne.applyToItem(mug);

const bulkPurchase = new Offer("bulkPurchase", bulkPurchaseCalcMethod, 3, 19);
bulkPurchase.applyToItem(tshirt);

const shoppingCart = new ShoppingCart([twoForOne]);
shoppingCart.addOffer(bulkPurchase);

shoppingCart.addItem(mug);
shoppingCart.addItem(voucher);
shoppingCart.addItem(tshirt);
shoppingCart.addItem(voucher);
shoppingCart.addItem(voucher);
shoppingCart.addItem(tshirt);
shoppingCart.addItem(tshirt);
shoppingCart.addItem(mug);

console.log(shoppingCart.getTotal());
