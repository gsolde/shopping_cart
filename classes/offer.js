class Offer {
  constructor(offerName, offerCalc, offerQty, offerPrice, items = []) {
    this.items = items;
    this.offerName = offerName;
    this.offerCalc = offerCalc;
    this.offerQty = offerQty;
    this.offerPrice = offerPrice;
  }

  applyToItem(item) {
    const { code } = item;
    this.items = this.items.some(i => i.code === item.code) ? this.items : [...this.items, item];
    console.log(`---> Item ${code} added to ${this.offerName} offer`);
  }

  applyToCart(cartItems) {
    let offerSubtotal = 0;
    let remainingCartItems = cartItems;

    for (const item of this.items) {
      const { subtotal, updatedCartItems } = this.offerCalc(remainingCartItems, item, this.offerQty, this.offerPrice);
      remainingCartItems = updatedCartItems;
      offerSubtotal += subtotal;
    }

    return { offerSubtotal, remainingCartItems };
  }
}

export default Offer;
