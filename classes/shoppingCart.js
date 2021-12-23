class ShoppingCart {
  constructor(offers) {
    this.items = [];
    this.offers = offers || [];
    this.total = 0;
  }

  addOffer(offer) {
    this.offers =
      this.offers.length && this.offers.some(o => o.offerName === offer.offerName)
        ? this.offers
        : [...this.offers, offer];
  }

  addItem(item) {
    this.items = [...this.items, item];
  }

  getTotal() {
    let updatedCartItems = this.items;

    for (const offer of this.offers) {
      const { offerSubtotal, remainingCartItems } = offer.applyToCart(updatedCartItems);
      this.total += offerSubtotal;
      updatedCartItems = remainingCartItems;
    }

    if (updatedCartItems)
      return updatedCartItems.reduce((total, item) => {
        const { price } = item;
        return (total += price);
      }, this.total);
  }
}

export default ShoppingCart;
