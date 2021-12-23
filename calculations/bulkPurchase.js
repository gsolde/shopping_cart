const bulkPurchaseCalcMethod = (cartItems, item, offerQty, offerPrice) => {
  let offerItems = cartItems.filter(cartItem => cartItem.code === item.code);

  let subtotal = 0;
  let updatedCartItems = cartItems;

  if (offerItems.length >= offerQty) {
    subtotal = offerItems.length * offerPrice;
    updatedCartItems = cartItems.filter(cartItem => cartItem.code !== item.code);
  }

  return { subtotal, updatedCartItems };
};

export default bulkPurchaseCalcMethod;
