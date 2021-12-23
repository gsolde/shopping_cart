import { v4 } from "uuid";

class Item {
  constructor(code, itemName, price) {
    this.id = v4();
    this.code = code;
    this.itemName = itemName;
    this.price = price;
  }
}

export default Item;
